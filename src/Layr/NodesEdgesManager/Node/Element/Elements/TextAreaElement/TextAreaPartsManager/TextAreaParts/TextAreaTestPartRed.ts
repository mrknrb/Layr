import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {TextAreaElement} from "../../TextAreaElement.js";

export class TextAreaTestPartRed extends PartBaseElement_Field {


protected masterObject: TextAreaElement
static partName = "TextAreaTestPartRed"

    constructor(masterObject: TextAreaElement) {
        super(masterObject);
    }

    activate() {

       this.masterObject.element.style.color="red"


    }

    loadData() {

    }


    saveValue() {

    }

    deactivate() {
        this.masterObject.element.style.color="black"
    }


}
