import {DocFieldekhezElementStyleDefault} from "./DocFieldekhezElementStyleDefault.js";
import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./ElementTypesClassFinder.js";
import {NodeObjectInterface} from "../NodeObject/NodeObjectInterface.js";
import {LayrFind} from "../../../../Global/LayrFind.js";

export class ElementsManager {
    elements: Map<string, any>
    nodeObject: NodeObjectInterface

    constructor(nodeObject: NodeObjectInterface) {
        this.nodeObject = nodeObject
        this.elements = new Map<string, any>()
    }

    elementsInit() {
        let self = this
        let docFieldObjects =LayrFind.doc(this.nodeObject.docId).fieldObjects


        docFieldObjects.forEach(function (docFieldObject) {
            let docFieldDefaultSettings = DocFieldekhezElementStyleDefault.find(docFieldDefaultSettings => docFieldDefaultSettings.docFieldName == docFieldObject.fieldData.fieldName);

            let element =ElementTypesClassFinder[docFieldObject.fieldData.elementType]
            let elementObject = new element(self.nodeObject, docFieldObject, docFieldDefaultSettings.ElementStyle)

            self.elements.set(docFieldObject.fieldData.fieldName, elementObject)

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
    elementToFullScreen(elementName:string){

       let element =this.elements.get(elementName)

        if(element){
           /* this.elements.forEach(function (element2) {
                element2.elementInsertInNode()
            })*/
            element.elementInsertFullScreen()

        }


    }

}