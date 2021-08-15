import {NodeData} from "../../Background/Data/NodeData/NodeData.js";

export class NodeDivData {
	nodeData: NodeData
	//lehet a node objectet kene rogziteni es akkor nem kene az urlekkel bajlodni, foleg, hogy node nelkul nincs nodediv
	nodeDivId: string
	parentNodeDivId: string
	root: boolean
}