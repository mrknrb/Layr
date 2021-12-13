import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {ContextMenu} from "../ContextMenu.js";

export class ContextMElementSubContextMButton extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement

    constructor(elementName: string, contextMenu: ContextMenu) {
        super(elementName, contextMenu);
        this.elementInitSubContextMenu()
    }

    elementInitSubContextMenu() {

        this.element.style.width = "100%"
        this.element.style.height = "fit-content"
        let textElement = document.createElement("b")
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "2px"
        textElement.innerText = this.elementName
        this.element.appendChild(textElement)

        let arrowRight = document.createElement("b")
        arrowRight.style.userSelect = "none";
        arrowRight.style.cursor = "default"
        arrowRight.style.marginRight = "3px"
        arrowRight.innerText = "?"
        arrowRight.style.position = "relative"
        arrowRight.style.float = "right"
        this.element.appendChild(arrowRight)
    }
}