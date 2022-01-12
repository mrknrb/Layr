import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {MrkLibrary} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {ElementObject} from "../../../../ElementObject.js";

export class TextAreaContentPart extends PartBaseElement_Field {

    static partName = "TextAreaContentPart"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {

        this.loadData()
        this.masterObject.element.addEventListener("keyup", () => {

            this.saveValue()
        })
    }

    loadData() {

        if (MrkLibrary.emptyObjectCheck(this.getPartData().data)) return

        this.masterObject.element.value = this.getPartData().data


    }


    saveValue() {
        this.saveValueDefault(this.masterObject.element.value)
        this.valueSync()
    }

    deactivate() {
        this.masterObject.element.value = ""
    }
}
