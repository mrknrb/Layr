import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {FieldObject} from "../../../DocsConnsManager/Data/Doc/Field/FieldObject.js";
import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";
import {ElementTypesConfigDataFinder} from "./ElementTypesConfigDataFinder.js";
import {ElementObject} from "./ElementObject.js";

export class ElementsManager {
    elements: Map<string, ElementObject>
    nodeObject: NodeObjectBase
    elementCreatedEvent: TypedEvent<ElementObject>

    constructor(nodeObject: NodeObjectBase) {
        this.elementCreatedEvent = new TypedEvent<ElementObject>()
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
        this.elements.forEach(function (element: ElementObject) {
            element.deleteElement()

        })
        this.elements = new Map<string, any>()
    }

    elementToFullScreen(fieldId: string) {
        this.elements.forEach(element => {
            if (element.element.parentElement == document.querySelector("#workScreenDiv")) {
                element.elementInsertFullScreenOrNode(false)
            }
        })
        this.elements.get(fieldId)?.elementInsertFullScreenOrNode(true)



    }

    elementLoad(fieldObject: FieldObject) {

        // @ts-ignore
        let elementConfigData = ElementTypesConfigDataFinder[fieldObject.fieldData.elementType]
        let elementObject = new ElementObject(elementConfigData, fieldObject.fieldData.fieldId, this.nodeObject)
        this.elements.set(fieldObject.fieldData.fieldId, elementObject)
    }
}