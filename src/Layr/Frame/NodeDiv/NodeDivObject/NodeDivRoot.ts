import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {NodeDivBase} from "./NodeDivBase.js";
import {Layouts} from "../../Layouts/Layouts.js";
import {MainElementRoot} from "../MainElement/MainElementRoot.js";

export class NodeDivRoot extends NodeDivBase{

	constructor(hivatkozottDocDataObject: DocDataObject) {
		super();
		this.nodeDivData.rootInit(hivatkozottDocDataObject)
		this.mainElement=new MainElementRoot(this)
		this.refresher()
	}


	layoutRefresh() {
		this.mainElement.layoutApply(Layouts.root)
	}

	removeNodeDiv() {
	}
}