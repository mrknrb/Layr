import {SyncObjectBase} from "../../../../SMP/PartsGeneral/SyncObjectBase.js";
import {LayrFind} from "../../../../../0Egyebek/LayrFind.js";
import {FieldObject} from "./FieldObject.js";

export class SyncObjectElement_Field extends SyncObjectBase {
    fieldObject: FieldObject

    constructor(fieldObject: FieldObject) {
        super()
        this.fieldObject = fieldObject
    }

    partSyncStart(syncData: SyncData) {
        this.fieldObject.fieldDataMongoUpdate()
        this.findPartAndLoad(syncData)

    }


    findPartAndLoad(syncData: SyncData) {

        let nodes = LayrFind.nodes_ByDocId(this.fieldObject.docObject.docData._id)
        nodes.forEach((node, index) => {

                let element = node.elementsManager.getElement(syncData.fieldId)

                element.smpManager.masterObjectParts.getPartObject_ByName(syncData.partName).loadData(syncData.loadData)

        })
    }
}


interface SyncData {
    partName: string,
    fieldId: string,
    loadData?: any
}