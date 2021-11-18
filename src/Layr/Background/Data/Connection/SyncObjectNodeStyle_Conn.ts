import {SyncObjectBase} from "../../../Frame/NodesEdgesManager/PartsGeneral/SyncObjectBase.js";
import {DocObject} from "../Doc/Doc/DocObject.js";
import {LayrFind} from "../../../Global/LayrFind.js";
import {ConnectionObject} from "./ConnectionObject.js";

export class SyncObjectNodeStyle_Conn extends SyncObjectBase {
    connectionObject: ConnectionObject

    constructor(connectionObject: ConnectionObject) {
        super()
        this.connectionObject = connectionObject
    }

    partSyncStart(syncData: SyncData) {
        this.connectionObject.conDataMongoUpdate()
        this.findPartAndLoad(syncData)

    }


    findPartAndLoad(syncData: SyncData) {

        let nodes = LayrFind.nodes_ByDocId_Global(this.connectionObject.connectionData.to)
        nodes.forEach((node, index) => {
            node.nodePartsManager.getPart(syncData.partClassName)?.loadData(syncData.loadData)
        })
    }
}


interface SyncData {
    partClassName: string,
    loadData?: any
}