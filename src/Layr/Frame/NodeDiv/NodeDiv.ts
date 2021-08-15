import {LayrBackground} from "../../Background/LayrBackground.js";
import {Layouts} from "../Layouts/Layouts.js";
import {MainElement} from "./Elements/MainElements/MainElement.js";
import {ElementsManager} from "./ElementsManager.js";
import {NodeDivData} from "./NodeDivData.js";
import {DocData} from "../../Background/Data/DocData/DocData.js";
import {NodeData} from "../../Background/Data/NodeData/NodeData.js";

export class NodeDiv {
	nodeDivData: NodeDivData
	mainElement: MainElement
	elementsManager: ElementsManager

	constructor() {
		this.nodeDivData = new NodeDivData()
		this.nodeDivData.nodeDivId = (Math.random() * 1000000).toString()
		this.mainElement = new MainElement(this)
		this.elementsManager = new ElementsManager(this)
	}

	rootInit(docData:DocData){
		this.nodeDivData.root=true
		let node=new NodeData()
		this.nodeDivData.nodeData=node

	}



	refresher() {
		this.layoutRefresh()
		this.elementsManager.elementsRefresh()
	}

	layoutRefresh() {
		this.nodeDivData.root ? this.mainElement.mainElementLayouts.layoutApply(Layouts.root) :
			this.mainElement.mainElementLayouts.layoutApply(this.nodeDivData.nodeData.layout)
	}


}