import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeObjectBase} from "../../../NodeObject/NodeObjectBase.js";
import {MrkLibrary, ResizeType} from "../../../../../../0Egyebek/MrkLibrary.js";
import {SMPManager} from "../../../../../SMP/SMPLayr/SMPManager.js";
import {GroupElementStaticData} from "./GroupElementSMPManager/GroupElementStaticData.js";
import {GroupElementPartsClassArray} from "./GroupElementSMPManager/GroupElementPartsClassArray.js";
import {SMPSavePart_ElementType} from "../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";


export class GroupElement extends ElementBaseClass {
    element: HTMLDivElement

    constructor(nodeObject: NodeObjectBase, fieldId) {
        super(ElementTypes.Group, nodeObject, fieldId, document.createElement("div"));


        this.elementInit()
        this.smpManagerInit()
    }

    protected elementInit() {

        this.element.classList.add("LayrElement")
        this.element.style.border = `black`
        this.element.style.width = "calc(100%)"
        this.element.style.height = "50px"
        this.element.style.backgroundColor = "#90a4ae"
        this.element.style.overflow = "auto"
        this.element.style.position = "relative"
        MrkLibrary.resizeElement(this.element, 4, ResizeType.vertical)
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        MrkLibrary.grabInit(this.element)
        this.nodeObject.mainElement.element.appendChild(this.element)


    }

    private smpManagerInit() {
        this.smpManager = new SMPManager({
            smpSavePart: SMPSavePart_ElementType,
            masterObject: this,
            PartsClassArray: GroupElementPartsClassArray,
            SMPStaticData: GroupElementStaticData
        })
    }

    elementsRefresh() {

    }

    deleteElement() {

    }
}


