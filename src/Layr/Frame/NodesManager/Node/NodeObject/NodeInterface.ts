import {ElementsManager} from "../Elements/ElementsManager.js";
import {LayrBackground} from "../../../../Background/LayrBackground.js";
import {DocObject} from "../../../../Background/Data/Doc/Doc/DocObject.js";
import {MainElementBase} from "../MainElement/MainElementBase.js";

export interface NodeInterface {
    docId: string
    root: boolean  //root
    mainElement:MainElementBase
    elementsManager: ElementsManager


    removeNode()



    refresher()



}