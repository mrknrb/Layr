import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {MrkLibrary} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {ElementObject} from "../../../../ElementObject.js";

export class TextAreaContentPart extends PartBaseElement_Field {

    static partName = "Content"
    element: HTMLTextAreaElement

    constructor(masterObject: ElementObject) {
        super(masterObject);
        this.element = this.masterObject.element as HTMLTextAreaElement
    }

    activate() {

        this.loadData()
        this.masterObject.element.addEventListener("change", () => {

            this.saveValue()
        })
        this.masterObject.element.addEventListener("keyup", () => {

            this.saveValue()
        })
    }

    loadData() {

        if (MrkLibrary.emptyObjectCheck(this.getPartData().data)) return

        this.element.value = this.getPartData().data


    }


    saveValue() {
        this.saveValueDefault(this.element.value)
    }

    deactivate() {
        this.element.value = ""
    }
}
