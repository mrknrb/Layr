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

        this.menuBarElement.style.flex = "1 1"
        this.menuBarElement.style.display = "flex"
        this.menuBarElement.style.flexDirection = "row"

        this.layrUI.topBar.topBarElement.appendChild(this.menuBarElement)
    }


}