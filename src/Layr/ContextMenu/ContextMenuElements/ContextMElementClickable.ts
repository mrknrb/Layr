import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
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

        this.element.classList.add("ContextMenuElement")
        this.element.classList.add("ContextMenuElementHoverHighlight")


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