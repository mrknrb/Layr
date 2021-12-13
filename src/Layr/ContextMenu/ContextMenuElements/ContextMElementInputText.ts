import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {ContextMenu} from "../ContextMenu.js";
import {TypedEvent} from "../../../0Libraries/TypedEvents.js";

export class ContextMElementInputText extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    keyDownEvent: TypedEvent<string>


    constructor(elementName: string, contextMenu: ContextMenu) {
        super(elementName, contextMenu);
        this.keyDownEvent = new TypedEvent<string>()
        this.elementInitClickable()
    }

    elementInitClickable() {

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