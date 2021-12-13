import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {TextAreaElement} from "../../TextAreaElement.js";

export class TextAreaTestPart extends PartBaseElement_Field {


protected masterObject: TextAreaElement
static partName = "TextAreaTestPart"

    constructor(masterObject: TextAreaElement) {
        super(masterObject);
    }

    activate() {

      //  this.loadData()
        this.masterObject.element.style.backgroundColor="red"

        this.masterObject.element.addEventListener("keyup", () => {

            this.saveValue()
        })
    }

    loadData() {
      //  this.masterObject.element.value = this.getPartData()
    }


    saveValue() {
      //  this.saveValueDefault(this.masterObject.element.value)
      //  this.valueSync()
    }

    deactivate() {
    }


}
