import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {ElementBaseClass} from "../../../NodesEdgesManager/Node/Element/ElementBaseClass.js";

export abstract class PartBaseElementCData_CDataStorePlaces extends PartBase {

    protected masterObject: ElementBaseClass

    protected constructor(masterObject: ElementBaseClass) {
        super();
        this.masterObject = masterObject
    }

    protected getMasterDataObject() {
        return LayrFind.conn(this.masterObject.nodeObject)
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

    protected loadDataDefaultForPartBaseType() {
    }

    protected saveValueDefaultForPartBaseType(saveValue: any) {
    }
}