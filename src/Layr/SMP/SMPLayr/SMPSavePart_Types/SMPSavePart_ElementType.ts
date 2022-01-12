import {PartBaseElement_Field} from "../../PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {SMPManager} from "../SMPManager.js";
import {ElementObject} from "../../../NodesEdgesManager/Node/Element/ElementObject.js";

export class SMPSavePart_ElementType extends PartBaseElement_Field {

    protected masterObject: ElementObject
    smpManager: SMPManager

    static partName = "SMPSave"

    constructor(masterObject, smpManager: SMPManager) {
        super(masterObject);
        //console.error(smpManager)
        this.smpManager = smpManager
    }

    protected activate() {

        this.loadData()
    }

    protected deactivate() {
    }

    loadData() {

        if (!this.getPartData()) {
            this.smpManager.smpSelectorDataSaveObjects = {}
            return
        }
        if (!this.getPartData().data) {

            this.smpManager.smpSelectorDataSaveObjects = {}
            return
        }
        this.smpManager.smpSelectorDataSaveObjects = this.getPartData().data


    }

    saveValue() {
        this.saveValueDefault(this.smpManager.smpSelectorDataSaveObjects)
        this.valueSync()
    }


}
