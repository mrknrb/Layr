import {Layouts} from "../Layouts.js";
import {MainElement} from "./MainElement.js";

export class MainElementLayouts {
	mainElem: MainElement

	constructor(mainElem: MainElement) {
		this.mainElem = mainElem

	}


	private layoutClean() {
		this.mainElem.element.removeAttribute("style")
	}

	private layoutDefault() {
		this.mainElem.element.style.cssText += `
                border-style: solid;
                overflow: hidden;
                resize: horizontal;
                background-color: antiquewhite;
                min-width: 40px;
                min-height: 20px;              
                height: fit-content;
                z-index:2100000000 ;
                width:40px;
                `
	}

	layoutApply(layout: Layouts): void {
		let s = this.mainElem.element.style
		let nodeData=this.mainElem.nodeDiv.nodeDivAllData.nodeDocData.nodeData
		this.layoutClean()
		this.layoutDefault()

		if (layout === Layouts.root) {
			s.position = "fixed"
			s.bottom = "6ch"
			s.left = "0px"
			s.width="300px"
			document.body.appendChild(this.mainElem.element)
		} else {
			let d = nodeData.layoutsData
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
		}

	}


}