import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeObjectBase} from "./NodeObjectBase.js";
import {SMPManager} from "../../../SMP/SMPLayr/SMPManager.js";
import {SMPSavePart_NodeType} from "../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NodeType.js";
import {NodeRootPartsClassList} from "./NodeSMPManager/NodeRootSMPStatic/NodeRootPartsClassList.js";
import {NodeRootSMPStaticData} from "./NodeSMPManager/NodeRootSMPStatic/NodeRootSMPStaticData.js";

export class NodeObjectRoot extends NodeObjectBase {
    docId: string;
    nodeId: string;
    mainElement: MainElementRoot


    constructor(docId: string) {
        super(docId)
        this.mainElement = new MainElementRoot(this)
        this.contextMenu = this.mainElement.contextMenu

        this.nodeId = "0"
        this.init()
        this.smpManagerInit()
    }

    protected smpManagerInit() {

        this.smpManager = new SMPManager({
            smpSavePart: SMPSavePart_NodeType,
            masterObject: this,
            partsClassArray: NodeRootPartsClassList,
            smpSelectorDataStaticArray: NodeRootSMPStaticData
        })
    }

    init() {
        this.mainElement.layoutApply()
        this.elementsManager.elementsRefresh()
        // this.elementsManager.elementToFullScreen("3542453745834")

    }


    removeNode() {
        this.mainElement.element.remove()
    }
}