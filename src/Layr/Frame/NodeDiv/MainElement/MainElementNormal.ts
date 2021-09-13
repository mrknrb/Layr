import {MainElementBase} from "./MainElementBase.js";
import {NodeDivNormal} from "../NodeDivObject/NodeDivNormal.js";
import {Layouts} from "../../Layouts/Layouts.js";

export class MainElementNormal extends MainElementBase{
	nodeDiv: NodeDivNormal
	constructor(nodeDiv: NodeDivNormal) {
		super(nodeDiv);




	}
	layoutApply() {
		let nodeData = this.nodeDiv.nodeData
		let layout = this.nodeDiv.nodeData.layout
		this.layoutClean()
		this.layoutDefault()
		let s = this.element.style
		let d = nodeData.nodeLayoutsData
		s.overflow="hidden"
		s.resize="horizontal"
		if (layout === Layouts.absolute) {
			s.position = "absolute"
			d.absolute.top ? s.top = d.absolute.top : null
			d.absolute.left ? s.left = d.absolute.left : null
			d.absolute.width ? s.width = d.absolute.width : null
		} else if (layout === Layouts.fixed) {
			s.position = "fixed"
			d.fixed.top ? s.top = d.fixed.top : null
			d.fixed.left ? s.left = d.fixed.left : null
		} else if (layout === Layouts.static) {
			s.position = "static"
		}
		this.nodeDiv.parentGroupElement.element.appendChild(this.element)
	}

}