import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {NodeData} from "../../../Background/Data/NodeData/NodeData.js";
import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {GroupElement} from "../Elements/Elements/GroupElement/GroupElement.js";
import {NodeDivInterface} from "./NodeDivInterface.js";
import {LayrBackground} from "../../../Background/LayrBackground.js";
import {ElementsManager} from "../Elements/ElementsManager.js";

export class NodeDivNormal implements NodeDivInterface {
    elementsManager: ElementsManager;
    hivatkozottDocDataObject: DocDataObject;
    layrBackground: LayrBackground;
    root: boolean;
    mainElement: MainElementNormal
    nodeData: NodeData
    parentGroupElement: GroupElement

    constructor(parentGroupElement: GroupElement, nodeData: NodeData, hivatkozottDocDataObject: DocDataObject) {
        let bkg = chrome.extension.getBackgroundPage()
        // @ts-ignore
        this.layrBackground = bkg.layr

        this.parentGroupElement = parentGroupElement
        this.nodeData = nodeData
        this.hivatkozottDocDataObject = hivatkozottDocDataObject
        this.elementsManager = new ElementsManager(this)
        this.mainElement = new MainElementNormal(this)
        this.root = false
        this.refresher()
    }


    layoutRefresh() {
        this.mainElement.layoutApply()

    }

    removeNodeDiv() {
        this.mainElement.element.remove()
    }


    refresher() {
        this.layrBackground.docsManager.docGetOrDownload(this.hivatkozottDocDataObject.docAbsoluteURL, function () {

        })
        this.layoutRefresh()
        this.elementsManager.elementsRefresh()
    }
}