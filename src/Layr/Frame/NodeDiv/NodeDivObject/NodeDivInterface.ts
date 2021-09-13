import {ElementsManager} from "../Elements/ElementsManager.js";
import {LayrBackground} from "../../../Background/LayrBackground.js";
import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {MainElementBase} from "../MainElement/MainElementBase.js";

export interface NodeDivInterface {
    elementsManager: ElementsManager
    layrBackground:LayrBackground
    hivatkozottDocDataObject: DocDataObject
    root: boolean  //root
    mainElement:MainElementBase
    layoutRefresh()
    removeNodeDiv()



    refresher()

 layoutRefresh()

}