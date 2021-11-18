import {PartSyncMessageObject} from "../PartSyncMessageObject.js";
import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {FieldData} from "../../../../Background/Data/Doc/Field/FieldData.js";
import {TextAreaElement} from "../../Node/Element/Elements/TextAreaElement/TextAreaElement.js";
import {ElementBaseClass} from "../../Node/Element/ElementBaseClass.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";

export abstract class PartBaseField extends PartBase {

    protected constructor(elementObject: ElementBaseClass) {
        super(elementObject);
    }

    getDataObject() {
        return LayrFind.fieldObject_ByFieldId_DocId(this.elementObject.fieldId, this.elementObject.nodeObject.docId)

    }


    changeSync() {
        let partSyncMessageObject = new PartSyncMessageObject(this.getPartClassName(), this.elementObject.fieldId)
        this. getDataObject().elementPartChangeSync(partSyncMessageObject)
    }


    protected abstract saveValue(fieldObject: FieldObject)

    protected abstract loadData(fieldObject: FieldObject)
}