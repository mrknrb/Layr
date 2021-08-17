import {LayrBackground} from "./LayrBackground.js";
import {DocData} from "./Data/DocData/DocData.js";
import {DocDataObject} from "./Data/DocData/DocDataObject.js";
import {NodeDivBase} from "../Frame/NodeDiv/NodeDiv/NodeDivBase.js";
import {NodeDivData} from "../Frame/NodeDiv/NodeDivData.js";
import {DocGetResponseMessage} from "./Arangodb/ArangoAdatok/DocGetResponseMessage.js";

export class DocsManager {

	layr: LayrBackground
	docsMap: Map<string, DocDataObject>


	constructor(layr: LayrBackground) {
		this.layr = layr
		this.docsMap = new Map<string, DocDataObject>()
	}




	 docsDownloadAndLoad(docURLs: string[], callback) {
		let self = this
		this.layr.arangoMrk.docsDownloader(docURLs, function (docs:DocGetResponseMessage[]) {

			docs.forEach(function (docDataResponse) {
				self.docsMap.set(docDataResponse.URL, new DocDataObject(docDataResponse.doc))
			})
			callback()
		})
	}

	 docGetOrDownload(docURL: string, callback) {
		let self=this
		let doc = this.docsMap.get(docURL)

		if (doc == undefined) {
			 this.docsDownloadAndLoad([docURL], function () {

				let doc2 = self.docsMap.get(docURL)
				 console.log(doc2)

				if (doc2 == undefined) {
					callback(null)
				} else {
					callback(doc2)
				}
			})
		} else {
			callback(doc)
		}
	}


}