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
        let nodes = LayrFind.nodes_ByDocId(this.docObject.docData._id)
        if (!nodes) return undefined

        nodes.forEach((node, index) => {
            if (node.nodeId !== syncData.nodeId) {
                node.smpManager.masterObjectParts.getPartObject_ByName(syncData.partName)?.loadData(syncData.loadData)
            }
        })
    }
}


interface SyncData {
    nodeId: string,
    partName: string,
    loadData: any
}