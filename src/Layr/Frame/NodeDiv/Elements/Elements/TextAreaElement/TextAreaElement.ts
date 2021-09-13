import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {ResizeTypes} from "../../ElementResizer/ResizeTypes.js";
import {TextAreaElementSettings} from "./TextAreaElementSettings.js";
import {NodeDivInterface} from "../../../NodeDivObject/NodeDivInterface.js";
import {DocFieldObject} from "../../../../../Background/Data/DocData/DocFieldObject.js";
import {TextAreaElementData} from "./TextAreaElementData.js";


export class TextAreaElement extends ElementBaseClass {

    element: HTMLTextAreaElement
    elementResizer: ElementResizer
    elementSettings: TextAreaElementSettings
    docFieldObject: DocFieldObject
    textAreaElementData:TextAreaElementData

    constructor(nodeDiv: NodeDivInterface, docFieldObject, elementSettings) {
        super(ElementTypes.TextArea, nodeDiv, docFieldObject, elementSettings);


        this.textAreaElementData=this.docFieldObject.docFieldData.data
        this.elementInit()
        this.elementResizer = new ElementResizer(this)
        this.elementResizer.resizeActivate(ResizeTypes.autoY)
        this.dataChangeSaveInit()
    }

    protected elementInit() {
        let self = this
        this.element = document.createElement("textarea")
        this.element.style.resize = "none"
        this.element.style.backgroundColor = "transparent"
        this.element.style.width = "calc(100% - 5px)"
        this.element.style.height = "50px"


        this.element.addEventListener("keyup", function (e) {
            self.elementResizer.adjustSize()

        })
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        this.nodeDiv.mainElement.element.appendChild(this.element)
        this.refreshData()
    }

    dataChangeSaveInit() {
        let self = this
        this.element.addEventListener("keyup", function (e) {
            self.docFieldObject.docFieldEvents.onFieldChange.emit()
        })


    }

    refreshData() {
        this.element.innerText = this.textAreaElementData.content
    }

    deleteElement() {
    }
}