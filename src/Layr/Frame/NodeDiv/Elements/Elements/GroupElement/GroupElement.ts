import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivBase} from "../../../NodeDiv/NodeDivBase.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {ResizeTypes} from "../../ElementResizer/ResizeTypes.js";
import {GroupElementSettings} from "./GroupElementSettings.js";
import {GroupElementData} from "./GroupElementData.js";


export class GroupElement extends ElementBaseClass {
	element: HTMLDivElement
	elementResizer: ElementResizer
	elementSettings:GroupElementSettings
	elementData:GroupElementData

	constructor(nodeDiv: NodeDivBase, elementData, elementSettings) {
		super(ElementTypes.Group, nodeDiv, elementData, elementSettings);
		this.elementResizer = new ElementResizer(this)

		this.elementResizer.resizeActivate(ResizeTypes.autoXY)
	}

	private elementInit() {
		let self = this
		this.element = document.createElement("div")
		this.element.style.border = `black`
		this.element.style.width = "calc(100% - 5px)"
		this.element.style.height = "50px"

		this.element.addEventListener("mousedown", function (e) {
			e.stopPropagation()
		})
		this.nodeDiv.mainElement.element.appendChild(this.element)
		this.refreshData()
	}


	refreshData() {

	}

	deleteElement() {
	}


}