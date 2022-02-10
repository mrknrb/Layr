import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {NodeObjectNormal} from "../../../NodesEdgesManager/Node/NodeObject/NodeObjectNormal.js";
import {ConnObject} from "../../../DocsConnsManager/Data/Conn/ConnObject.js";
import {ConnData} from "../../../DocsConnsManager/Data/Conn/ConnData.js";

export abstract class PartBaseNodeCData_Conn extends PartBase {


    protected masterObject: NodeObjectNormal

    protected constructor(masterObject: NodeObjectNormal) {
        super();
        this.masterObject = masterObject
    }

    getMasterDataObject() {
        return LayrFind.conn(this.masterObject.connId)
    }

    protected getPartData() {
        let connObject = this.getMasterDataObject()
        if (!connObject) return
        if (!connObject.connData.data) connObject.connData.data = {
            nodeCDataParts: {},
            edgeCDataParts: {},
            elementsCDataParts: []
        }
        if (!connObject.connData.data.nodeCDataParts) connObject.connData.data.nodeCDataParts = {}
        if (!connObject.connData.data.nodeCDataParts[this.getPartName()]) connObject.connData.data.nodeCDataParts[this.getPartName()] = {}
        if (!connObject.connData.data.nodeCDataParts[this.getPartName()].data) connObject.connData.data.nodeCDataParts[this.getPartName()].data = {}
        return connObject.connData.data.nodeCDataParts[this.getPartName()]
    }

    protected valueSync(loadData?: any) {
        this.getMasterDataObject()?.syncObjectNodeCData_Conn.partSyncStart({

            partName: this.getPartName(),
            loadData: loadData
        })
    }


    abstract saveValue(data?: any)

    abstract loadData(data?: any)

}