import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {Layouts} from "../../Layouts/Layouts.js";
import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeDivInterface} from "./NodeDivInterface.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {LayrBackground} from "../../../Background/LayrBackground.js";
import {DocURLObject} from "../../../Background/Arangodb/ArangoAdatok/DocURLObject.js";

export class NodeDivRoot implements NodeDivInterface {
    elementsManager: ElementsManager;
    hivatkozottDocDataObject: DocDataObject;
    layrBackground: LayrBackground;
    root: boolean;
    mainElement: MainElementRoot

    constructor(hivatkozottDocDataObject: DocDataObject) {
        let bkg = chrome.extension.getBackgroundPage()
        // @ts-ignore
        this.layrBackground = bkg.layr

        this.elementsManager = new ElementsManager(this)
        this.mainElement = new MainElementRoot(this)
        this.hivatkozottDocDataObject = hivatkozottDocDataObject

        this.root = true

        this.refresher()
    }

    refresher() {
        this.layrBackground.docsManager.docGetOrDownload(this.hivatkozottDocDataObject.docAbsoluteURL, function () {

        })
        this.layoutRefresh()
        this.elementsManager.elementsRefresh()
    }

    layoutRefresh() {
        this.mainElement.layoutApply(Layouts.root)
    }

    removeNodeDiv() {
    }

    fullScreenElementApply() {
        let docDataObject=new DocURLObject(this.hivatkozottDocDataObject.docAbsoluteURL,null)
        this.elementsManager.oneElementInsertFullScreen(docDataObject.urlData.docFieldid)
    }


}