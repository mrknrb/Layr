import {NodeDivBase} from "../NodeDiv/NodeDivBase.js";
import {DocFieldekhezElementSettingsDefault} from "./DocFieldekhezElementSettingsDefault.js";
import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./ElementTypesClassFinder.js";

export class ElementsManager {
    elements: Map<string, any>
    nodeDiv: NodeDivBase

    constructor(nodeDiv: NodeDivBase) {
        this.nodeDiv = nodeDiv
        this.elements = new Map<string, any>()
    }

    elementsInit() {
        let self = this
        let docFieldsData = this.nodeDiv.nodeDivData.hivatkozottDocDataObject.docData.docFields
        docFieldsData.forEach(function (docFieldData) {
            let docFieldDefaultSettings = DocFieldekhezElementSettingsDefault.find(docFieldDefaultSettings => docFieldDefaultSettings.docFieldName == docFieldData.name);

            let element =ElementTypesClassFinder[docFieldData.elementType]
            let elementObject = new element(self.nodeDiv, docFieldData.data, docFieldDefaultSettings.ElementSettings)
            self.elements.set(docFieldData.name, elementObject)

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
        this.elements = new Map<string, any>()
    }
}