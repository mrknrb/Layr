import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {FieldObject} from "../../../DocsConnsManager/Data/Doc/Field/FieldObject.js";
import {ElementObject} from "../../../NodesEdgesManager/Node/Element/ElementObject.js";

export abstract class PartBaseElement_Field extends PartBase {
    protected masterObject: ElementObject

    protected constructor(masterObject: ElementObject) {
        super();
        this.masterObject = masterObject
    }

    protected getMasterDataObject() {

        return LayrFind.fieldObject_ByFieldId_DocId(this.masterObject.fieldId, this.masterObject.nodeObject.docId)
    }

    protected getPartData() {
        //yx nem tudom, hogy mukodik-e
        let masterDataObject = this.getMasterDataObject()
        if (masterDataObject === undefined) return undefined
        if (!masterDataObject.fieldData.partsData) masterDataObject.fieldData.partsData = {}
        if (!masterDataObject.fieldData.partsData[this.getPartName()]) masterDataObject.fieldData.partsData[this.getPartName()] = {}
        if (!masterDataObject.fieldData.partsData[this.getPartName()].data) masterDataObject.fieldData.partsData[this.getPartName()].data = {}

        return masterDataObject.fieldData.partsData[this.getPartName()]
    }


    protected valueSync(loadData?: any) {
        this.getMasterDataObject()?.syncObjectElement_Field.partSyncStart({
            nodeId:this.masterObject.nodeObject.nodeId,
            fieldId: this.masterObject.fieldId,
            partName: this.getPartName(),
            loadData: loadData
        })
    }

    abstract saveValue(fieldObject?: FieldObject): void

    abstract loadData(loadData?: any): void
}