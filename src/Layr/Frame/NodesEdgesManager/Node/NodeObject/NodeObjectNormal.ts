import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {NodeObjectBase} from "./NodeObjectBase.js";

export class NodeObjectNormal extends NodeObjectBase {

    docId: string;
    connectionId: string
    nodeId: string
    parentNodeId: string

    mainElement: MainElementNormal


    constructor(docId: string, connectionId: string, parentNodeId: string) {
        super()
        this.docId = docId
        this.connectionId = connectionId
        this.nodeId = Math.random().toString()
        this.parentNodeId = parentNodeId
        this.mainElement = new MainElementNormal(this)

        this.init()
    }


    removeNode() {
        this.mainElement.element.remove()
    }


    init() {
        this.mainElement.layoutApply()
        this.elementsManager.elementsRefresh()
    }
}