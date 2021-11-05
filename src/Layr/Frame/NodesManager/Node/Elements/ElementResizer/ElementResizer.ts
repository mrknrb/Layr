import {ElementBaseClass} from "../ElementBaseClass.js";
import {ResizeTypes} from "./ResizeTypes.js";

export class ElementResizer {
	elementObject: ElementBaseClass
	resizeObserver
	ActiveResizeType: ResizeTypes

	constructor(element: ElementBaseClass) {
		this.elementObject = element
		let self = this
		// @ts-ignore
		this.resizeObserver = new ResizeObserver(function () {
			self.adjustSize()
		}).observe(this.elementObject.element)
		this.resizeActivate(this.elementObject.elementStyle.resizeType)
	}


	public resizeActivate(resizeType: ResizeTypes) {
		this.ActiveResizeType = resizeType
		if (resizeType==ResizeTypes.autoY){
			this.elementObject.element.style.resize = "none"
		}else if(resizeType==ResizeTypes.autoXY){
			this.elementObject.element.style.resize = "none"
		}else if(resizeType==ResizeTypes.manual){
			this.elementObject.element.style.resize = "vertical"
		}else if(resizeType==ResizeTypes.oneLine){
			this.elementObject.element.style.resize = "none"
			this.elementObject.element.style.height = "2ch"
		}
	}

	public adjustSize() {

		if (this.ActiveResizeType == ResizeTypes.autoY || this.ActiveResizeType == ResizeTypes.autoXY) {
			this.elementObject.element.style.height = "5px"
			this.elementObject.element.style.height = (this.elementObject.element.scrollHeight - 3) + "px"
		}
		if (this.ActiveResizeType == ResizeTypes.autoXY) {
			this.elementObject.element.style.width = "5px"
			this.elementObject.nodeObject.mainElement.element.style.width = (this.elementObject.element.scrollWidth) + "px"

		}
	}


}

