import {LayrBackground} from "../Background/LayrBackground.js";
import {DocData} from "../Background/Data/DocData/DocData.js";
import {NodeDivBase} from "./NodeDiv/NodeDivObject/NodeDivBase.js";
import {GroupElementData} from "./NodeDiv/Elements/Elements/GroupElement/GroupElementData.js";
import {DocURLObject} from "../Background/Arangodb/ArangoAdatok/DocURLObject.js";
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
		})
	}

}
