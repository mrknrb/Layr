import {LayrBackground} from "../Background/LayrBackground.js";
import {NodeDivRoot} from "./NodeDiv/NodeDivObject/NodeDivRoot.js";
import {DocDataObject} from "../Background/Data/DocData/DocDataObject.js";


export class RootNodeDivManager {

	layrBackground: LayrBackground
	nodeDivRoot: NodeDivRoot

	constructor() {
		 let bkg = chrome.extension.getBackgroundPage()
		// @ts-ignore
		this.layrBackground = bkg.layr
	}

	createRootNodeDiv(docURL: string) {
		let self = this

		this.layrBackground.docsManager.docGetOrDownload(docURL, function (docDataObject:DocDataObject) {

			self.nodeDivRoot = new NodeDivRoot(docDataObject)
			self.nodeDivRoot.fullScreenElementApply()
		})
	}

}
