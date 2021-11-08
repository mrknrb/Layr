import {Layouts} from "../Elements/Elements/GroupElement/Layouts/Layouts.js";
import {MainElementRoot} from "../MainElement/MainElementRoot.js";
import {NodeObjectInterface} from "./NodeObjectInterface.js";
import {ElementsManager} from "../Elements/ElementsManager.js";
import {layrBackgroundF} from "../../../MainFrame.js";

export class NodeObjectRoot implements NodeObjectInterface {
    docId: string;
    nodeId: string;
    mainElement: MainElementRoot
    elementsManager: ElementsManager;


    constructor(docId: string) {

        this.mainElement = new MainElementRoot(this)
        this.elementsManager = new ElementsManager(this)
        this.docId = docId
        this.nodeId="0"

        this.init()

    }

    init() {
        this.mainElement.layoutApply(Layouts.root)

        this.elementsManager.elementsRefresh()
        this.elementsManager.elementToFullScreen("group")



    }


    removeNode() {
        this.mainElement.element.remove()
    }



}