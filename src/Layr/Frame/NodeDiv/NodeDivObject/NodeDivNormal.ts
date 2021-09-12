import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {NodeData} from "../../../Background/Data/NodeData/NodeData.js";
import {MainElementNormal} from "../MainElement/MainElementNormal.js";
import {NodeDivBase} from "./NodeDivBase.js";
import {GroupElement} from "../Elements/Elements/GroupElement/GroupElement.js";

export class NodeDivNormal extends NodeDivBase {
    mainElement: MainElementNormal

    constructor(parentElement: GroupElement, nodeData: NodeData, hivatkozottDocDataObject: DocDataObject) {
        super()
        this.nodeDivData.normalInit(parentElement,nodeData,hivatkozottDocDataObject)
        this.mainElement = new MainElementNormal(this)
        this.refresher()

    }


    layoutRefresh() {
        this.mainElement.layoutApply()

    }

    removeNodeDiv() {
        this.mainElement.element.remove()


    }
}