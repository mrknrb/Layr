import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";

export class TextAreaTestPartRed extends PartBaseElement_Field {

    static partName = "TextAreaTestPartRed"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {

        this.masterObject.element.style.color = "red"


    }

    loadData() {

    }


    saveValue() {

    }

    deactivate() {
        this.masterObject.element.style.color = "black"
    }


}
