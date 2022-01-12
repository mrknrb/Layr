import {SMPMasterObjectInterface} from "./SMPMasterObjectInterface.js";
import {SMPSelectorDataStatic} from "./DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";

export class SMPManagerConfigFile {
    masterObject: SMPMasterObjectInterface
    smpSelectorDataStaticArray: SMPSelectorDataStatic[]
    smpSavePart: any
    partsClassArray: any[]
}

enum SMPMasterObjectTypes {
    node = "node",
    element = "element"
}