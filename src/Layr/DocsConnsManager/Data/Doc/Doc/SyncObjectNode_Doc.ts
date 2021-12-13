import {SyncObjectBase} from "../../../../SMP/PartsGeneral/SyncObjectBase.js";
import {DocObject} from "./DocObject.js";
import {LayrFind} from "../../../../../0Egyebek/LayrFind.js";

export class SyncObjectNode_Doc extends SyncObjectBase {
    docObject: DocObject

    constructor(docObject: DocObject) {
        super()
        this.docObject = docObject
    }

    partSyncStart(syncData: SyncData) {
        this.docObject.docDataMongoUpdate()
        this.findPartAndLoad(syncData)
    }


    findPartAndLoad(syncData: SyncData) {
        let nodes = LayrFind.nodes_ByDocId_Global(this.docObject.docData._id)
        nodes.forEach((node, index) => {
            node.smpManager.masterObjectParts.getObject(syncData.partClassName).loadData(syncData.loadData)
        })
    }
}


interface SyncData {
    partClassName: string,
    loadData: any
}