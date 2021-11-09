import {ContextMenu} from "./ContextMenu.js";

export abstract class ContextMenuElementBase {

    element: HTMLDivElement
    contextMenu: ContextMenu
    contextMenuElementId: string

    protected constructor() {
        this.contextMenuElementId = Math.random().toString()
        this.elementInit()
    }

    elementInit() {
        this.element = document.createElement("div")
        this.element.style.borderTop = "solid"
        this.element.style.borderWidth = "1px"
        this.element.style.borderColor = "#6c6c6c"
    }


}