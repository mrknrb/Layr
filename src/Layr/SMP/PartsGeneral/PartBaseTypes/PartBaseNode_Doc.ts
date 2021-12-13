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

        if(!this.getMasterDataObject().docData.partsData) this.getMasterDataObject().docData.partsData={}
        if(!this.getMasterDataObject().docData.partsData[this. getPartName ()]) this.getMasterDataObject().docData.partsData[this. getPartName ()]={}
        return this.getMasterDataObject().docData.partsData[this. getPartName ()]

    }
    protected valueSync(loadData?: any) {

        this.getMasterDataObject().syncObjectNode_Doc.partSyncStart({
            partClassName: this.getPartClassName(),
            loadData: loadData
        })
    }


    abstract saveValue(data?: any)

    abstract loadData(data?: any)


}