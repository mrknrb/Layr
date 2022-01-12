import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {ElementObject} from "../../../NodesEdgesManager/Node/Element/ElementObject.js";

export abstract class PartBaseElementCData_CDataStorePlaces extends PartBase {

    protected masterObject: ElementObject

    protected constructor(masterObject: ElementObject) {
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
            partName: this.getPartName(),
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