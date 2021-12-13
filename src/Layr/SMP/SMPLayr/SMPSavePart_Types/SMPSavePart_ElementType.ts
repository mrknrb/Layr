import {PartBaseElement_Field} from "../../PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementBaseClass} from "../../../NodesEdgesManager/Node/Element/ElementBaseClass.js";
import {SMPManager} from "../SMPManager.js";
import {NodeObjectBase} from "../../../NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {ElementResizer} from "../../../NodesEdgesManager/Node/Element/ElementResizer/ElementResizer.js";

export class SMPSavePart_ElementType extends PartBaseElement_Field {

    protected masterObject: ElementBaseClass
    smpManager:SMPManager

    static partName = "SMPSave"
    constructor(masterObject,smpManager:SMPManager) {
        super(masterObject);
    //console.error(smpManager)
        this. smpManager=smpManager
    }

    protected activate() {
        // this.loadData()
    }

    protected deactivate() {
    }

    loadData() {
        if (!this.getPartData()) {
            this. smpManager.smpSelectorDataSaveObjects = {}
        } else {
            this. smpManager.smpSelectorDataSaveObjects = this.getPartData()
        }

    }

    saveValue() {
        this.saveValueDefault(this. smpManager.smpSelectorDataSaveObjects)
    }


}
