import {PartBase} from "../PartBase.js";
import {NodeObjectBase} from "../../Node/NodeObject/NodeObjectBase.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectNormal} from "../../Node/NodeObject/NodeObjectNormal.js";

export abstract class PartBaseElementStyle_Conn extends PartBase{

    protected  masterObject: NodeObjectNormal
    protected constructor(masterObject: NodeObjectNormal) {
        super();
        this.masterObject=masterObject
    }

    protected  getDataObject() {
        return LayrFind.connection(this.masterObject.connectionId)
    }


    protected  valueSync(loadData?:any) {

        this. getDataObject().syncObjectNodeStyle_Conn.partSyncStart({partClassName:this.getPartClassName(),loadData:loadData})


    }


    abstract saveValue(data?:any)

    abstract loadData(data?:any)




}