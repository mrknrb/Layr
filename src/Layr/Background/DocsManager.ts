import {LayrBackground} from "./LayrBackground.js";
import {DocDataObject} from "./Data/DocData/DocDataObject.js";
import {DocDataResponse} from "./Data/DocData/DocDataResponse.js";

export class DocsManager {

	layr: LayrBackground
	docsMap: Map<string, DocDataObject>


	constructor(layr: LayrBackground) {
		this.layr = layr
		this.docsMap = new Map<string, DocDataObject>()
	}


	docGetOrDownload(docURL: string, callback) {
		let self=this
		let docDataObjectMeglevo = this.docsMap.get(docURL)

		if (docDataObjectMeglevo == undefined) {
			this.docDownloadAndLoad(docURL, function (docDataObject) {

				let doc2 = self.docsMap.get(docURL)

				if (doc2 == undefined) {
					callback(null)
				} else {
					callback(docDataObject)
				}
			})
		} else {
			callback(docDataObjectMeglevo)
		}
	}



	private docDownloadAndLoad(docURL: string, callback) {
		let self = this
		this.layr.arangoMrk.docDownloader(docURL, function (docResponse:DocDataResponse) {

let docDataObject=new DocDataObject(docResponse.docAbsoluteURL,docResponse.docData)
			self.docsMap.set(docResponse.docAbsoluteURL,docDataObject)

			callback(docDataObject)
		})
	}


}