import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeObjectBase} from "./NodeObjectBase.js";
import {ElementsManager} from "../Element/ElementsManager.js";

export class NodeObjectRoot implements NodeObjectBase {
    docId: string;
    nodeId: string;
    mainElement: MainElementRoot
    elementsManager: ElementsManager;


    constructor(docId: string) {

        this.mainElement = new MainElementRoot(this)
        this.elementsManager = new ElementsManager(this)
        this.docId = docId
        this.nodeId = "0"

        this.init()

    }

    init() {
        this.mainElement.layoutApply()
        this.elementsManager.elementsRefresh()
        this.elementsManager.elementToFullScreen("3542453745834")
    }


    removeNode() {
        this.mainElement.element.remove()
    }


}