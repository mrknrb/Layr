
import {PartBase} from "../../../PartsGeneral/PartBase.js";
import {SMPStateDataDynamic} from "./SMPStateDataDynamic.js";

export class SMPPartDataDynamic {

    smpStateDataDynamic: SMPStateDataDynamic
    smpPartDataStatic: string

    //yx lehet nem jo semmire, de gyeloe megtartom
    constructor(smpPartDataStatic: string, smpStateDataDynamic: SMPStateDataDynamic) {
        this.smpStateDataDynamic = smpStateDataDynamic
        this.smpPartDataStatic = smpPartDataStatic

    }

    activatePart(activate: boolean) {
        this.getPart().setActive(activate)
    }

    getPart() {
        return this.smpStateDataDynamic.smpSelectorDataDynamic.smpManager.masterObjectParts.getObject(this.smpPartDataStatic) as PartBase
    }
}