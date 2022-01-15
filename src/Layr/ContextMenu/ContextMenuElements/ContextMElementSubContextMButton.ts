import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {LayrCSSClassesEnum} from "../../../0Egyebek/LayrCSSClassesEnum.js";

export class ContextMElementSubContextMButton extends ContextMenuElementBase {


    constructor(elementName: string) {
        super();
        this.elementName = elementName
        this.elementInitSubContextMenu()
    }

    arrowRight: HTMLElement = document.createElement("b")
    textElement: HTMLElement = document.createElement("b")
    elementInitSubContextMenu() {
        this.element.classList.add(LayrCSSClassesEnum.ContextMenuElementHoverHighlight)
        this.element.classList.add(LayrCSSClassesEnum.ContextMenuElement)


        // textElement.style.fontSize = "1ch"
       this. textElement.style.userSelect = "none";
        this. textElement.style.cursor = "default"
        this. textElement.style.margin = "2px"
        this. textElement.innerText = this.elementName
        this.element.appendChild(  this.textElement)

        this.arrowRight.style.userSelect = "none";
        this.arrowRight.style.cursor = "default"
        this.arrowRight.style.marginRight = "3px"
        this.arrowRight.innerText = ">"
        this.arrowRight.style.position = "relative"
        this.arrowRight.style.float = "right"
        this.element.appendChild(this.arrowRight)
    }
}