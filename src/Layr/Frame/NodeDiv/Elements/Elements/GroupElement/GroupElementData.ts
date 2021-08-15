import {Layouts} from "../../../../Layouts/Layouts.js";
import {DocData} from "../../../../../Background/Data/DocData/DocData.js";
import {NodeData} from "../../../../../Background/Data/NodeData/NodeData.js";
import {DocFieldhezElementSettings} from "../../../../../Background/Data/NodeData/DocFieldhezElementSettings.js";


export class GroupElementData {

	constructor() {
		this.nodes = []
		this.localDocs = []
		this.docFieldekhezElementSettingsGroupSzinten = []


	}

	nodes: NodeData[]
	localDocs: DocData[]
	docFieldekhezElementSettingsGroupSzinten: DocFieldhezElementSettings[]
	groupDefaultLayout: Layouts
}