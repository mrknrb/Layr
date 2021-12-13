import {ConnData} from "./ConnData.js";
import {NodeCDataObject} from "./NodeCData/NodeCDataObject.js";
import {EdgeCDataObject} from "./NodeCData/EdgeCDataObject.js";
import {SyncObjectNodeCData_Conn} from "./SyncObjectNodeCData_Conn.js";
import {ElementCDataObjectBase} from "../../../NodesEdgesManager/Node/Element/Adatok/ElementCDataObjectBase.js";
import {layrFrame} from "../../../LayrFrame.js";

export class ConnObject {
    connData: ConnData
    nodeCDataObject: NodeCDataObject
    edgeCDataObject: EdgeCDataObject
    elementsCDataObject: ElementCDataObjectBase[]
    syncObjectNodeCData_Conn: SyncObjectNodeCData_Conn

    constructor(connData: ConnData) {
        this.syncObjectNodeCData_Conn = new SyncObjectNodeCData_Conn(this)
        this.connData = connData
        this.nodeCDataObject = new NodeCDataObject(connData.data.nodeCDataParts)
        this.edgeCDataObject = new EdgeCDataObject(connData.data.edgeCDataParts)
        connData.data.elementsCDataParts.forEach(elementsStylePartsData => {

            this.elementsCDataObject.push(new ElementCDataObjectBase(elementsStylePartsData))
        })
    }

    connDataMongoUpdate() {
        layrFrame.docsConnsManager.updateConn(this.connData._id, (connDataOriginal, ModifiedConnFunction) => {
            ModifiedConnFunction(this.connData)
        })
    }
}