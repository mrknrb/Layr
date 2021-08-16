import {MainElementLayoutBase} from "./Layout/MainElementLayoutBase.js";
import {NodeData} from "../../../Background/Data/NodeData/NodeData.js";
import {NodeDivBase} from "../NodeDiv/NodeDivBase.js";


export abstract class MainElementBase {
	element: HTMLDivElement
	nodeDiv: NodeDivBase
	mainElementLayout: MainElementLayoutBase

	constructor(nodeDiv: NodeDivBase) {
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


}











