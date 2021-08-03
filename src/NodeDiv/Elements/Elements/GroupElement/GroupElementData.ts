import {Layouts} from "../../Layouts.js";
import {DocData} from "../../../NodeDocData/DocData/DocData.js";
import {NodeData} from "../../../NodeDocData/NodeData/NodeData.js";
import {DocFieldhezElementSettings} from "../../../NodeDocData/NodeData/DocFieldhezElementSettings.js";


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