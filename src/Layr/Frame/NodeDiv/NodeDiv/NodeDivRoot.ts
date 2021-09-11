import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {NodeDivBase} from "./NodeDivBase.js";
import {Layouts} from "../../Layouts/Layouts.js";
import {NodeDivData} from "../NodeDivData.js";
import {MainElementRoot} from "../MainElement/MainElementRoot.js";

export class NodeDivRoot extends NodeDivBase{

	constructor(hivatkozottDocDataObject: DocDataObject) {
		super();
		this.nodeDivData.root = true
		this.nodeDivData.hivatkozottDocDataObject = hivatkozottDocDataObject
		this.mainElement=new MainElementRoot(this)
		this.refresher()
	}


	layoutRefresh() {
		this.mainElement.mainElementLayout.layoutApply(Layouts.root)
	}

	removeNodeDiv() {
	}
}