import {TextAreaElement} from "../../TextAreaElement.js";
import {PartBaseElement_Field} from "../../../../../../PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {FieldData} from "../../../../../../../../Background/Data/Doc/Field/FieldData.js";
import {FieldObject} from "../../../../../../../../Background/Data/Doc/Field/FieldObject.js";
import {ElementTypes} from "../../../../Adatok/ElementTypes.js";

export class TextAreaContentPart extends PartBaseElement_Field {


    protected  masterObject: TextAreaElement

    constructor(elementObject: TextAreaElement) {
        super(elementObject);
    }

    protected  partInit() {
        this.loadData()
        this.masterObject.element.addEventListener("keyup", () => {

            this.saveValue()

        })
    }

    loadData() {
        this.masterObject.element.value = this.getDataObject().fieldData.data.content
    }


    saveValue() {
        if (!this.getDataObject().fieldData.data.content) {
            this.getDataObject().fieldData.data.content = ""
        }
        this.getDataObject().fieldData.data.content = this.masterObject.element.value
        this.valueSync()
    }

    partRemove() {
    }




}