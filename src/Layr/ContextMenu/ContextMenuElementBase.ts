import {ContextMenu} from "./ContextMenu.js";

export abstract class ContextMenuElementBase {

    element: HTMLDivElement
    parentContextMenu: ContextMenu
    elementName: string
    contextMenuElementId: string
    value: string

    protected constructor() {

        this.contextMenuElementId = Math.random().toString()

    }


    elementVisible(visible: boolean) {
        visible ? this.element.style.display = "" : this.element.style.display = "none"


    }


}