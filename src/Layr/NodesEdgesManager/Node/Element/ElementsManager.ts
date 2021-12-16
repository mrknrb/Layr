import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./Adatok/ElementTypesClassFinder.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {FieldObject} from "../../../DocsConnsManager/Data/Doc/Field/FieldObject.js";
import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";

export class ElementsManager {
    elements: Map<string, ElementBaseClass>
    nodeObject: NodeObjectBase
elementCreatedEvent:TypedEvent<ElementBaseClass>
    constructor(nodeObject: NodeObjectBase) {
        this.elementCreatedEvent=new TypedEvent<ElementBaseClass>()
        this.nodeObject = nodeObject
        this.elements = new Map<string, any>()
    }

    getElement(fieldId: string) {
        return this.elements.get(fieldId)

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

    elementToFullScreen(fieldId: string) {

        let element = this.elements.get(fieldId)
        this.elements.forEach(element => {
            if(element.element.parentElement==document.querySelector("#workScreenDiv")) {
                element.elementInsertFullScreenOrNode(false)
            }
        })

        element.elementInsertFullScreenOrNode(true)
    }

    elementLoad(fieldObject: FieldObject) {
        let elementClass = ElementTypesClassFinder[fieldObject.fieldData.elementType]
        let elementObject: ElementBaseClass = new elementClass(this.nodeObject, fieldObject.fieldData.fieldId) as ElementBaseClass
        this.elements.set(fieldObject.fieldData.fieldId, elementObject)
    }
}