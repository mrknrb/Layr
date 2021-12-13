import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeObjectBase} from "./NodeObjectBase.js";

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

    init() {
        this.mainElement.layoutApply()
        this.elementsManager.elementsRefresh()
       // this.elementsManager.elementToFullScreen("3542453745834")

    }


    removeNode() {
        this.mainElement.element.remove()
    }
}