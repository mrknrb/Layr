import {PartBaseNode_Doc} from "../../PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../../NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {SMPManager} from "../SMPManager.js";
import {PartBaseNodeCData_Conn} from "../../PartsGeneral/PartBaseTypes/PartBaseNodeCData_Conn.js";

export class SMPSavePart_NormalNodeConnType extends PartBaseNodeCData_Conn {
    //yx ez lehet, hogy valtozni fog a jovoben CData-ra, de egyelore mivel a root-al csak igy lehet, igy ezt hasznalom
    protected masterObject: NodeObjectBase
    smpManager: SMPManager
    static partName = "SMPSave"

    constructor(masterObject, smpManager: SMPManager) {
        super(masterObject);
        //  console.log(masterObject,smpManager)
        this.smpManager = smpManager
    }

    activate() {
        this.loadData()
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
    }

    deactivate() {
    }
}