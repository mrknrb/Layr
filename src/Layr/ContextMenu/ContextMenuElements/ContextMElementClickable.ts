import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {ContextMenu} from "../ContextMenu.js";
import {TypedEvent} from "../../../0Libraries/TypedEvents.js";

export class ContextMElementClickable extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    clickEvent: TypedEvent<ContextMElementClickable>

    constructor(elementName: string) {
        super();
        this.elementName = elementName
        this.elementInitClickable()
        this.clickEvent = new TypedEvent<ContextMElementClickable>()
    }

    elementInitClickable() {
        let self = this

        this.element = document.createElement("div")
        this.element.style.borderTop = "solid"
        this.element.style.borderWidth = "1px"
        this.element.style.borderColor = "#6c6c6c"
        this.element.className = "ContextMenuElementHoverHighlight"

        this.element.style.width = "100%"
        this.element.style.height = "fit-content"
        let textElement = document.createElement("b")
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "2px"

        textElement.innerText = this.elementName

        this.element.appendChild(textElement)
        this.element.addEventListener("click", (event) => {
            self.clickEvent.emit(this)
        })
    }


}