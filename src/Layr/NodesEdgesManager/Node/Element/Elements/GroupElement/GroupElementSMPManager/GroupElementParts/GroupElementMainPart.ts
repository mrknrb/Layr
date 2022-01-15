import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {MrkLibrary} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {ElementObject} from "../../../../ElementObject.js";

export class GroupElementMainPart extends PartBaseElement_Field {

    static partName = "Main"
    groupHeadElement: HTMLDivElement = document.createElement("div")
    groupBodyElement: HTMLDivElement = document.createElement("div")

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
        this.groupHeadElementInit()
        this.groupBodyElementInit()

    }

    protected elementInit() {

        this.masterObject.element.classList.add("LayrElement")
        this.masterObject.element.style.border = `black`
        this.masterObject.element.style.backgroundColor = "#90a4ae"

        this.masterObject.element.style.display="flex"
        this.masterObject.element.style.paddingBottom="4px"
        this.masterObject.element.style.flexDirection = "column";
        this.masterObject.element.style.position = "relative"
        this.masterObject.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })

    }
    groupHeadElementInit() {
        this.groupHeadElement.style.width="100%"
        this.groupHeadElement.style.height="30px"
        this.groupHeadElement.style.backgroundColor="grey"
        this.groupHeadElement.style.position="relative"
        this.masterObject.element.appendChild(this.groupHeadElement)
    }
    groupBodyElementInit() {
        this.groupBodyElement.style.overflow = "auto"
        this.groupBodyElement.style.position="relative"
        this.groupBodyElement.style.flex="1 1"
        MrkLibrary.grabInit(this.groupBodyElement as HTMLDivElement)
        this.masterObject.element.appendChild(this.groupBodyElement)
    }


    loadData() {


    }


    saveValue() {

    }

    deactivate() {

    }
}
