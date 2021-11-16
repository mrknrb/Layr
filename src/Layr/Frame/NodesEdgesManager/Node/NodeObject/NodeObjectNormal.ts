import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {NodeObjectInterface} from "./NodeObjectInterface.js";
import {ElementsManager} from "../Element/ElementsManager.js";

export class NodeObjectNormal implements NodeObjectInterface {

    docId: string;
    connectionId: string
    nodeId: string
    parentNodeId: string

    mainElement: MainElementNormal
    elementsManager: ElementsManager;


    constructor(docId: string, connectionId: string, parentNodeId: string) {

        this.docId = docId
        this.connectionId = connectionId
        this.nodeId = Math.random().toString()
        this.parentNodeId = parentNodeId
        this.mainElement = new MainElementNormal(this)
        this.elementsManager = new ElementsManager(this)

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