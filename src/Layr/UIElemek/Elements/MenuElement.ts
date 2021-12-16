import {OptionElement} from "./OptionElement.js";

export class MenuElement {
    optionElement: OptionElement
    menuDivElement: HTMLDivElement
    menuTextElement: HTMLElement

    constructor(optionElement: OptionElement) {
        this.optionElement = optionElement
        this.menuElementButtonInit()

    }

    menuElementButtonInit() {
        this.menuDivElement = document.createElement("div")
        this.menuDivElement.classList.add("MenuElementDiv")


        this.menuTextElement = document.createElement("b")
        this.menuTextElement.classList.add("MenuElementText")
        this.menuTextElement.innerText = this.optionElement.optionsElementData.optionName
        this.menuDivElement.appendChild(this.menuTextElement)
        this.optionElement.layrUI.menuBar.menuBarElement.appendChild(this.menuDivElement)
        this.menuDivElement.addEventListener("click", ev => {

            this.optionElement.optionActivateEvent.emit(this.optionElement.optionsElementData.optionName)

        })


    }

    MenuElementActivateColor(activate: boolean) {
        if (activate) {

            this.menuDivElement.animate([
                {backgroundColor : ""},
                {backgroundColor :"#313131"}
            ], {
                duration: 100,
            }).onfinish = () => {
                this.menuDivElement.style.backgroundColor = "#313131"
            }

        } else {


            this.menuDivElement.style.backgroundColor = ""
        }
    }


}