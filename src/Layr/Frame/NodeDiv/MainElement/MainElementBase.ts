import {NodeDivInterface} from "../NodeDivObject/NodeDivInterface.js";


export abstract class MainElementBase {
	element: HTMLDivElement
	nodeDiv:NodeDivInterface

	constructor(nodeDiv ) {
		this.nodeDiv = nodeDiv
		this.elementInit()
	}

	private elementInit() {
		this.element = document.createElement("div")
		this.element.setAttribute("class", "NodeDivMrkS")
		this.element.addEventListener("mousedown", function (e) {
			e.stopPropagation()
		})

		this.element.addEventListener("mouseenter", function (e) {

		})
		this.element.addEventListener("mouseleave", function (e) {

		})
	}
	abstract layoutApply()
	protected layoutClean() {
		this.element.removeAttribute("style")
	}

	protected layoutDefault() {
		this.element.style.cssText += `
                border-style: solid;
                resize: horizontal;
                background-color: antiquewhite;
                min-width: 40px;
                min-height: 20px;              
                height: fit-content;
                z-index:2100000000 ;
                width:40px;
                `
	}

}











