import {PartBase} from "../PartBase.js";
import {ElementBaseClass} from "../../Node/Element/ElementBaseClass.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {SyncDataObject} from "../SyncDataObject.js";
import {FieldData} from "../../../../Background/Data/Doc/Field/FieldData.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";

export abstract class PartBaseNodeStyle_Conn extends PartBase {
    protected constructor(elementObject: ElementBaseClass) {
        super(elementObject);
    }

    getDataObject() {
        return LayrFind.connection(this.masterObject.nodeObject.docId)

    }


    valueSync() {
        let partSyncMessageObject = new SyncDataObject(this.getPartClassName(), null)
        this.getDataObject().nodeStyleObject.
    }


    protected abstract saveValue(fieldObject: FieldObject)

    protected abstract loadData(fieldObject: FieldObject)
}