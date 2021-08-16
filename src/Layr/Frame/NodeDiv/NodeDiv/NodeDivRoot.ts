import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {NodeDivBase} from "./NodeDivBase.js";
import {Layouts} from "../../Layouts/Layouts.js";
import {NodeDivData} from "../NodeDivData.js";

export class NodeDivRoot extends NodeDivBase{

	constructor(nodeDivData:NodeDivData){
		super(nodeDivData);
	}


	layoutRefresh() {
		this.mainElement.mainElementLayout.layoutApply(Layouts.root)
	}
}