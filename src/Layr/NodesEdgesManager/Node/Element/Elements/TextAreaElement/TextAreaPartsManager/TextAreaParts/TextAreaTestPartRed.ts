import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {TextAreaElement} from "../../TextAreaElement.js";

export class TextAreaTestPartRed extends PartBaseElement_Field {


protected masterObject: TextAreaElement
static partName = "TextAreaTestPartRed"

    constructor(masterObject: TextAreaElement) {
        super(masterObject);
    }

    activate() {

      //  this.loadData()
        this.masterObject.element.style.backgroundColor="red"


    }

    loadData() {
      //  this.masterObject.element.value = this.getPartData()
    }


    saveValue() {
      //  this.saveValueDefault(this.masterObject.element.value)
      //  this.valueSync()
    }

    deactivate() {
        this.masterObject.element.style.backgroundColor="transparent"
    }


}
