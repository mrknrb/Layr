import {Layouts} from "../Layouts/Layouts.js";
import {MainElement} from "./Elements/MainElements/MainElement.js";
import {ElementsManager} from "./ElementsManager.js";
import {NodeDivData} from "./NodeDivData.js";
import {DocDataObject} from "../../Background/Data/DocData/DocDataObject.js";

export abstract class NodeDivBase {

	nodeDivData: NodeDivData
	mainElement: MainElement
	elementsManager: ElementsManager

	constructor() {
		this.nodeDivData = new NodeDivData()
		this.mainElement = new MainElement(this)
		this.elementsManager = new ElementsManager(this)
	}


	abstract nodeInit(nodeDivData:NodeDivData)


	refresher() {
		this.layoutRefresh()
		this.elementsManager.elementsRefresh()
	}
	abstract layoutRefresh()

}