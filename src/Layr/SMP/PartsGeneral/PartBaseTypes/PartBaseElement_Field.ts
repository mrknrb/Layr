import {PartBase} from "../PartBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {ElementBaseClass} from "../../../NodesEdgesManager/Node/Element/ElementBaseClass.js";
import {FieldObject} from "../../../DocsConnsManager/Data/Doc/Field/FieldObject.js";

export abstract class PartBaseElement_Field extends PartBase {
    protected masterObject: ElementBaseClass

    protected constructor(masterObject: ElementBaseClass) {
        super();
        this.masterObject = masterObject
    }

    protected getMasterDataObject() {

        return LayrFind.fieldObject_ByFieldId_DocId(this.masterObject.fieldId, this.masterObject.nodeObject.docId)
    }

    protected getPartData() {
        //yx nem tudom, hogy mukodik-e
        if (!this.getMasterDataObject().fieldData.partsData) this.getMasterDataObject().fieldData.partsData = {}
        if (!this.getMasterDataObject().fieldData.partsData[this.getPartName()]) this.getMasterDataObject().fieldData.partsData[this.getPartName()] = {}
        return this.getMasterDataObject().fieldData.partsData[this.getPartName()]
    }


    protected valueSync(loadData?: any) {
        this.getMasterDataObject().syncObjectElement_Field.partSyncStart({
            fieldId: this.masterObject.fieldId,
            partClassName: this.getPartClassName(),
            loadData: loadData
        })
    }

    abstract saveValue(fieldObject?: FieldObject)

    abstract loadData(fieldObject?: FieldObject)
}