import {Layouts} from "../../Layouts/Layouts.js";
import {MainElementBase} from "../MainElement/MainElementBase.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {NodeDivData} from "../NodeDivData.js";
import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";

export abstract class NodeDivBase {

	nodeDivData: NodeDivData
	mainElement: MainElementBase
	elementsManager: ElementsManager

	constructor() {
		this.elementsManager = new ElementsManager(this)

	}




	refresher() {
		this.layoutRefresh()
		this.elementsManager.elementsRefresh()
	}
	abstract layoutRefresh()

}