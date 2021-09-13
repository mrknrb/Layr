import {DocFieldekhezElementSettingsDefault} from "./DocFieldekhezElementSettingsDefault.js";
import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./ElementTypesClassFinder.js";
import {NodeDivInterface} from "../NodeDivObject/NodeDivInterface.js";

export class ElementsManager {
    elements: Map<string, any>
    nodeDiv: NodeDivInterface

    constructor(nodeDiv: NodeDivInterface) {
        this.nodeDiv = nodeDiv
        this.elements = new Map<string, any>()
    }

    elementsInit() {
        let self = this
        let docFieldObjects = this.nodeDiv.hivatkozottDocDataObject.docFieldObjects
        docFieldObjects.forEach(function (docFieldObject) {
            let docFieldDefaultSettings = DocFieldekhezElementSettingsDefault.find(docFieldDefaultSettings => docFieldDefaultSettings.docFieldName == docFieldObject.docFieldData.name);

            let element =ElementTypesClassFinder[docFieldObject.docFieldData.elementType]
            let elementObject = new element(self.nodeDiv, docFieldObject, docFieldDefaultSettings.ElementSettings)
            self.elements.set(docFieldObject.docFieldData.name, elementObject)

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
    oneElementInsertFullScreen(elementName:string){

       let element =this.elements.get(elementName)

        if(element){
           /* this.elements.forEach(function (element2) {
                element2.elementInsertInNodeDiv()
            })*/
            element.elementInsertFullScreen()

        }


    }

}