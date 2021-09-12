import {LayrBackground} from "./LayrBackground.js";
import {DocData} from "./Data/DocData/DocData.js";
import {DocDataObject} from "./Data/DocData/DocDataObject.js";
import {NodeDivBase} from "../Frame/NodeDiv/NodeDivObject/NodeDivBase.js";
import {NodeDivData} from "../Frame/NodeDiv/NodeDivData.js";

export class DocsManager {

	layr: LayrBackground
	docsMap: Map<string, DocDataObject>


	constructor(layr: LayrBackground) {
		this.layr = layr
		this.docsMap = new Map<string, DocDataObject>()
	}


	docGetOrDownload(docURL: string, callback) {
		let self=this
		let doc = this.docsMap.get(docURL)

		if (doc == undefined) {
			this.docDownloadAndLoad(docURL, function (docResponse) {

				let doc2 = self.docsMap.get(docURL)

				if (doc2 == undefined) {
					callback(null)
				} else {
					callback(docResponse)
				}
			})
		} else {
			callback(doc)
		}
	}



	private docDownloadAndLoad(docURL: string, callback) {
		let self = this
		this.layr.arangoMrk.docDownloader(docURL, function (docResponse:DocDataObject) {
		let docDataObject=	self.docsMap.set(docResponse.docAbsoluteURL,docResponse)

			callback(docDataObject)
		})
	}


}