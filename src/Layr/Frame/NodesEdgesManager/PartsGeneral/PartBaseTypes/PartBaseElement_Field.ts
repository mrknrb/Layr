import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {ElementBaseClass} from "../../Node/Element/ElementBaseClass.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";

export abstract class PartBaseElement_Field extends PartBase {
    protected masterObject: ElementBaseClass

    protected constructor(masterObject: ElementBaseClass) {
        super();
        this.masterObject = masterObject
    }

    protected getDataObject() {
        return LayrFind.fieldObject_ByFieldId_DocId(this.masterObject.fieldId, this.masterObject.nodeObject.docId)

    }


    protected valueSync(loadData?: any) {
        this.getDataObject().syncObjectElement_Field.partSyncStart({
            fieldId: this.masterObject.fieldId,
            partClassName: this.getPartClassName(),
            loadData: loadData
        })

    }


    abstract saveValue(fieldObject: FieldObject)

    abstract loadData(fieldObject: FieldObject)
}