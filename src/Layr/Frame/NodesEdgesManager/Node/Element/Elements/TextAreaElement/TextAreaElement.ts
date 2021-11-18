import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {TextAreaElementStyle} from "./TextAreaElementStyle.js";
import {NodeObjectBase} from "../../../NodeObject/NodeObjectBase.js";
import {PartsManagerBase} from "../../../../PartsGeneral/PartsManagerBase.js";
import {TextAreaPartsManager} from "./TextAreaPartsManager/TextAreaPartsManager.js";


export class TextAreaElement extends ElementBaseClass {

    element: HTMLTextAreaElement
    elementResizer: ElementResizer
    partsManager: PartsManagerBase

    constructor(nodeObject: NodeObjectBase, fieldId: string) {
        super(ElementTypes.TextArea, nodeObject, fieldId, document.createElement("textarea"));
        this.partsManager = new TextAreaPartsManager(this) as PartsManagerBase
        let elementStyle = this.getElementStyle() as TextAreaElementStyle
        this.elementResizer = new ElementResizer(this)
        this.elementResizer.resizeActivate(elementStyle.resizeType)
        this.elementInit()
        this.elementChange_fieldDataUpdate_Init()
        this.fieldDataChange_ElementUpdate_Init()
    }

    elementChange_fieldDataUpdate_Init() {
        let self = this
        this.element.addEventListener("keyup", function (e) {
            self.getFieldObject().fieldData.data.content = self.element.value
           // self.getFieldObject().fieldEvents.onFieldChange.emit()
        })
    }

    fieldDataChange_ElementUpdate_Init() {
        this.getFieldObject().fieldEvents.onFieldChange.on(() => this.element.value = this.getFieldObject().fieldData.data.content)
    }

    elementsRefresh() {

        this.element.value = this.getFieldObject().fieldData.data?.content


    }

    deleteElement() {
    }

    protected elementInit() {
        let self = this
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
        this.elementsRefresh()
    }


}