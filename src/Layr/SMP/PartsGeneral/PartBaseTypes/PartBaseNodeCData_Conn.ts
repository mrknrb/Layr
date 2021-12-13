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
        return LayrFind.conn(this.masterObject.connId).nodeCDataObject.nodeCData)
    }
    protected getPartData() {


    }

    protected valueSync(loadData?: any) {
        this.getMasterDataObject().syncObjectNodeCData_Conn.partSyncStart({
            partClassName: this.getPartClassName(),
            loadData: loadData
        })
    }


    abstract saveValue(data?: any)

    abstract loadData(data?: any)

}