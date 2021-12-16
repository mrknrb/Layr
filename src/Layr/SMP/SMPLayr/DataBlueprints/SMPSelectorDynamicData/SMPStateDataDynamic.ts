import {SMPStateDataStatic} from "../SMPSelectorStaticData/SMPStateDataStatic.js";
import {SMPPartDataDynamic} from "./SMPPartDataDynamic.js";
import {SMPStateDataSave} from "../SMPSelectorSaveData/SMPStateDataSave.js";
import {SMPSelectorDataDynamic} from "./SMPSelectorDataDynamic.js";
import {ContextMenu} from "../../../../ContextMenu/ContextMenu.js";
import {SMPStateContextMenu} from "../../SMPEgyebek/SMPStateContextMenu.js";
import {PartBase} from "../../../PartsGeneral/PartBase.js";

export class SMPStateDataDynamic {
    smpSelectorDataDynamic: SMPSelectorDataDynamic
    smStateDataStatic: SMPStateDataStatic
    smStateDataSave: SMPStateDataSave
    SMPPartDataDynamicArray: SMPPartDataDynamic[]
    stateContextMenu: ContextMenu
    smpStateContextMenu: SMPStateContextMenu

    constructor(smpStateDataStatic: SMPStateDataStatic, smStateDataSave: SMPStateDataSave, smpSelectorDataDynamic: SMPSelectorDataDynamic) {
        this.SMPPartDataDynamicArray = []
        this.smStateDataSave = smStateDataSave
        this.smStateDataStatic = smpStateDataStatic
        this.smpSelectorDataDynamic = smpSelectorDataDynamic
        // console.log(smpStateDataStatic.masterObjectPartNames)
        smpStateDataStatic.masterObjectPartNames.forEach(value => {
            this.SMPPartDataDynamicArray.push(new SMPPartDataDynamic(value, this))
        })
        // console.log(smpStateDataStatic.masterObjectParts)
        //  console.log(this)
        //  this.smpStateContextMenu=new SMPStateContextMenu(this)
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

    searchGetAllParts() {
        let parts: PartBase[] = []
        this.SMPPartDataDynamicArray.forEach(partData => {
            parts.push(partData.getPart())
        })
        return parts
    }

    activateState(activate: boolean) {
        if (activate) {
            this.smpStateContextMenu.stateContextMenu.contextMenuVisible()
            for (let i = 0; i < this.SMPPartDataDynamicArray.length; i++) {
                this.SMPPartDataDynamicArray[i].activatePart(activate)
            }
        } else {
            this.smpStateContextMenu.stateContextMenu.contextMenuInVisible()
            for (let i = this.SMPPartDataDynamicArray.length - 1; i > -1; i--) {
                this.SMPPartDataDynamicArray[i].activatePart(activate)
            }
        }
    }

    createContextMenu(contextMenuHead: ContextMenu, contextMenuBody: ContextMenu) {
        this.smpStateContextMenu = new SMPStateContextMenu(this, contextMenuHead, contextMenuBody)


        return this.smpStateContextMenu

    }


}