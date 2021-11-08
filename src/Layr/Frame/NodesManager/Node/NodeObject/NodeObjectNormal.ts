import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {NodeObjectInterface} from "./NodeObjectInterface.js";
import {LayrBackground} from "../../../../Background/LayrBackground.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {layrBackgroundF} from "../../../MainFrame.js";

export class NodeObjectNormal implements NodeObjectInterface {

    docId: string;
    nodeId:string
    parentNodeId: string

    mainElement: MainElementNormal
    elementsManager: ElementsManager;


    constructor(docId: string,  parentNodeId: string) {

        this.docId = docId
        this.nodeId=Math.random().toString()
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