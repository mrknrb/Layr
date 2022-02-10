import {SMPSelectorDataDynamic} from "../DataBlueprints/SMPSelectorDynamicData/SMPSelectorDataDynamic.js";
import {ContextMenu} from "../../../UIElemek/ContextMenu/ContextMenu.js";
import {ContextMElementSubContextMButton} from "../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementSubContextMButton.js";

export class SMPSelectorContextMenu {
    smpSelector: SMPSelectorDataDynamic
    contextMenuMain: ContextMenu

    buttonHead: ContextMElementSubContextMButton
    contextMenuHead: ContextMenu
    contextMenuBody: ContextMenu
    activeStateTextElement: HTMLElement = document.createElement("b")

    constructor(smpSelector: SMPSelectorDataDynamic) {
        this.smpSelector = smpSelector

        this.createMainDiv()
        this.createHead()
        this.createBody()
        this.createStatesMenu()
        if (!smpSelector.smpSelectorDataStatic.selectorNotDeactivatable) this.contextMenuButtonSelectorActivateInit()
    }


    createMainDiv() {

        this.contextMenuMain = new ContextMenu()

    }

    createHead() {
        this.buttonHead = new ContextMElementSubContextMButton(this.smpSelector.smpSelectorDataStatic.selectorName)
        if (this.smpSelector.smpSelectorDataStatic.selectorHeadInvisible === true) {
            this.buttonHead.element.style.display = "none"
        }
        this.buttonHead.element.style.backgroundColor = "red"
        this.contextMenuMain.contextMenuElementInsert(this.buttonHead)

        this.contextMenuHead = new ContextMenu()

        if (this.smpSelector.smpStateDataDynamicMap.size <= 1) {
            this.buttonHead.arrowRight.style.display = "none"
        } else {
            this.contextMenuHead.contextMenuHoverInit(this.buttonHead.element)
            this.activeStateHighlight()
            this.smpSelector.stateChangeRequestEvent.on(() => {
                this.activeStateHighlight()
            })
            this.buttonHead.element.appendChild(this.activeStateTextElement)
        }
    }

    activeStateHighlight() {
        this.activeStateTextElement.innerText = this.smpSelector.activatedState

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
        this.contextMenuBody.element.style.display = "none"
        this.contextMenuMain.contextMenuElementInsert(this.contextMenuBody)
    }

    insertContextMenu() {
        if (this.smpSelector.getParentSelector() == null) {
            this.smpSelector.smpManager.masterObject.contextMenu.contextMenuElementInsert(this.contextMenuMain)
            // this.contextMenuMain.insertContextMenu_IfInserted(this.smpSelector.smpManager.masterObject.contextMenu.contextMenuMainElement)
        } else {
            // this.smpSelector.getParentSelector().selectorContextMenu.contextMenuBody.contextMenuElementInsert(this.contextMenuMain)
            this.smpSelector.getParentState()?.smpStateContextMenu.stateContextMenu.contextMenuElementInsert(this.contextMenuMain)
            // this.contextMenuMain.insertContextMenu_IfInserted(this.smpSelector.getParentSelector().selectorContextMenu.contextMenuBody.contextMenuMainElement)
        }
    }

    selectorContextMenuActivate(activate: boolean) {
        if (activate) {
            this.buttonHead.element.style.backgroundColor = "green"

            this.contextMenuBody.element.style.display = "block"
        } else {
            this.contextMenuBody.element.style.display = "none"
            this.buttonHead.element.style.backgroundColor = "red"

        }

        this.smpSelector.smpSelectorDataStatic.selectorNotDeactivatable ? this.buttonHead.element.style.backgroundColor = "" : null

    }

    contextMenuButtonSelectorActivateInit() {
        this.buttonHead.element.addEventListener("click", ev => {
            // this.smpSelector.activateSelector(!this.smpSelector.selectorActive, true)
            this.smpSelector.smpManager.smpController.activateSelectorAndChildren(this.smpSelector.smpSelectorDataStatic.selectorName, !this.smpSelector.selectorActive, true)
        })

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