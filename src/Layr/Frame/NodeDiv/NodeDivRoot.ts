import {DocDataObject} from "../../Background/Data/DocData/DocDataObject.js";
import {NodeDivBase} from "./NodeDivBase.js";
import {Layouts} from "../Layouts/Layouts.js";
import {NodeDivData} from "./NodeDivData.js";

export class NodeDivRoot extends NodeDivBase{

	nodeInit(nodeDivData:NodeDivData){
		this.nodeDivData=nodeDivData
		this.refresher()
	}
	layoutRefresh() {
		this.mainElement.mainElementLayouts.layoutApply(Layouts.root)
	}
}