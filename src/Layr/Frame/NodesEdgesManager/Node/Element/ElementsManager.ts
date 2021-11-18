import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./Adatok/ElementTypesClassFinder.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";
import {NodeNewElementPart} from "../NodeObject/NodeParts/NodeNewElementPart.js";
import {ElementTypes} from "./Adatok/ElementTypes.js";

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
        let doc=LayrFind.doc(this.nodeObject.docId)
        let fieldObject = doc.newField(fieldName, elementType)
        this.elementLoad(fieldObject)
    }

    tesztfun(){
      let a=new  NodeNewElementPart(this.nodeObject)
       a.saveValue({fieldName:"lofasz",elementType:ElementTypes.Group})


    }

}