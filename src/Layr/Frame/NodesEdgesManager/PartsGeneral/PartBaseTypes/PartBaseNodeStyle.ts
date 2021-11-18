import {PartBase} from "../PartBase.js";
import {ElementBaseClass} from "../../Node/Element/ElementBaseClass.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {PartSyncMessageObject} from "../PartSyncMessageObject.js";
import {FieldData} from "../../../../Background/Data/Doc/Field/FieldData.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";

export abstract class PartBaseNodeStyle extends PartBase {
    protected constructor(elementObject: ElementBaseClass) {
        super(elementObject);
    }

    getDataObject() {
        return LayrFind.connection(this.elementObject.nodeObject.docId)

    }


    changeSync() {
        let partSyncMessageObject = new PartSyncMessageObject(this.getPartClassName(), null)
        this.getDataObject().nodeStyleObject.
    }


    protected abstract saveValue(fieldObject: FieldObject)

    protected abstract loadData(fieldObject: FieldObject)
}