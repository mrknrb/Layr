import {LayrUI} from "../LayrUI.js";

export class ToolBar {
    layrUI: LayrUI
    toolBarElement: HTMLDivElement= document.createElement("div")

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.toolBarInit()
    }

    toolBarInit() {
        this.toolBarElement.style.backgroundColor = "#7d7d7d"
        this.toolBarElement.style.flexGrow = "1"
        //kozepre helyezi oket

        //  this.menuBarElement.style.display = "inline-flex"
        //  this.menuBarElement.style.alignContent = "center"
        // this.menuBarElement.style.flexDirection = "row"
        //  this.menuBarElement.style.justifyContent = "center"
        //yx hack
        this.toolBarElement.style.height = "12ch"

        this.layrUI.OptionsBar.optionsBarElement.appendChild(this.toolBarElement)
    }

}