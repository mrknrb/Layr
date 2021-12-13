import {SMPStateDataStatic} from "../SMPSelectorStaticData/SMPStateDataStatic.js";
import {SMPPartDataDynamic} from "./SMPPartDataDynamic.js";
import {SMPStateDataSave} from "../SMPSelectorSaveData/SMPStateDataSave.js";
import {SMPSelectorDataDynamic} from "./SMPSelectorDataDynamic.js";
import {ContextMenu} from "../../../../ContextMenu/ContextMenu.js";

export class SMPStateDataDynamic {
    smpSelectorDataDynamic: SMPSelectorDataDynamic
    smStateDataStatic: SMPStateDataStatic
    smStateDataSave: SMPStateDataSave
    SMPPartDataDynamicArray: SMPPartDataDynamic[]
    stateContextMenu: ContextMenu

    constructor(smpStateDataStatic: SMPStateDataStatic, smStateDataSave: SMPStateDataSave, smpSelectorDataDynamic: SMPSelectorDataDynamic) {
        this.SMPPartDataDynamicArray = []
        this.smStateDataSave = smStateDataSave
        this.smStateDataStatic = smpStateDataStatic
        this.smpSelectorDataDynamic = smpSelectorDataDynamic
        // console.log(smpStateDataStatic.masterObjectParts)
        smpStateDataStatic.masterObjectParts.forEach(value => {
            this.SMPPartDataDynamicArray.push(new SMPPartDataDynamic(value, this))
        })
        // console.log(smpStateDataStatic.masterObjectParts)
        //  console.log(this)
    }

    getChildSelector() {
        let childSelectorsArray: SMPSelectorDataDynamic[] = []
        this.smpSelectorDataDynamic.smpManager.smpSelectorDataDynamicMap.forEach(selector => {
            if (selector.smpSelectorDataStatic.parentSelectorAndStateName.selectorName == this.smpSelectorDataDynamic.smpSelectorDataStatic.selectorName
                &&
                selector.smpSelectorDataStatic.parentSelectorAndStateName.stateName == this.smStateDataStatic.stateName) {
                childSelectorsArray.push(selector)
            }
        })
        return childSelectorsArray
    }

    activateState(activate: boolean) {

        if (activate) {
            for (let i = 0; i < this.SMPPartDataDynamicArray.length; i++) {
                this.SMPPartDataDynamicArray[i].activatePart(activate)
            }
        } else {
            for (let i = this.SMPPartDataDynamicArray.length; i >= 0; i--) {
                this.SMPPartDataDynamicArray[i].activatePart(activate)
            }
        }
    }
}