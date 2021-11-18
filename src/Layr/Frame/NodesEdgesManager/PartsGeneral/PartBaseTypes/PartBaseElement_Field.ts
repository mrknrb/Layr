import {SyncDataObject} from "../SyncDataObject.js";
import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {FieldData} from "../../../../Background/Data/Doc/Field/FieldData.js";
import {TextAreaElement} from "../../Node/Element/Elements/TextAreaElement/TextAreaElement.js";
import {ElementBaseClass} from "../../Node/Element/ElementBaseClass.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";

export abstract class PartBaseElement_Field extends PartBase {
    protected  masterObject:ElementBaseClass
    protected constructor(masterObject: ElementBaseClass) {
        super();
        this.masterObject=masterObject
    }

    protected  getDataObject() {
        return LayrFind.fieldObject_ByFieldId_DocId(this.masterObject.fieldId, this.masterObject.nodeObject.docId)

    }


   protected valueSync(loadData?:any) {
      //  let partSyncMessageObject = new SyncDataObject(, this.masterObject.fieldId)
        this. getDataObject().syncObjectElement_Field.partSyncStart({fieldId:this.masterObject.fieldId,partClassName:this.getPartClassName(),loadData:loadData})

    }


     abstract saveValue(fieldObject: FieldObject)

     abstract loadData(fieldObject: FieldObject)
}