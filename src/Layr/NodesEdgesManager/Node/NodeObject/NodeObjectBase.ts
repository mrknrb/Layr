import {MainElementBase} from "../MainElement/MainElementBase.js";
import {ElementsManager} from "../Element/ElementsManager.js";
import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {SMPManager} from "../../../SMP/SMPLayr/SMPManager.js";
import {GroupElementStaticData} from "../Element/Elements/GroupElement/GroupElementSMPManager/GroupElementStaticData.js";
import {SMPMasterObjectInterface} from "../../../SMP/SMPLayr/SMPMasterObjectInterface.js";
import {NodeRootPartsClassList} from "./NodeSMPManager/NodeRootSMPStatic/NodeRootPartsClassList.js";
import {SMPSavePart_NodeType} from "../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NodeType.js";
import {NodeRootSMPStaticData} from "./NodeSMPManager/NodeRootSMPStatic/NodeRootSMPStaticData.js";

export abstract class NodeObjectBase implements SMPMasterObjectInterface {

    docId: string
    nodeId: string //ha "0" a nodeid, akkor o a root
    mainElement: MainElementBase
    elementsManager: ElementsManager
    smpManager: SMPManager
    contextMenu: ContextMenu

    constructor(docId: string) {

        this.docId = docId
        this.elementsManager = new ElementsManager(this)


    }




    abstract removeNode()

    abstract init()
}
