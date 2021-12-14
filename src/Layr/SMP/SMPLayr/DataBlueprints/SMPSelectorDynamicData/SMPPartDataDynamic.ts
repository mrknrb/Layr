import {SMPPartDataStatic} from "../SMPSelectorStaticData/SMPPartDataStatic.js";
import {PartBase} from "../../../PartsGeneral/PartBase.js";
import {SMPSearchType} from "../../SMPEnums/SMPSearchType.js";
import {LayrFind} from "../../../../../0Egyebek/LayrFind.js";
import {SMPStateDataDynamic} from "./SMPStateDataDynamic.js";

export class SMPPartDataDynamic {

    smpStateDataDynamic: SMPStateDataDynamic
    smpPartDataStatic: SMPPartDataStatic

    //yx lehet nem jo semmire, de gyeloe megtartom
    constructor(smpPartDataStatic: SMPPartDataStatic, smpStateDataDynamic: SMPStateDataDynamic) {
        this.smpStateDataDynamic = smpStateDataDynamic
        this.smpPartDataStatic = smpPartDataStatic

    }

    activatePart(activate: boolean) {
        this.getPart().setActive(activate)
    }

    getPart() {
        if (this.smpPartDataStatic.searchType == SMPSearchType.OwnMasterObjectPart) {
            return this.smpStateDataDynamic.smpSelectorDataDynamic.smpManager.masterObjectParts.getObject(this.smpPartDataStatic.partName) as PartBase
        } else if (this.smpPartDataStatic.searchType == SMPSearchType.ChildNodePart) {
            let nodeId = this.smpStateDataDynamic.smpSelectorDataDynamic.smpManager.masterObject.nodeId
            LayrFind.nodes_ByParentNodeId_InFrame(nodeId).forEach(node => {
                //yx ugyanaz mint a getpart csak nem partmanagerbol jon
                return node.smpManager.masterObjectParts.getObject(this.smpPartDataStatic.partName) as PartBase


            })
        }

    }


}