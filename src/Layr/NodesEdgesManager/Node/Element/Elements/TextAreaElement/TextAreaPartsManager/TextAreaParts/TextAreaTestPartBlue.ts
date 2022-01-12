import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";

export class TextAreaTestPartBlue extends PartBaseElement_Field {


    static partName = "TextAreaTestPartBlue"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {

        this.masterObject.element.style.color = "blue"
        //  this.loadData()
        // this.masterObject.element.style.backgroundColor="blue"


    }

    loadData() {
        //  this.masterObject.element.value = this.getPartData()
    }


    saveValue() {
        //  this.saveValueDefault(this.masterObject.element.value)
        //  this.valueSync()
    }

    deactivate() {
        this.masterObject.element.style.color = "black"
    }
}
