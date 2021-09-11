import {MainElementBase} from "../MainElement/MainElementBase.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {NodeDivData} from "../NodeDivData.js";
import {LayrBackground} from "../../../Background/LayrBackground.js";
import {ElementBaseClass} from "../Elements/ElementBaseClass.js";

export abstract class NodeDivBase {

    nodeDivData: NodeDivData
    mainElement//: ElementBaseClass
    elementsManager: ElementsManager
    layrBackground:LayrBackground
    constructor() {
        let bkg = chrome.extension.getBackgroundPage()
        // @ts-ignore
        this.layrBackground = bkg.layr
        this.elementsManager = new ElementsManager(this)
        this.nodeDivData = new NodeDivData()
    }

    public abstract removeNodeDiv()



    refresher() {
        this.layrBackground.docsManager.docGetOrDownload(this.nodeDivData.hivatkozottDocDataObject.docAbsoluteURL,function () {

        })
        this.layoutRefresh()
        this.elementsManager.elementsRefresh()
    }

    abstract layoutRefresh()

}