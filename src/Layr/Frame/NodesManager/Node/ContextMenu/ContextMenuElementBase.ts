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


    }


}