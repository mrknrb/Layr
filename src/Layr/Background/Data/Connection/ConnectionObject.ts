import {ConnectionData} from "./ConnectionData.js";
import {NodeStyleObject} from "./NodeStyleData/NodeStyleObject.js";
import {EdgeStyleObject} from "./NodeStyleData/EdgeStyleObject.js";
import {NodeGroupData} from "./NodeGroupData.js";

export class ConnectionObject {
    connectionData: ConnectionData
    nodeStyleObject: NodeStyleObject
    edgeStyleObject: EdgeStyleObject

    constructor(connectionData: ConnectionData) {
        this.connectionData = connectionData
        !connectionData.nodeGroupData ? this.connectionData.nodeGroupData = new NodeGroupData() : null

        this.nodeStyleObject = new NodeStyleObject(connectionData.nodeGroupData.nodeStyle)
        this.edgeStyleObject = new EdgeStyleObject(connectionData.nodeGroupData.edgeStyle)
    }


}