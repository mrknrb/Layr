import {Layouts} from "../../../Layouts/Layouts.js";
import {MainElementLayoutBase} from "./MainElementLayoutBase.js";


export class MainElementLayoutNormal extends MainElementLayoutBase{
	layoutApply(layoutRootHaUres?: Layouts){

		let nodeData = this.mainElem.nodeDiv.nodeDivData.nodeData
		this.layoutClean()
		this.layoutDefault()
		let s = this.mainElem.element.style
			let d = nodeData.nodeLayoutsData
			if (layoutRootHaUres === Layouts.absolute) {
				s.position = "absolute"
				d.absolute.top ? s.top = d.absolute.top : null
				d.absolute.left ? s.left = d.absolute.left : null
			} else if (layoutRootHaUres === Layouts.fixed) {
				s.position = "fixed"
				d.fixed.top ? s.top = d.fixed.top : null
				d.fixed.left ? s.left = d.fixed.left : null
			} else if (layoutRootHaUres === Layouts.static) {
				s.position = "static"
			}
		}




}
