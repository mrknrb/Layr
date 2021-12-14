import {SMPSelectorDataStatic} from "../SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPStateDataDynamic} from "./SMPStateDataDynamic.js";
import {SMPSelectorDataSave} from "../SMPSelectorSaveData/SMPSelectorDataSave.js";
import {SMPStateDataSave} from "../SMPSelectorSaveData/SMPStateDataSave.js";
import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {SMPManager} from "../../SMPManager.js";
import {SMPSelectorContextMenu} from "../../SMPEgyebek/SMPSelectorContextMenu.js";

export class SMPSelectorDataDynamic {
    smpStateDataDynamicMap: Map<string, SMPStateDataDynamic>
    activatedState: string
    selectorActive: boolean
    smpSelectorDataStatic: SMPSelectorDataStatic
    smpSelectorDataSave: SMPSelectorDataSave
    smpManager: SMPManager
    stateChangeRequestEvent: TypedEvent<string>
    // contextMenuElementSelector: ContextMenu// yx lehet nem fog kelleni
    selectorContextMenu: SMPSelectorContextMenu

    constructor(smSelectorDataStatic: SMPSelectorDataStatic, smSelectorDataSave: SMPSelectorDataSave, smpManager: SMPManager) {
        this.smpSelectorDataStatic = smSelectorDataStatic
        this.smpSelectorDataSave = smSelectorDataSave
        this.smpManager = smpManager
        this.smpStateDataDynamicMap = new Map<string, SMPStateDataDynamic>()
        this.stateChangeRequestEvent=new TypedEvent<string>()
        this.smpSelectorDataSave.savedActivateState ? this.activatedState = this.smpSelectorDataSave.savedActivateState : this.activatedState = this.smpSelectorDataStatic.defaultState
        this.smpSelectorDataStatic.states.forEach(staticData => {

            let saveData = smSelectorDataSave.states.find(saveState => {

                return saveState.stateName == staticData.stateName
            })
            if (!saveData) {
                saveData = new SMPStateDataSave(staticData.stateName)
                this.smpSelectorDataSave.states.push(saveData)
            }

            this.smpStateDataDynamicMap.set(staticData.stateName, new SMPStateDataDynamic(staticData, saveData, this))

        })
        this.selectorContextMenu = new SMPSelectorContextMenu(this)

    }


    public getParentSelector() {
        if (!this.smpSelectorDataStatic.parentSelectorAndStateName) return null
        return this.smpManager.smpSelectorDataDynamicMap.get(this.smpSelectorDataStatic.parentSelectorAndStateName.selectorName)
    }

    public getParentState() {

        return this.smpManager.smpSelectorDataDynamicMap.get(this.smpSelectorDataStatic.parentSelectorAndStateName.selectorName).smpStateDataDynamicMap.get(this.smpSelectorDataStatic.parentSelectorAndStateName.stateName)
    }


    getState(stateName: string) {
        return this.smpStateDataDynamicMap.get(stateName)
    }

    getActivatedState() {
        return this.smpStateDataDynamicMap.get(this.activatedState)
    }

    async activateSelector(activate: boolean) {
        if (this.selectorActive == activate) return
        this.selectorActive = activate
        this.smpSelectorDataSave.selectorActivated = activate
        //  this.smpManager.smpSavePart.saveValue()
        this.selectorContextMenu.contextMenuMain.elementVisible(activate)
        this.getState(this.activatedState).activateState(activate)
    }

    changeState(stateName: string) {
        if (this.activatedState == stateName) return
        if (this.selectorActive) {
            this.getState(this.activatedState).activateState(false)
            this.getState(stateName).activateState(true)
        }
        this.activatedState = stateName
        this.smpSelectorDataSave.savedActivateState = stateName
        this.smpManager.smpSavePart.saveValue()
        this.stateChangeRequestEvent.emit(stateName)
    }

}
























