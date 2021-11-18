import {PartBase} from "../PartBase.js";
import {ElementBaseClass} from "../../Node/Element/ElementBaseClass.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";
import {NodeObjectBase} from "../../Node/NodeObject/NodeObjectBase.js";
import {DocObject} from "../../../../Background/Data/Doc/Doc/DocObject.js";

export abstract class PartBaseNode_Doc extends PartBase{
  protected  masterObject: NodeObjectBase
    protected constructor(masterObject: NodeObjectBase) {
        super();
        this.masterObject=masterObject
    }

    protected  getDataObject() {
        return LayrFind.doc(this.masterObject.docId)
    }


    protected  valueSync(loadData?:any) {

        this. getDataObject().syncObjectNode_Doc.partSyncStart({partClassName:this.getPartClassName(),loadData:loadData})


    }


     abstract saveValue(data?:any)

     abstract loadData(data?:any)
}