import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {HTMLElementResizer} from "../../ElementResizer/HTMLElementResizer.js";
import {NodeObjectBase} from "../../../NodeObject/NodeObjectBase.js";
import {SMPManager} from "../../../../../SMP/SMPLayr/SMPManager.js";
import {TextAreaElementPartsClassArray} from "./TextAreaPartsManager/TextAreaElementPartsClassArray.js";
import {TextAreaStaticData} from "./TextAreaPartsManager/TextAreaStaticData.js";
import {SMPSavePart_ElementType} from "../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";


export class TextAreaElement extends ElementBaseClass {

    element: HTMLTextAreaElement

    constructor(nodeObject: NodeObjectBase, fieldId: string) {
        super(ElementTypes.TextArea, nodeObject, fieldId, document.createElement("textarea"));

        //  let elementStyle = this.getElementCData() as TextAreaElementCData
        // this.elementResizer = new ElementResizer(this)
        // this.elementResizer.resizeActivate(elementStyle.resizeType)


        this.smpManagerInit()

        this.elementInit()
        //this.elementChange_fieldDataUpdate_Init()
        //  this.fieldDataChange_ElementUpdate_Init()
    }

    private smpManagerInit() {

        this.smpManager = new SMPManager({
            smpSavePart: SMPSavePart_ElementType,
            masterObject: this,
            PartsClassArray: TextAreaElementPartsClassArray,
            SMPStaticData: TextAreaStaticData
        })
    }

    elementsRefresh() {

        // this.element.value = this.getFieldObject().fieldData.data?.content


    }

    deleteElement() {
    }

    protected elementInit() {
        let self = this
        this.element.classList.add("LayrElement")
        this.element.style.resize = "none"
        this.element.style.width = "calc(100% - 3px)"
        this.element.style.height = "50px"

        /*
                this.element.addEventListener("keyup", function (e) {
                    self.elementResizer.adjustSize()
                })*/

        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        this.nodeObject.mainElement.element.appendChild(this.element)
        this.elementsRefresh()
    }


}