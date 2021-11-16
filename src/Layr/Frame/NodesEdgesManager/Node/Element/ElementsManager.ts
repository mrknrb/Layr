import {DocFieldekhezElementStyleDefault} from "./Adatok/DocFieldekhezElementStyleDefault.js";
import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./Adatok/ElementTypesClassFinder.js";
import {NodeObjectInterface} from "../NodeObject/NodeObjectInterface.js";
import {LayrFind} from "../../../../Global/LayrFind.js";

export class ElementsManager {
    elements: Map<string, ElementBaseClass>
    nodeObject: NodeObjectInterface

    constructor(nodeObject: NodeObjectInterface) {
        this.nodeObject = nodeObject
        this.elements = new Map<string, any>()
    }

    elementsInit() {
        let self = this
        let docFieldObjects = LayrFind.doc(this.nodeObject.docId).fieldObjects
        docFieldObjects.forEach(function (docFieldObject) {
            let docFieldDefaultSettings = DocFieldekhezElementStyleDefault.find(docFieldDefaultSettings => docFieldDefaultSettings.docFieldName == docFieldObject.fieldData.fieldName);
            let element = ElementTypesClassFinder[docFieldObject.fieldData.elementType]
            let elementObject: ElementBaseClass = new element(self.nodeObject, docFieldObject.fieldData.fieldId) as ElementBaseClass
            self.elements.set(docFieldObject.fieldData.fieldId, elementObject)
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

    elementToFullScreen(elementId: string) {
        let element = this.elements.get(elementId)
        element.elementInsertFullScreen()
    }

}