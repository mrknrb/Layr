import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {MrkLibrary, ResizeType} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {ElementObject} from "../../../../ElementObject.js";

export class GroupElementMainPart extends PartBaseElement_Field {

    static partName = "Main"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
    }

    protected elementInit() {

        this.masterObject.element.classList.add("LayrElement")
        this.masterObject.element.style.border = `black`
        this.masterObject.element.style.backgroundColor = "#90a4ae"
        this.masterObject.element.style.overflow = "auto"
        this.masterObject.element.style.position = "relative"
        MrkLibrary.resizeElement(this.masterObject.element, 4, ResizeType.vertical, 25)
        this.masterObject.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        MrkLibrary.grabInit(this.masterObject.element as HTMLDivElement)
        // this.masterObject.nodeObject.mainElement.element.appendChild(this.masterObject.element)


    }

    loadData() {


    }


    saveValue() {

    }

    deactivate() {

    }
}
