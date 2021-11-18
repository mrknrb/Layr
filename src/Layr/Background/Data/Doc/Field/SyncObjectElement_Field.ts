import {SyncObjectBase} from "../../../../Frame/NodesEdgesManager/PartsGeneral/SyncObjectBase.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
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
        let nodes = LayrFind.nodes_ByDocId_Global(this.fieldObject.docObject.docData._id)
        nodes.forEach((node, index) => {
            let element = node.elementsManager.getElement(syncData.fieldId)

            element.partsManager.getPart(syncData.partClassName).loadData(syncData.loadData)
        })
    }
}


interface SyncData {
    partClassName: string,
    fieldId: string,
    loadData?: any
}