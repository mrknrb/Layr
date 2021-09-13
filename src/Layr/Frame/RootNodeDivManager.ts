import {LayrBackground} from "../Background/LayrBackground.js";
import {NodeDivRoot} from "./NodeDiv/NodeDivObject/NodeDivRoot.js";


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

		this.layrBackground.docsManager.docGetOrDownload(docURL, function (doc) {
			self.nodeDivRoot = new NodeDivRoot(doc)
			self.nodeDivRoot.fullScreenElementApply()
		})
	}

}
