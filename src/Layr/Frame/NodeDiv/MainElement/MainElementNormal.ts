import {MainElementBase} from "./MainElementBase.js";
import {NodeDivBase} from "../NodeDivObject/NodeDivBase.js";
import {NodeDivNormal} from "../NodeDivObject/NodeDivNormal.js";
import {Layouts} from "../../Layouts/Layouts.js";

export class MainElementNormal extends MainElementBase{
	constructor(nodeDiv: NodeDivNormal) {
		super(nodeDiv);




	}
	layoutApply() {
		let nodeData = this.nodeDiv.nodeDivData.nodeData
		let layout = this.nodeDiv.nodeDivData.nodeData.layout
		this.layoutClean()
		this.layoutDefault()
		let s = this.element.style
		let d = nodeData.nodeLayoutsData
		if (layout === Layouts.absolute) {
			s.position = "absolute"
			d.absolute.top ? s.top = d.absolute.top : null
			d.absolute.left ? s.left = d.absolute.left : null
		} else if (layout === Layouts.fixed) {
			s.position = "fixed"
			d.fixed.top ? s.top = d.fixed.top : null
			d.fixed.left ? s.left = d.fixed.left : null
		} else if (layout === Layouts.static) {
			s.position = "static"
		}
		this.nodeDiv.nodeDivData.parentElement.element.appendChild(this.element)
	}

}