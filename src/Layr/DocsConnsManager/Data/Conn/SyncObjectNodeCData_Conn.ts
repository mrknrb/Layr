import {SyncObjectBase} from "../../../SMP/PartsGeneral/SyncObjectBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {ConnObject} from "./ConnObject.js";
import {PartBase} from "../../../SMP/PartsGeneral/PartBase.js";

export class SyncObjectNodeCData_Conn extends SyncObjectBase {
    connObject: ConnObject

    constructor(connObject: ConnObject) {
        super()
        this.connObject = connObject
    }

    partSyncStart(syncData: SyncData) {
        this.connObject.connDataMongoUpdate()
        this.findPartAndLoad(syncData)

    }


    findPartAndLoad(syncData: SyncData) {

        let nodes = LayrFind.nodes_ByDocId(this.connObject.connData.to)

        nodes.forEach((node, index) => {

                let a: PartBase = node.smpManager.masterObjectParts.getPartObject_ByName(syncData.partName)
                if (!a) {
                    console.error("LayrError: nincs meg a szinkronizalando Part");
                    return
                }
                a.loadData(syncData.loadData)



        })
    }
}


interface SyncData {
    partName: string,
    loadData?: any
}