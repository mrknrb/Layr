import {NodeDivBase} from "./NodeDivBase.js";
import {DocFieldekhezElementSettingsDefault} from "./Elements/DocFieldekhezElementSettingsDefault.js";
import {ElementTypesClassFinder} from "./Elements/ElementTypesClassFinder.js";
import {ElementBaseClass} from "./Elements/ElementBaseClass.js";

export class ElementsManager {
	elements: Map<string, any>
	nodeDiv: NodeDivBase

	constructor(nodeDiv: NodeDivBase) {
		this.nodeDiv = nodeDiv
		this.elements = new Map<string, any>()
	}

	elementsInit() {
		let self=this
		let docFieldsData = this.nodeDiv.nodeDivData.nodeDocData.docData.docFields
		docFieldsData.forEach(function (docFieldData) {
			DocFieldekhezElementSettingsDefault.forEach(function (docFieldDefaultSettings) {
				if (docFieldData.name == docFieldDefaultSettings.docFieldName) {
					let element = ElementTypesClassFinder.find(docFieldDefaultSettings.elementType)
					let elementObject = new element(self.nodeDiv, docFieldData.data, docFieldDefaultSettings.ElementSettings)
					self.elements.set(docFieldData.name, elementObject)
				}
			})
		})
	}

	elementsRefresh() {
		this.elementsDelete()
		this.elementsInit()
	}

	elementsDelete() {
		this.elements.forEach(function (element: ElementBaseClass) {
			element.deleteElement()
		})
		this.elements= new Map<string, any>()
	}
}