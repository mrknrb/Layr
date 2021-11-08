import {ElementsManager} from "../Elements/ElementsManager.js";
import {LayrBackground} from "../../../../Background/LayrBackground.js";
import {DocObject} from "../../../../Background/Data/Doc/Doc/DocObject.js";
import {MainElementBase} from "../MainElement/MainElementBase.js";

export interface NodeObjectInterface {
    docId: string
    nodeId:string //ha "0" a nodeid, akkor o a root
    mainElement:MainElementBase
    elementsManager: ElementsManager


    removeNode()



    init()



}