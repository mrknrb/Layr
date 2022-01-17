import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {NodeObjectBase} from "../../../NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";

export abstract class PartBaseNode_Doc extends PartBase {
    protected masterObject: NodeObjectBase

    protected constructor(masterObject: NodeObjectBase) {
        super();
        this.masterObject = masterObject
    }

    protected getMasterDataObject() {
        return LayrFind.doc(this.masterObject.docId)
    }

    protected getPartData() {
        let masterDataObject = this.getMasterDataObject()
        if (masterDataObject === undefined) return undefined
        if (!masterDataObject.docData.partsData) masterDataObject.docData.partsData = {}
        if (!masterDataObject.docData.partsData[this.getPartName()]) masterDataObject.docData.partsData[this.getPartName()] = {}
        if (!masterDataObject.docData.partsData[this.getPartName()].data) masterDataObject.docData.partsData[this.getPartName()].data = {}

        return masterDataObject.docData.partsData[this.getPartName()]

    }

    protected valueSync(loadData?: any) {
        this.getMasterDataObject()?.syncObjectNode_Doc.partSyncStart({

            partName: this.getPartName(),
            loadData: loadData
        })
    }


    abstract saveValue(data?: any)

    abstract loadData(data?: any)


}