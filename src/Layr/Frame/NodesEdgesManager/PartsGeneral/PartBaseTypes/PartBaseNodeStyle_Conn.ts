import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectBase} from "../../Node/NodeObject/NodeObjectBase.js";

export abstract class PartBaseNodeStyle_Conn extends PartBase {


    protected masterObject: NodeObjectBase

    protected constructor(masterObject: NodeObjectBase) {
        super();
        this.masterObject = masterObject
    }

    getDataObject() {
        return LayrFind.connection(this.masterObject.nodeId)

    }


    protected valueSync(loadData?: any) {

        this.getDataObject().syncObjectNode_Doc.partSyncStart({
            partClassName: this.getPartClassName(),
            loadData: loadData
        })


    }


    abstract saveValue(data?: any)

    abstract loadData(data?: any)

}