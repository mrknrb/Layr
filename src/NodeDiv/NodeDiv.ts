import {MrkS3} from "../MrkS3/MrkS3";
import {NodeDivAllData} from "./NodeDivAllData";
import {ElementBaseClass} from "./Elements/ElementBaseClass";
import {MainElement} from "./Elements/MainElements/MainElement";

export class NodeDiv {
    mrkS3: MrkS3
    nodeDivAllData: NodeDivAllData
    elements: Map<string, ElementBaseClass>
    mainElement: MainElement


    constructor(mrkS3: MrkS3) {
        this.mrkS3 = mrkS3
        this.elements = new Map<string, ElementBaseClass>()
        this.mainElement = new MainElement(this)
        this.nodeDivAllData.nodeDivData.nodeDivId = (Math.random() * 1000000).toString()
    }

    refresher() {

        this.nodeDivAllData.nodeDocData.docData.docFields


    }


}