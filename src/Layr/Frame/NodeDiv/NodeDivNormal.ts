import {DocDataObject} from "../../Background/Data/DocData/DocDataObject.js";
import {NodeDivBase} from "./NodeDivBase.js";
import {NodeDivData} from "./NodeDivData.js";

export class NodeDivNormal extends NodeDivBase{
	nodeInit(nodeDivData:NodeDivData){
		this.nodeDivData=	nodeDivData
		this.refresher()
	}
	layoutRefresh(){
		this.mainElement.mainElementLayouts.layoutApply(this.nodeDivData.nodeData.layout)

	}
}