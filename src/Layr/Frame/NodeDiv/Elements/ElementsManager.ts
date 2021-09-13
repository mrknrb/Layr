import {DocFieldekhezElementSettingsDefault} from "./DocFieldekhezElementSettingsDefault.js";
import {ElementBaseClass} from "./ElementBaseClass.js";
import {ElementTypesClassFinder} from "./ElementTypesClassFinder.js";
import {NodeDivInterface} from "../NodeDivObject/NodeDivInterface.js";

export class ElementsManager {
    elements: Map<string, ElementBaseClass>
    nodeDiv: NodeDivInterface

    constructor(nodeDiv: NodeDivInterface) {
        this.nodeDiv = nodeDiv
        this.elements = new Map<string, any>()
    }

    elementsInit() {
        let self = this
        let docFieldsData = this.nodeDiv.hivatkozottDocDataObject.docData.docFields
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
    oneElementInsertFullScreen(elementName:string){

       let element =this.elements.get(elementName)

        if(element){
           /* this.elements.forEach(function (element2) {
                element2.elementInsertInNodeDiv()
            })*/
            console.log(element)
            element.elementInsertFullScreen()

        }


    }

}