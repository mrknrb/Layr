import {LayrUI} from "../LayrUI.js";

export class TopBar {
    layrUI: LayrUI
    topBarElement: HTMLDivElement

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.menuBarInit()
    }

    menuBarInit() {
        this.topBarElement = document.createElement("div")
        this.topBarElement.style.backgroundColor = "#5f5f5f"

        this.topBarElement.style.height = "4ch"
        this.topBarElement.style.display = "flex"
        this.topBarElement.style.flexDirection = "row"
        this.topBarElement.style.paddingLeft = "3ch"

        //kozepre helyezi oket
        //  this.menuBarElement.style.display = "inline-flex"
        //  this.menuBarElement.style.alignContent = "center"
        // this.menuBarElement.style.flexDirection = "row"
        //  this.menuBarElement.style.justifyContent = "center"
        this.layrUI.OptionsBar.optionsBarElement.appendChild(this.topBarElement)
    }


}