import {SMPSelectorDataStatic} from "../SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPStateDataDynamic} from "./SMPStateDataDynamic.js";
import {SMPSelectorDataSave} from "../SMPSelectorSaveData/SMPSelectorDataSave.js";
import {SMPStateDataSave} from "../SMPSelectorSaveData/SMPStateDataSave.js";
import {ContextMenu, ContextMenuTypes} from "../../../../ContextMenu/ContextMenu.js";
import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {SMPManager} from "../../SMPManager.js";

export class SMPSelectorDataDynamic {
    smpStateDataDynamicMap: Map<string, SMPStateDataDynamic>
    activatedState: string
    selectorActive: boolean
    smpSelectorDataStatic: SMPSelectorDataStatic
    smpSelectorDataSave: SMPSelectorDataSave
    smpManager: SMPManager
    stateChangeRequestEvent: TypedEvent<string>
    contextMenuElementSelector: ContextMenu

    constructor(smSelectorDataStatic: SMPSelectorDataStatic, smSelectorDataSave: SMPSelectorDataSave, smpManager: SMPManager) {
        this.smpSelectorDataStatic = smSelectorDataStatic
        this.smpSelectorDataSave = smSelectorDataSave
        this.smpManager = smpManager
        this.smpStateDataDynamicMap = new Map<string, SMPStateDataDynamic>()

        this.smpSelectorDataSave.savedActivateState ? this.activatedState = this.smpSelectorDataSave.savedActivateState : this.activatedState = this.smpSelectorDataStatic.defaultState
        this.smpSelectorDataStatic.states.forEach(staticData => {

            let saveData = smSelectorDataSave.states.find(saveState => {

              return  saveState.stateName == staticData.stateName
            })
            if (!saveData) {
                saveData = new SMPStateDataSave(staticData.stateName)
                this.smpSelectorDataSave.states.push(saveData)
            }

            this.smpStateDataDynamicMap.set(staticData.stateName, new SMPStateDataDynamic(staticData, saveData, this))

        })
        this.createSelectorContextMenuElement()

    }


    private createSelectorContextMenuElement() {
        let mainContextMenu = this.smpManager.masterObject.contextMenu

        this.contextMenuElementSelector = new ContextMenu( mainContextMenu.htmlElementController, ContextMenuTypes.insertedMenu)

        mainContextMenu.contextMenuElementInsert(this.contextMenuElementSelector, "Selector")

        this.smpStateDataDynamicMap.forEach(stateDynamic => {
            stateDynamic.stateContextMenu = new ContextMenu( mainContextMenu.htmlElementController, ContextMenuTypes.insertedMenu)

            this.contextMenuElementSelector.contextMenuElementInsert(stateDynamic.stateContextMenu, "States")

        })
    }


    public getParentSelector() {
        if (!this.smpSelectorDataStatic.parentSelectorAndStateName) return null
        return this.smpManager.smpSelectorDataDynamicMap.get(this.smpSelectorDataStatic.parentSelectorAndStateName.selectorName)
    }

    public getParentState() {

        return this.smpManager.smpSelectorDataDynamicMap.get(this.smpSelectorDataStatic.parentSelectorAndStateName.selectorName).smpStateDataDynamicMap.get(this.smpSelectorDataStatic.parentSelectorAndStateName.stateName)
    }


    private getState(stateName: string) {
        return this.smpStateDataDynamicMap.get(stateName)
    }

  async  activateSelector(activate: boolean) {
        if (this.selectorActive == activate) return
        this.selectorActive = activate
        this.smpSelectorDataSave.selectorActivated = activate
      //  this.smpManager.smpSavePart.saveValue()
        this.contextMenuElementSelector.elementVisible(activate)
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

    }

}
























