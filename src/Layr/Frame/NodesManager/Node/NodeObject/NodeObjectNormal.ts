import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {NodeInterface} from "./NodeInterface.js";
import {LayrBackground} from "../../../../Background/LayrBackground.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {layrBackgroundF} from "../../../MainFrame.js";

export class NodeObjectNormal implements NodeInterface {

    docId: string;
    parentDocId: string
    parentNodeId: string
    root: boolean;

    mainElement: MainElementNormal
    elementsManager: ElementsManager;


    constructor(docId: string,  parentNodeId: string) {

        this.docId = docId
        this.parentNodeId = parentNodeId
        this.root = false
        this.mainElement = new MainElementNormal(this)
        this.elementsManager = new ElementsManager(this)

        this.refresher()
    }


    removeNode() {
        this.mainElement.element.remove()
    }


    refresher() {
        layrBackgroundF.docsConnectionsManager.docLoad(this.docId, function () {

        })
        this.mainElement.layoutApply()
        this.elementsManager.elementsRefresh()
    }
}