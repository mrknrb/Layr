import {ConnectionData} from "./ConnectionData.js";
import {NodeStyleObject} from "./NodeStyleData/NodeStyleObject.js";
import {EdgeStyleObject} from "./NodeStyleData/EdgeStyleObject.js";
import {NodeGroupData} from "./NodeGroupData.js";
import {layrBackgroundB} from "../../LayrBackground.js";
import {SyncObjectNodeStyle_Conn} from "./SyncObjectNodeStyle_Conn.js";

export class ConnectionObject {
    connectionData: ConnectionData
    nodeStyleObject: NodeStyleObject
    edgeStyleObject: EdgeStyleObject
    syncObjectNodeStyle_Conn:SyncObjectNodeStyle_Conn
    constructor(connectionData: ConnectionData) {
        this.syncObjectNodeStyle_Conn=new SyncObjectNodeStyle_Conn(this)
        this.connectionData = connectionData
        !connectionData.nodeGroupData ? this.connectionData.nodeGroupData = new NodeGroupData() : null

        this.nodeStyleObject = new NodeStyleObject(connectionData.nodeGroupData.nodeStyle)
        this.edgeStyleObject = new EdgeStyleObject(connectionData.nodeGroupData.edgeStyle)
    }
    conDataMongoUpdate() {
        layrBackgroundB.docsConnectionsManager.updateConnection(this.connectionData._id, (conDataOriginal, ModifiedConFunction) => {
            ModifiedConFunction(this.connectionData)
        })
    }

}