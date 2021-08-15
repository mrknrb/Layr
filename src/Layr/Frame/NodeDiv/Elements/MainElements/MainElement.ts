import {MainElementLayouts} from "./MainElementLayouts.js";
import {NodeData} from "../../../../Background/Data/NodeData/NodeData.js";
import {NodeDiv} from "../../NodeDiv.js";


export class MainElement {
	element: HTMLDivElement
	nodeDiv: NodeDiv
	mainElementLayouts: MainElementLayouts

	constructor(nodeDiv: NodeDiv) {
		this.nodeDiv = nodeDiv
		this.mainElementLayouts = new MainElementLayouts(this)
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


}











