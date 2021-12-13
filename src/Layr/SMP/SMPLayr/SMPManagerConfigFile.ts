import {SMPMasterObjectInterface} from "./SMPMasterObjectInterface.js";
import {SMPSelectorDataStatic} from "./DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {PartBase} from "../PartsGeneral/PartBase.js";

export class SMPManagerConfigFile {
    masterObject: SMPMasterObjectInterface
    SMPStaticData: SMPSelectorDataStatic[]
    smpSavePart: any
    PartsClassArray: any[]
}

enum SMPMasterObjectTypes {
    node = "node",
    element = "element"
}