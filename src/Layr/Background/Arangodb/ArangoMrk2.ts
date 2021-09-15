import {DocURLObject} from "./ArangoAdatok/DocURLObject.js";
import {ArangoDBInitData} from "./ArangoAdatok/ArangoDBInitData.js";
import {Lekerdezes} from "./ArangoAdatok/Lekerdezes.js";
import {DocDataObject} from "../Data/DocData/DocDataObject.js";


export class ArangoMrk2 {

    databasesUserData: Map<string, ArangoDBInitData>

    constructor() {
        this.databasesUserData = new Map()
        let dataBaseArgs = new ArangoDBInitData()


        dataBaseArgs.url = "http://localhost:8529"
        dataBaseArgs.databaseName = "_system"
        dataBaseArgs.auth.username = "root"
        dataBaseArgs.auth.password = ""
        this.databasesUserData.set(dataBaseArgs.url, dataBaseArgs)
        this.lekerdezesMap = new Map<string, Lekerdezes>()
    }

    lekerdezesMap: Map<string, Lekerdezes>

    lekerdezesSzamlalomegy: boolean


    async docDownloader(docURL, callback) {
        this.lekerdezesMap.set(docURL, new Lekerdezes(docURL, callback))

        await this.lekerdezesSzamlaloStart()

    }

    async lekerdezesSzamlaloStart() {
        let self = this
        if (!this.lekerdezesSzamlalomegy) {
            this.lekerdezesSzamlalomegy = true
            setTimeout(function () {
                self.lekerdezesSzamlalomegy = false
                let docURLsArray = []

                self.lekerdezesMap.forEach(function (value, key) {
                    docURLsArray.push(key)
                })
                self.docsDownloaderFromArray(docURLsArray)

            }, 20)
        }
    }


    async docsDownloaderFromArray(docURLsArray) {

        let self = this
        let URLsSzetvalogatott = this.URLszetvalogato(docURLsArray)
        let letoltottdocok: DocDataObject[] = []


        URLsSzetvalogatott.forEach(function (hostdbs, hostid) {
            hostdbs.forEach(function (databaseURLObjectArray, databaseid) {
                let docsQueryDataArray = []
                //  console.log(databaseURLObjectArray)
                databaseURLObjectArray.forEach(function (urlObject: DocURLObject) {


                    let docQueryData: any = {}
                    docQueryData.URL = urlObject.UrlString
                    docQueryData.docQueryid = urlObject.docQueryid
                    docsQueryDataArray.push(docQueryData)
                })
                //console.log(docQueryData)
                let userdata = self.databasesUserData.get(hostid)

                // @ts-ignore
                let arangodb = new arangojs.Database(userdata)
                console.log(docsQueryDataArray)

                self.docsDownloaderLekerdezes(docsQueryDataArray, arangodb, function (docs: DocDataObject[]) {

                    docs.forEach(function (doc) {
                        let lekerdezes = self.lekerdezesMap.get(doc.docAbsoluteURL)
                        lekerdezes.callback(doc)
                        self.lekerdezesMap.delete(doc.docAbsoluteURL)
                    })
                    // letoltottdocok = letoltottdocok.concat(docs)
                    // callback(letoltottdocok)
                })


            })
        })


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

    private async docsDownloaderLekerdezes(docsQueryData, arangodb, callback) {
        let docsQueryDataString = JSON.stringify(docsQueryData)
        const docs: DocDataObject[] = await arangodb.query(` 
              let docsQueryData=${docsQueryDataString}  
              LET docs = (
                 FOR docQueryData IN docsQueryData  
                 let docWithUrl=merge({docAbsoluteURL:docQueryData.URL},{docData:DOCUMENT(docQueryData.docQueryid)})
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




