import {SMPManager} from "./SMPManager.js";
import {ContextMenu} from "../../UIElemek/ContextMenu/ContextMenu.js";

export interface SMPMasterObjectInterface {


    smpManager: SMPManager
    contextMenu: ContextMenu
    nodeId?: string
    fieldId?: string
}