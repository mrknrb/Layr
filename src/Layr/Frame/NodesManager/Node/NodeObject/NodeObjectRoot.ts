import {Layouts} from "../Elements/Elements/GroupElement/Layouts/Layouts.js";
import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeInterface} from "./NodeInterface.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {layrBackgroundF} from "../../../MainFrame.js";

export class NodeObjectRoot implements NodeInterface {
    docId: string;
    root: boolean;
    mainElement: MainElementRoot
    elementsManager: ElementsManager;

    constructor(docId: string) {

        this.mainElement = new MainElementRoot(this)
        this.elementsManager = new ElementsManager(this)
        this.docId = docId

        this.root = true

        this.refresher()

    }

    refresher() {
        let self = this
        layrBackgroundF.docsConnectionsManager.docLoad(this.docId, function () {
            self.mainElement.layoutApply(Layouts.root)

            self.elementsManager.elementsRefresh()
            self.elementsManager.elementToFullScreen("group")
        })

    }


    removeNode() {
        this.mainElement.element.remove()
    }


}