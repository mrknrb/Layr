import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {ResizeTypes} from "../../ElementResizer/ResizeTypes.js";
import {TextAreaElementStyle} from "./TextAreaElementStyle.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";
import {FieldObject} from "../../../../../../Background/Data/Doc/Field/FieldObject.js";
import {TextAreaElementData} from "./TextAreaElementData.js";


export class TextAreaElement extends ElementBaseClass {

    element: HTMLTextAreaElement
    elementResizer: ElementResizer
    elementStyle: TextAreaElementStyle
    fieldObject: FieldObject
    textAreaElementData:TextAreaElementData

    constructor(nodeDiv: NodeObjectInterface, docFieldObject, elementSettings) {
        super(ElementTypes.TextArea, nodeDiv, docFieldObject, elementSettings);


        this.textAreaElementData=this.fieldObject.fieldData.data
        this.elementInit()
        this.elementResizer = new ElementResizer(this)
        this.elementResizer.resizeActivate(ResizeTypes.autoY)
        this.dataChangeSaveInit()
       this. dataChangeUpdateInit()
    }

    protected elementInit() {
        let self = this
        this.element = document.createElement("textarea")
        this.element.classList.add("LayrElement")
        this.element.style.resize = "none"
        this.element.style.width = "calc(100% - 3px)"
        this.element.style.height = "50px"


        this.element.addEventListener("keyup", function (e) {
            self.elementResizer.adjustSize()
        })
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        this.nodeObject.mainElement.element.appendChild(this.element)
        this.refreshData()
    }

    dataChangeSaveInit() {
        let self = this
        this.element.addEventListener("keyup", function (e) {
            self.textAreaElementData.content=self.element.value
            self.fieldObject.fieldEvents.onFieldChange.emit()

            //B
            self.fieldObject.fieldDataUpdateMongo()
        })
    }
    dataChangeUpdateInit() {
        this.fieldObject.fieldEvents.onFieldChange.on(()=> this.element.value = this.textAreaElementData.content)
    }

    refreshData() {

        this.element.value = this.textAreaElementData.content
    }

    deleteElement() {
    }
}