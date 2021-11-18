import {PartBaseNode_Doc} from "../../../PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../NodeObjectBase.js";
import {ElementTypes} from "../../Element/Adatok/ElementTypes.js";

export class NodeNewElementPart extends PartBaseNode_Doc {
    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
    }

    protected saveValueTriggerInit() {

    }

    loadData(fieldId: string) {
        this.masterObject.elementsManager.elementLoad(this.getDataObject().fieldObjects.find(fieldObj => fieldObj.fieldData.fieldId == fieldId))
    }


    saveValue(data: { fieldName: string, elementType: ElementTypes }) {
        let fieldObject = this.getDataObject().newField(data.fieldName, data.elementType)
        this.valueSync()({partClassName: this.getPartClassName(), loadData: fieldObject.fieldData.fieldId})
    }
}