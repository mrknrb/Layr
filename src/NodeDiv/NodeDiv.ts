import {MrkS3} from "../MrkS3/MrkS3.js";
import {Layouts} from "./Elements/Layouts.js";
import {NodeDivAllData} from "./NodeDivAllData.js";
import {MainElement} from "./Elements/MainElements/MainElement.js";
import {ElementsManager} from "./ElementsManager.js";

export class NodeDiv {
	mrkS3: MrkS3
	nodeDivAllData: NodeDivAllData
	mainElement: MainElement
	elementsManager: ElementsManager

	constructor(mrkS3: MrkS3) {
		this.mrkS3 = mrkS3

		this.nodeDivAllData = new NodeDivAllData()
		this.nodeDivAllData.nodeDivData.nodeDivId = (Math.random() * 1000000).toString()
		this.mainElement = new MainElement(this)
		this.elementsManager = new ElementsManager(this)
		this.elementsManager.elementsInit()
	}

	refresher() {
		this.layoutRefresh()
		this.elementsManager.elementsRefresh()
	}

	layoutRefresh() {
		this.nodeDivAllData.nodeDivData.root ? this.mainElement.mainElementLayouts.layoutApply(Layouts.root) :
			this.mainElement.mainElementLayouts.layoutApply(this.nodeDivAllData.nodeDocData.nodeData.layout)
	}


}