import {PartBase} from "../../../PartsGeneral/PartBase.js";
import {SMPStateDataDynamic} from "./SMPStateDataDynamic.js";

export class SMPPartDataDynamic {

    smpStateDataDynamic: SMPStateDataDynamic
    smpPartNameStatic: string

    //yx lehet nem jo semmire, de gyeloe megtartom
    constructor(smpPartNameStatic: string, smpStateDataDynamic: SMPStateDataDynamic) {
        this.smpStateDataDynamic = smpStateDataDynamic
        this.smpPartNameStatic = smpPartNameStatic

    }

    activatePart(activate: boolean) {
        this.getPart().setActive(activate)
    }

    getPart() {
        return this.smpStateDataDynamic.smpSelectorDataDynamic.smpManager.masterObjectParts.getPartObject_ByName(this.smpPartNameStatic) as PartBase
    }
}