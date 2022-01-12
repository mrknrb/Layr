import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {NodeObjectBase} from "./NodeObjectBase.js";
import {SMPManager} from "../../../SMP/SMPLayr/SMPManager.js";
import {SMPSavePart_NodeType} from "../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NodeType.js";
import {NodeNormalSMPStaticData} from "./NodeSMPManager/NodeNormalSMPStatic/NodeNormalSMPStaticData.js";
import {NodeNormalPartsClassList} from "./NodeSMPManager/NodeNormalSMPStatic/NodeNormalPartsClassList.js";

export class NodeObjectNormal extends NodeObjectBase {

    connId: string
    nodeId: string
    parentNodeId: string

    mainElement: MainElementNormal


    constructor(docId: string, connectionId: string, parentNodeId: string) {
        super(docId)
        this.connId = connectionId
        this.nodeId = Math.random().toString()
        this.parentNodeId = parentNodeId
        this.mainElement = new MainElementNormal(this)
        this.contextMenu = this.mainElement.contextMenu

        this.init()
        this.smpManagerInit()
    }

    protected smpManagerInit() {

        this.smpManager = new SMPManager({
            smpSavePart: SMPSavePart_NodeType,
            masterObject: this,
            partsClassArray: NodeNormalPartsClassList,
            smpSelectorDataStaticArray: NodeNormalSMPStaticData
        })
    }

    removeNode() {
        this.mainElement.element.remove()
    }


    init() {
        this.mainElement.layoutApply()
        this.elementsManager.elementsRefresh()
    }
}


