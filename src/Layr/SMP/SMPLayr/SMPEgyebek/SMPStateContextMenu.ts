import {ContextMenu} from "../../../UIElemek/ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {SMPStateDataDynamic} from "../DataBlueprints/SMPSelectorDynamicData/SMPStateDataDynamic.js";
import {SMPSelectorDataDynamic} from "../DataBlueprints/SMPSelectorDynamicData/SMPSelectorDataDynamic.js";

export class SMPStateContextMenu {
    smpStateDataDynamic: SMPStateDataDynamic
    contextMenuStateButton: ContextMElementClickable
    stateContextMenu: ContextMenu
    contextMenuHead: ContextMenu
    contextMenuBody: ContextMenu

    constructor(smpStateDataDynamic: SMPStateDataDynamic, contextMenuHead: ContextMenu, contextMenuBody: ContextMenu) {
        this.contextMenuHead = contextMenuHead
        this.contextMenuBody = contextMenuBody
        this.smpStateDataDynamic = smpStateDataDynamic
        this.contextMenuStateButton = new ContextMElementClickable(this.smpStateDataDynamic.smStateDataStatic.stateName)
        this.contextMenuHead.contextMenuElementInsert(this.contextMenuStateButton)
        this.stateContextMenu = new ContextMenu()
        this.insertPartsContextMenus()
        if (this.smpStateDataDynamic.smpSelectorDataDynamic.activatedState != this.smpStateDataDynamic.smStateDataStatic.stateName) this.stateContextMenu.contextMenuInVisible()
        this.contextMenuBody.contextMenuElementInsert(this.stateContextMenu)
        this.clickEventInit()
        this.activeContextMenuHighLight()
        this.smpStateDataDynamic.smpSelectorDataDynamic.stateChangeRequestEvent.on(()=>{
            this.activeContextMenuHighLight()
        })
    }

    clickEventInit() {
        this.contextMenuStateButton.clickEvent.on(event => {
            this.smpStateDataDynamic.smpSelectorDataDynamic.smpManager.smpController.changeSelectorState({
                selectorName: this.smpStateDataDynamic.smpSelectorDataDynamic.smpSelectorDataStatic.selectorName,
                stateName: this.smpStateDataDynamic.smStateDataStatic.stateName
            }, true)
            //  this.contextMenuStatesActivatedVisible()
            this.stateContextMenu.elementVisible(true)
        })
    }

    insertPartsContextMenus() {
        let parts = this.smpStateDataDynamic.searchGetAllParts()
        parts.forEach(part => {
            if (part.partContextMenu) {
                this.stateContextMenu.contextMenuElementInsert(part.partContextMenu);
            }
        })
    }

    activeContextMenuHighLight(){
        if(this.smpStateDataDynamic.smpSelectorDataDynamic.activatedState==this.smpStateDataDynamic.smStateDataStatic.stateName){
            this.contextMenuStateButton.element.style.backgroundColor="green"
        }else{
            this.contextMenuStateButton.element.style.backgroundColor=""
        }
    }


}