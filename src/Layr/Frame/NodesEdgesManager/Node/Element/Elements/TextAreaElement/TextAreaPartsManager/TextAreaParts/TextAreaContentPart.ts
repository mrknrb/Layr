import {TextAreaElement} from "../../TextAreaElement.js";
import {PartBaseField} from "../../../../../../PartsGeneral/PartBaseTypes/PartBaseField.js";
import {FieldData} from "../../../../../../../../Background/Data/Doc/Field/FieldData.js";
import {FieldObject} from "../../../../../../../../Background/Data/Doc/Field/FieldObject.js";

export class TextAreaContentPart extends PartBaseField {


    elementObject: TextAreaElement

    constructor(elementObject: TextAreaElement) {
        super(elementObject);
    }

    saveValueTriggerInit() {

        this.elementObject.element.addEventListener("keydown", () => {
            this.saveMain()
        })
    }

    loadData(fieldObject:FieldObject) {
        this.elementObject.element.value = fieldObject.fieldData.data.content
    }


    saveValue(fieldObject: FieldObject) {
        if (!fieldObject.fieldData.data.content) {
            fieldObject.fieldData.data.content = ""
        }
        fieldObject.fieldData.data.content = this.elementObject.element.value
    }


}