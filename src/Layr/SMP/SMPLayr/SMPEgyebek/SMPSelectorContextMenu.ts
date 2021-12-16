import {SMPSelectorDataDynamic} from "../DataBlueprints/SMPSelectorDynamicData/SMPSelectorDataDynamic.js";
import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {ContextMElementSubContextMButton} from "../../../ContextMenu/ContextMenuElements/ContextMElementSubContextMButton.js";

export class SMPSelectorContextMenu {
    smpSelector: SMPSelectorDataDynamic
    contextMenuMain: ContextMenu

    buttonHead: ContextMElementSubContextMButton
    contextMenuHead: ContextMenu
    contextMenuBody: ContextMenu

    constructor(smpSelector: SMPSelectorDataDynamic) {
        this.smpSelector = smpSelector

        this.createMainDiv()
        this.createHead()
        this.createBody()
        this.createStatesMenu()

    }


    createMainDiv() {

        this.contextMenuMain = new ContextMenu()

    }

    createHead() {
        this.buttonHead = new ContextMElementSubContextMButton(this.smpSelector.smpSelectorDataStatic.selectorName)
        this.contextMenuMain.contextMenuElementInsert(this.buttonHead)

        this.contextMenuHead = new ContextMenu()
        this.contextMenuHead.contextMenuHoverInit(this.buttonHead.element)

    }

    createStatesMenu() {
        this.smpSelector.smpStateDataDynamicMap.forEach(state => {
            state.createContextMenu(this.contextMenuHead, this.contextMenuBody)

        })
        //  this.contextMenuStatesActivatedVisible()
    }

    contextMenuStatesButtonsAllInvisible() {
        this.smpSelector.smpStateDataDynamicMap.forEach(state => {
            state.smpStateContextMenu.stateContextMenu.contextMenuInVisible()
        })
    }

    contextMenuStatesActivatedVisible() {
        this.contextMenuStatesButtonsAllInvisible()
        let state = this.smpSelector.getActivatedState()
        state.stateContextMenu.contextMenuVisible()

    }


    createBody() {
        this.contextMenuBody = new ContextMenu()
        this.contextMenuMain.contextMenuElementInsert(this.contextMenuBody)
    }

    insertContextMenu() {
        if (this.smpSelector.getParentSelector() == null) {
            this.smpSelector.smpManager.masterObject.contextMenu.contextMenuElementInsert(this.contextMenuMain)
            // this.contextMenuMain.insertContextMenu_IfInserted(this.smpSelector.smpManager.masterObject.contextMenu.contextMenuMainElement)
        } else {
            this.smpSelector.getParentSelector().selectorContextMenu.contextMenuBody.contextMenuElementInsert(this.contextMenuMain)
            // this.contextMenuMain.insertContextMenu_IfInserted(this.smpSelector.getParentSelector().selectorContextMenu.contextMenuBody.contextMenuMainElement)
        }
    }

    /* yx regi, lehet kell
        private createSelectorContextMenuElement() {
            let mainContextMenu = this.smpManager.masterObject.contextMenu

            this.contextMenuElementSelector = new ContextMenu(mainContextMenu.htmlElementController, ContextMenuTypes.insertedMenu)

            mainContextMenu.contextMenuElementInsert(this.contextMenuElementSelector, "Selector")

            this.smpStateDataDynamicMap.forEach(stateDynamic => {
                stateDynamic.stateContextMenu = new ContextMenu(mainContextMenu.htmlElementController, ContextMenuTypes.insertedMenu)

                this.contextMenuElementSelector.contextMenuElementInsert(stateDynamic.stateContextMenu, "States")

            })
        }
    */

}