import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivBase} from "../../../NodeDiv/NodeDivBase.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {ResizeTypes} from "../../ElementResizer/ResizeTypes.js";
import {TextAreaElementData} from "./TextAreaElementData.js";
import {TextAreaElementSettings} from "./TextAreaElementSettings.js";


export class TextAreaElement extends ElementBaseClass {

	element: HTMLTextAreaElement
	elementResizer: ElementResizer
	elementSettings:TextAreaElementSettings
	elementData:TextAreaElementData
	constructor(nodeDiv: NodeDivBase, elementData, elementSettings) {
		super(ElementTypes.TextArea, nodeDiv, elementData, elementSettings);
		this.elementInit()
		this.elementResizer = new ElementResizer(this)
		this.elementResizer.resizeActivate(ResizeTypes.autoY)
		let self=this

	}

	protected elementInit() {
		let self = this
		this.element = document.createElement("textarea")
		this.element.style.resize = "none"
		this.element.style.backgroundColor = "transparent"
		this.element.style.width = "calc(100% - 5px)"
		this.element.style.height = "50px"


		this.element.addEventListener("keyup", function (e) {
			self.elementResizer.adjustSize()
		})
		this.element.addEventListener("mousedown", function (e) {
			e.stopPropagation()
		})
		this.nodeDiv.mainElement.element.appendChild(this.element)
		this.refreshData()
	}


	refreshData() {
		this.element.innerText = this.elementData.content
	}

	deleteElement() {
	}
}