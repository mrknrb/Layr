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
        let docFieldObjects = LayrFind.doc(this.nodeObject.docId).fieldObjects
        docFieldObjects.forEach((docFieldObject) => {
            this.elementLoad(docFieldObject)
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

    elementLoad(docFieldObject) {
        let elementClass = ElementTypesClassFinder[docFieldObject.fieldData.elementType]
        let elementObject: ElementBaseClass = new elementClass(this.nodeObject, docFieldObject.fieldData.fieldId) as ElementBaseClass
        this.elements.set(docFieldObject.fieldData.fieldId, elementObject)
    }

    newElement() {
        LayrFind.doc(this.nodeObject.docId)

    }
}