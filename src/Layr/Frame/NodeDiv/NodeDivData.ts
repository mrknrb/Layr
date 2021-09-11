import {NodeData} from "../../Background/Data/NodeData/NodeData.js";
import {DocDataObject} from "../../Background/Data/DocData/DocDataObject.js";
import {DocField} from "../../Background/Data/DocData/DocField.js";
import {NodeDivBase} from "./NodeDiv/NodeDivBase.js";
import {MainElementBase} from "./MainElement/MainElementBase.js";
import {ElementBaseClass} from "./Elements/ElementBaseClass.js";

export class NodeDivData {
	//a nodediv osszes hivatkozasa
	parentDocDataObject: DocDataObject
	parentElement: ElementBaseClass
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
	           parentElement: ElementBaseClass,
	           nodeData: NodeData,
	           hivatkozottDocDataObject: DocDataObject,
	           parentNodeDiv: NodeDivBase) {
		this.parentDocDataObject = parentDocDataObject
		this.parentElement = parentElement
		this.nodeData = nodeData
		this.hivatkozottDocDataObject = hivatkozottDocDataObject
		this.parentNodeDiv = parentNodeDiv
	}

}