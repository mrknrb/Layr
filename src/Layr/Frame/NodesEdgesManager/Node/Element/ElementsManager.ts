import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./Adatok/ElementTypesClassFinder.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";

export class ElementsManager {
    elements: Map<string, ElementBaseClass>
    nodeObject: NodeObjectBase

    constructor(nodeObject: NodeObjectBase) {
        this.nodeObject = nodeObject
        this.elements = new Map<string, any>()
    }

    elementsInit() {
        let docFieldObjects = LayrFind.doc(this.nodeObject.docId).fieldObjects
        docFieldObjects.forEach((fieldObject) => {
            this.elementLoad(fieldObject)
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

    elementLoad(fieldObject:FieldObject) {
        let elementClass = ElementTypesClassFinder[fieldObject.fieldData.elementType]
        let elementObject: ElementBaseClass = new elementClass(this.nodeObject, fieldObject.fieldData.fieldId) as ElementBaseClass
        this.elements.set(fieldObject.fieldData.fieldId, elementObject)
    }

    newElement(fieldName: string, elementType: string) {
        console.log(fieldName,elementType)
        console.log(this.nodeObject.docId)
        let doc=LayrFind.doc(this.nodeObject.docId)
        console.log(doc)
        let fieldObject = doc.newField(fieldName, elementType)

        this.elementLoad(fieldObject)
    }
}