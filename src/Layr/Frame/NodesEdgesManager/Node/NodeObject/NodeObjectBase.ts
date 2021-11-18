import {MainElementBase} from "../MainElement/MainElementBase.js";
import {ElementsManager} from "../Element/ElementsManager.js";

export abstract class NodeObjectBase {

    docId: string
    nodeId: string //ha "0" a nodeid, akkor o a root
    mainElement: MainElementBase
    elementsManager: ElementsManager

    constructor() {

        this.elementsManager = new ElementsManager(this)



    }

    abstract removeNode()


    abstract init()


}