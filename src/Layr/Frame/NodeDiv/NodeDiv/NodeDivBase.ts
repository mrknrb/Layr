import {Layouts} from "../../Layouts/Layouts.js";
import {MainElementBase} from "../MainElement/MainElementBase.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {NodeDivData} from "../NodeDivData.js";
import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";

export abstract class NodeDivBase {

	nodeDivData: NodeDivData
	mainElement: MainElementBase
	elementsManager: ElementsManager

	constructor(nodeDivData:NodeDivData) {

		this.nodeDivData = nodeDivData
		this.mainElement = new MainElementBase(this)
		this.elementsManager = new ElementsManager(this)
		this.refresher()
	}




	refresher() {
		this.layoutRefresh()
		this.elementsManager.elementsRefresh()
	}
	abstract layoutRefresh()

}