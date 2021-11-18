import {MainElementBase} from "../MainElement/MainElementBase.js";
import {ElementsManager} from "../Element/ElementsManager.js";
import {NodePartsManager} from "./NodeParts/NodePartsManager.js";

export abstract class NodeObjectBase {

    docId: string
    nodeId: string //ha "0" a nodeid, akkor o a root
    mainElement: MainElementBase
    elementsManager: ElementsManager
    nodePartsManager:NodePartsManager

    constructor() {

        this.elementsManager = new ElementsManager(this)
        this.nodePartsManager = new NodePartsManager(this)


    }

    abstract removeNode()


    abstract init()


}