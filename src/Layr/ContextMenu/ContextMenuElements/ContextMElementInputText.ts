import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {TypedEvent} from "../../../0Libraries/TypedEvents.js";
import {LayrCSSClassesEnum} from "../../../0Egyebek/LayrCSSClassesEnum.js";

export class ContextMElementInputText extends ContextMenuElementBase {

    keyDownEvent: TypedEvent<string>


    constructor(elementName: string) {
        super();
        this.elementName = elementName
        this.keyDownEvent = new TypedEvent<string>()
        this.elementInitClickable()
    }

    elementInitClickable() {

        this.element.classList.add(LayrCSSClassesEnum.ContextMenuElement)

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