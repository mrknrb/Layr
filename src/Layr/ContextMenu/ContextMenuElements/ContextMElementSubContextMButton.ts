import {ContextMenuElementBase} from "../ContextMenuElementBase.js";

export class ContextMElementSubContextMButton extends ContextMenuElementBase {

    element: HTMLDivElement

    constructor(elementName: string) {
        super();
        this.elementName = elementName
        this.elementInitSubContextMenu()
    }

    elementInitSubContextMenu() {

        this.element = document.createElement("div")
        this.element.style.borderTop = "solid"
        this.element.style.borderWidth = "1px"
        this.element.style.borderColor = "#6c6c6c"
        this.element.className = "ContextMenuElementHoverHighlight"

        this.element.style.width = "100%"
        this.element.style.height = "fit-content"
        let textElement = document.createElement("b")
        textElement.style.fontSize="1ch"
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "2px"
        textElement.innerText = this.elementName
        this.element.appendChild(textElement)

        let arrowRight = document.createElement("b")
        arrowRight.style.userSelect = "none";
        arrowRight.style.cursor = "default"
        arrowRight.style.marginRight = "3px"
        arrowRight.innerText = ">"
        arrowRight.style.position = "relative"
        arrowRight.style.float = "right"
        this.element.appendChild(arrowRight)
    }
}