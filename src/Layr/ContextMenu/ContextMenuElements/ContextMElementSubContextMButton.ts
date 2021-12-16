import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {LayrCSSClassesEnum} from "../../../0Egyebek/LayrCSSClassesEnum.js";

export class ContextMElementSubContextMButton extends ContextMenuElementBase {

    element: HTMLDivElement

    constructor(elementName: string) {
        super();
        this.elementName = elementName
        this.elementInitSubContextMenu()
    }

    elementInitSubContextMenu() {

        this.element = document.createElement("div")

        this.element.classList.add(LayrCSSClassesEnum.ContextMenuElementHoverHighlight)
        this.element.classList.add(LayrCSSClassesEnum.ContextMenuElement)


        let textElement = document.createElement("b")
        // textElement.style.fontSize = "1ch"
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