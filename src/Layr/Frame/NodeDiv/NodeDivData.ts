import {NodeData} from "../../Background/Data/NodeData/NodeData.js";
import {DocDataObject} from "../../Background/Data/DocData/DocDataObject.js";
import {DocField} from "../../Background/Data/DocData/DocField.js";
import {NodeDivBase} from "./NodeDivObject/NodeDivBase.js";
import {MainElementBase} from "./MainElement/MainElementBase.js";
import {ElementBaseClass} from "./Elements/ElementBaseClass.js";

export class NodeDivData {
	//a nodediv osszes hivatkozasa
	parentElement: ElementBaseClass
	nodeData: NodeData
	hivatkozottDocDataObject: DocDataObject //rootnal csak a docDataobject van meg

	//nodeDivId: string  //root
	root: boolean = false //root
	constructor() {
		//this.nodeDivId = (Math.random() * 1000000).toString()
	}

	rootInit(hivatkozottDocDataObject: DocDataObject) {
		this.root = true
		this.hivatkozottDocDataObject = hivatkozottDocDataObject

	}

	normalInit(
	           parentElement: ElementBaseClass,
	           nodeData: NodeData,
	           hivatkozottDocDataObject: DocDataObject) {
		this.parentElement = parentElement
		this.nodeData = nodeData
		this.hivatkozottDocDataObject = hivatkozottDocDataObject
	}

}