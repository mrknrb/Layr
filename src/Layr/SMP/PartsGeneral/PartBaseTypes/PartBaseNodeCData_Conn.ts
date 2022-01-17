import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {NodeObjectNormal} from "../../../NodesEdgesManager/Node/NodeObject/NodeObjectNormal.js";

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
        if (!this.getMasterDataObject().connData.data) this.getMasterDataObject().connData.data = {
            nodeCDataParts: {},
            edgeCDataParts: {},
            elementsCDataParts: []
        }
        if (!this.getMasterDataObject().connData.data.nodeCDataParts) this.getMasterDataObject().connData.data.nodeCDataParts = {}
        if (!this.getMasterDataObject().connData.data.nodeCDataParts[this.getPartName()]) this.getMasterDataObject().connData.data.nodeCDataParts[this.getPartName()] = {}
        if (!this.getMasterDataObject().connData.data.nodeCDataParts[this.getPartName()].data) this.getMasterDataObject().connData.data.nodeCDataParts[this.getPartName()].data = {}
        return this.getMasterDataObject().connData.data.nodeCDataParts[this.getPartName()]
    }

    protected valueSync(loadData?: any) {
        this.getMasterDataObject().syncObjectNodeCData_Conn.partSyncStart({

            partName: this.getPartName(),
            loadData: loadData
        })
    }


    abstract saveValue(data?: any)

    abstract loadData(data?: any)

}