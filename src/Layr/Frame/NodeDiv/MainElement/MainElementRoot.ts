import {MainElementBase} from "./MainElementBase.js";
import {NodeDivBase} from "../NodeDivObject/NodeDivBase.js";
import {NodeDivNormal} from "../NodeDivObject/NodeDivNormal.js";
import {NodeDivRoot} from "../NodeDivObject/NodeDivRoot.js";
import {MainElementNormal} from "./MainElementNormal.js";
import {Layouts} from "../../Layouts/Layouts.js";

export class MainElementRoot extends MainElementBase{
	constructor(nodeDiv: NodeDivRoot) {
		super(nodeDiv);
	}
	layoutApply(layoutRootHaUres?: Layouts) {
		let nodeData = this.nodeDiv.nodeDivData.nodeData
		this.layoutClean()
		this.layoutDefault()
		let s = this.element.style
		s.position = "fixed"
		s.bottom = "6ch"
		s.left = "0px"
		s.width = "300px"
		document.body.appendChild(this.element)
	}

}