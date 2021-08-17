import {MainElementLayoutBase} from "./MainElementLayoutBase.js";
import {Layouts} from "../../../Layouts/Layouts.js";


export class MainElementLayoutRoot extends MainElementLayoutBase {

	layoutApply(layoutRootHaUres?: Layouts) {
		let nodeData = this.mainElem.nodeDiv.nodeDivData.nodeData
		this.layoutClean()
		this.layoutDefault()
		let s = this.mainElem.element.style
		s.position = "fixed"
		s.bottom = "6ch"
		s.left = "0px"
		s.width = "300px"
		document.body.appendChild(this.mainElem.element)
	}


}