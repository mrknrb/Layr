import {LayrBackground} from "./LayrBackground.js";
import {DocData} from "./Data/DocData/DocData.js";
import {DocDataObject} from "./Data/DocData/DocDataObject.js";
import {NodeDiv} from "../Frame/NodeDiv/NodeDiv.js";
import {NodeDivData} from "../Frame/NodeDiv/NodeDivData.js";

export class DocsManager {

	layr: LayrBackground
	docsMap: Map<string, DocDataObject>


	constructor(layr: LayrBackground) {
		this.layr = layr
		this.docsMap = new Map<string, DocDataObject>()
	}

	async docsDownloadAndLoad(docURLs: string[], callback) {
		let self = this
		this.layr.arangoMrk.docsDownloader(docURLs, function (docs: DocData[]) {
			docs.forEach(function (docData) {
				self.docsMap.set(docData._key, new DocDataObject(docData))
			})
			callback()
		})
	}

	async docGetOrDownload(docURL: string, callback) {
		let doc = this.docsMap.get(docURL)
		if (doc == undefined) {
			this.docsDownloadAndLoad([docURL], function () {
				let doc2 = this.docsMap.get(docURL)
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