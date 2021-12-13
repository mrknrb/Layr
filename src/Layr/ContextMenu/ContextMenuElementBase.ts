import {ContextMenu} from "./ContextMenu.js";

export abstract class ContextMenuElementBase {

    element: HTMLDivElement
    parentContextMenu: ContextMenu
    elementName: string
    contextMenuElementId: string
    value: string

    protected constructor(elementName: string, parentContextMenu?: ContextMenu) {

        this.parentContextMenu = parentContextMenu
        this.elementName = elementName
        this.contextMenuElementId = Math.random().toString()
        this.elementInit()
    }

    elementInit() {
        this.element = document.createElement("div")
        this.element.style.borderTop = "solid"
        this.element.style.borderWidth = "1px"
        this.element.style.borderColor = "#6c6c6c"
        this.element.className = "ContextMenuElementHoverHighlight"
    }

    elementVisible(visible: boolean) {
        visible ? this.element.style.display = "" : this.element.style.display = "none"


    }


}