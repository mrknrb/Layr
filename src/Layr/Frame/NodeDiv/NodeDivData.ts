import {NodeData} from "../../Background/Data/NodeData/NodeData.js";
import {DocDataObject} from "../../Background/Data/DocData/DocDataObject.js";
import {DocField} from "../../Background/Data/DocData/DocField.js";
import {NodeDivBase} from "./NodeDiv/NodeDivBase.js";

export class NodeDivData {
	//a nodediv osszes hivatkozasa
	parentDocDataObject: DocDataObject
	parentDocField: DocField
	nodeData: NodeData
	hivatkozottDocDataObject: DocDataObject //rootnal csak a docDataobject van meg

	//nodeDivId: string  //root
	parentNodeDiv: NodeDivBase
	root: boolean = false //root
	constructor() {
		//this.nodeDivId = (Math.random() * 1000000).toString()
	}

	rootInit(hivatkozottDocDataObject: DocDataObject) {
		this.root = true
		this.hivatkozottDocDataObject = hivatkozottDocDataObject

	}

	normalInit(parentDocDataObject: DocDataObject,
	           parentDocField: DocField,
	           nodeData: NodeData,
	           hivatkozottDocDataObject: DocDataObject,
	           parentNodeDiv: NodeDivBase) {
		this.parentDocDataObject = parentDocDataObject
		this.parentDocField = parentDocField
		this.nodeData = nodeData
		this.hivatkozottDocDataObject = hivatkozottDocDataObject
		this.parentNodeDiv = parentNodeDiv
	}

}