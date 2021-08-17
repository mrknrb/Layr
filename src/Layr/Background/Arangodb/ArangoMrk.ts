import {DocURLObject} from "./ArangoAdatok/DocURLObject.js";
import {ArangoDBInitData} from "./ArangoAdatok/ArangoDBInitData.js";
import {DocGetResponseMessage} from "./ArangoAdatok/DocGetResponseMessage.js";


export class ArangoMrk {

	databasesUserData: Map<string, ArangoDBInitData>

	constructor() {
		this.databasesUserData = new Map()
		let dataBaseArgs = new ArangoDBInitData()
		dataBaseArgs.url = "http://localhost:8529"
		dataBaseArgs.databaseName = "_system"
		dataBaseArgs.auth.username = "root"
		dataBaseArgs.auth.password = ""
		this.databasesUserData.set(dataBaseArgs.url, dataBaseArgs)
	}

	private URLszetvalogato(URLsBejovo) {
			// info szetszedi az url-ket 3 melysegben:host,adatbazis,urlobject. hostokat Mapba, adatbazist a hostok mapjaiba, majd az urlobjecteket az adatbazisok array-ebe
		let URLsSzetvalogatott = new Map()

		URLsBejovo.forEach(function (URL) {
			let urlObject = new DocURLObject(URL, null)
			//host szerint szedi szet egy mapbe a databaseket
			if (URLsSzetvalogatott.get(urlObject.urlData.hostid) === undefined) {
				URLsSzetvalogatott.set(urlObject.urlData.hostid, new Map())
			}
			//a databasekhez tartozo urleket egy arraybe teszi
			let host = URLsSzetvalogatott.get(urlObject.urlData.hostid)
			if (host.get(urlObject.urlData.databaseid) === undefined) {
				host.set(urlObject.urlData.databaseid, [])
			}
			let database = host.get(urlObject.urlData.databaseid)
			database.push(urlObject)
		})
		return URLsSzetvalogatott
	}

	async docsDownloader(docURLsArray, callback) {
		let self = this
		let URLsSzetvalogatott = this.URLszetvalogato(docURLsArray)
		let letoltottdocok:DocGetResponseMessage[] = []
		URLsSzetvalogatott.forEach(function (hostdbs, hostid) {
			hostdbs.forEach(function (databaseURLObjectArray, databaseid) {
				let docsQueryDataArray = []
				databaseURLObjectArray.forEach(function (urlObject:DocURLObject) {
					let docQueryData: any = {}
					docQueryData.URL = urlObject.UrlString
					docQueryData.docQueryid = urlObject.docQueryid
					docsQueryDataArray.push(docQueryData)
				})

				let userdata = self.databasesUserData.get(hostid)

				// @ts-ignore
				let arangodb = new arangojs.Database(userdata)


				self.docsDownloaderLekerdezes(docsQueryDataArray, arangodb, function (docs) {

					letoltottdocok = letoltottdocok.concat(docs)
					callback(letoltottdocok)
				})
			})
		})


	}

	private async docsDownloaderLekerdezes(docsQueryData, arangodb, callback) {
		let docsQueryDataString = JSON.stringify(docsQueryData)
		const docs:DocGetResponseMessage[] = await arangodb.query(` 
              let docsQueryData=${docsQueryDataString}  
              LET docs = (
                 FOR docQueryData IN docsQueryData  
                 let docWithUrl=merge({URL:docQueryData.URL},{doc:DOCUMENT(docQueryData.docQueryid)})
               
                RETURN docWithUrl        
                  )   
              RETURN docs
             `)
		for await (const doc of docs) {
			callback(doc)
		}
	}

	async docsUploader(docs, collectionString) {
		// under construction
		//A docid es a childrenek idjeinek az array-e egy objectben legyen es ezt rakd egy arraybe
		// formatum: [{docgroupid,[childdocids]}]
		let userdata = this.databasesUserData.get("http://localhost:8529")

		// @ts-ignore
		let arangodb = new arangojs.Database(userdata)
		let docsString = JSON.stringify(docs)
		try {
			await arangodb.query(`
                          
                FOR doc IN ${docsString}
                INSERT doc INTO ${collectionString}

            `)
		} catch (err) {
			console.error(err.message)
		}
	}


}




