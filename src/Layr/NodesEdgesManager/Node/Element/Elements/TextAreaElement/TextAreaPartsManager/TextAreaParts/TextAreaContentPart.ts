import {TextAreaElement} from "../../TextAreaElement.js";
import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";

export class TextAreaContentPart extends PartBaseElement_Field {


    protected masterObject: TextAreaElement
    static partName = "TextAreaContentPart"

    constructor(masterObject: TextAreaElement) {
        super(masterObject);
    }

    activate() {

        this.loadData()
        this.masterObject.element.addEventListener("keyup", () => {

            this.saveValue()
        })
    }

    loadData() {
        this.masterObject.element.value = this.getPartData().data
    }


    saveValue() {
        this.saveValueDefault(this.masterObject.element.value)
        this.valueSync()
    }

    deactivate() {
    }
}
