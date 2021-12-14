import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {ContextMenu} from "../ContextMenu.js";
import {TypedEvent} from "../../../0Libraries/TypedEvents.js";

export class ContextMElementInputText extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    keyDownEvent: TypedEvent<string>


    constructor(elementName: string) {
        super();
        this.elementName = elementName
        this.keyDownEvent = new TypedEvent<string>()
        this.elementInitClickable()
    }

    elementInitClickable() {

        this.element = document.createElement("div")
        this.element.style.borderTop = "solid"
        this.element.style.borderWidth = "1px"
        this.element.style.borderColor = "#6c6c6c"
        this.element.className = "ContextMenuElementHoverHighlight"
        this.element.style.width = "100%"
        this.element.style.height = "fit-content"

        let textElement = document.createElement("i")
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "13px"
        textElement.innerText = this.elementName
        this.element.appendChild(textElement)

        let inputElement = document.createElement("input")
        inputElement.type = "text"
        // inputElement.style.userSelect = "none";
        // inputElement.style.cursor = "default"
        inputElement.style.margin = "2px"
        inputElement.style.width = "90%"
        inputElement.style.backgroundColor = "transparent"
        this.element.appendChild(inputElement)


        inputElement.addEventListener("change", (event) => {
            this.value = inputElement.value
            this.keyDownEvent.emit(this.value)
        })
    }
}