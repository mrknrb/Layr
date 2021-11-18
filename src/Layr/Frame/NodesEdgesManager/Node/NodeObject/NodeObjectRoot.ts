import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeObjectBase} from "./NodeObjectBase.js";

export class NodeObjectRoot extends NodeObjectBase {
    docId: string;
    nodeId: string;
    mainElement: MainElementRoot


    constructor(docId: string) {
        super()
        this.mainElement = new MainElementRoot(this)
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