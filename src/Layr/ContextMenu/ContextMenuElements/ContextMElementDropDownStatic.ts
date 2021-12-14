import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {ContextMenu} from "../ContextMenu.js";
import {TypedEvent} from "../../../0Libraries/TypedEvents.js";
import {LayrCSSClassesEnum} from "../../../0Egyebek/LayrCSSClassesEnum.js";

export class ContextMElementDropDownStatic extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    changeEvent: TypedEvent<string>
    options: string[]

    constructor(elementName: string, optionsArray: string[]) {
        super();
        this.elementName = elementName
        this.changeEvent = new TypedEvent<string>()
        this.options = optionsArray
        this.elementInitClickable(optionsArray)
    }

    elementInitClickable(optionsArray: string[]) {

        this.element = document.createElement("div")
        this.element.classList.add(LayrCSSClassesEnum.ContextMenuElement)


        let textElement = document.createElement("i")
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "13px"
        textElement.innerText = this.elementName
        this.element.appendChild(textElement)
        this.optionsMenuInit(optionsArray)

    }

    optionsMenuInit(optionsArray: string[]) {
        let selectElement = document.createElement("select")
        selectElement.style.backgroundColor = "rgba(2,2,2,0.18)"
        selectElement.style.margin = "3px"
        selectElement.style.width = "95%"
        this.element.appendChild(selectElement)


        let ures = document.createElement("option")
        ures.value = ""
        ures.setAttribute("selected", "selected")
        selectElement.appendChild(ures)
        optionsArray.forEach((optionValue) => {
            let optionElement = document.createElement("option")
            optionElement.value = optionValue
            optionElement.innerText = optionValue
            selectElement.appendChild(optionElement)
        })
        selectElement.addEventListener("change", (event) => {
            this.value = selectElement.value
            this.changeEvent.emit(this.value)
        })
    }


}