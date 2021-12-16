import {LayrUI} from "../LayrUI.js";

export class MenuBar {
    layrUI: LayrUI
    menuBarElement: HTMLDivElement

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.menuBarInit()
    }

    menuBarInit() {
        this.menuBarElement = document.createElement("div")
        this.menuBarElement.style.backgroundColor = "#5f5f5f"

        this.menuBarElement.style.height = "4ch"
        this.menuBarElement.style.display = "flex"
        this.menuBarElement.style.flexDirection = "row"
        this.menuBarElement.style.paddingLeft = "3ch"

        //kozepre helyezi oket
        //  this.menuBarElement.style.display = "inline-flex"
        //  this.menuBarElement.style.alignContent = "center"
        // this.menuBarElement.style.flexDirection = "row"
        //  this.menuBarElement.style.justifyContent = "center"
        this.layrUI.OptionsBar.optionsBarElement.appendChild(this.menuBarElement)
    }


}