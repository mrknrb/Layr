import {SyncObjectBase} from "../../../../Frame/NodesEdgesManager/PartsGeneral/SyncObjectBase.js";
import {DocObject} from "../Doc/DocObject.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {ElementBaseClass} from "../../../../Frame/NodesEdgesManager/Node/Element/ElementBaseClass.js";
import {FieldObject} from "./FieldObject.js";

export class SyncObjectElement_Field extends SyncObjectBase {
    fieldObject: FieldObject

    constructor(fieldObject: FieldObject) {
        super()
        this.fieldObject = fieldObject
    }

    partSyncStart(syncData: SyncData) {
        this.fieldObject.docDataMongoUpdate()
        this.findPartAndLoad(syncData)

    }


    findPartAndLoad(syncData: SyncData) {
        let nodes = LayrFind.nodes_ByDocId_Global(this.fieldObject.docData._id)
        nodes.forEach((node, index) => {
            node.nodePartsManager.getPart(syncData.partClassName).loadData(syncData.loadData)
        })
    }
}


interface SyncData {
    partClassName: string,
    fieldId:string,
    loadData?: any
}