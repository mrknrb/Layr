import {LayrFrame} from "../../LayrFrame.js";
import {LayrUI} from "../LayrUI.js";
import {MrkLibrary, ResizeType} from "../../../0Egyebek/MrkLibrary.js";

export class OptionsBar {
    layrUI: LayrUI
    layrFrame: LayrFrame
    topMenuElement: HTMLElement = document.createElement("div")
    optionsBarElement: HTMLElement = document.createElement("div")
    optionsBarRootNodeContainerElement: HTMLElement = document.createElement("div")

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.layrFrame = layrUI.layrFrame
        this.topMenuInit()

        this.optionsBarRootNodeContainerInit()
        this.optionsBarInit()
    }

    topMenuInit() {

        let borderAndBackGroundColor = "#323232"

        this.topMenuElement.style.backgroundColor = borderAndBackGroundColor

        this.topMenuElement.style.height = "16ch"
        //this.optionsBarElement.style.position = "fixed"
        // this.topMenuElement.style.top = "0"
        // this.topMenuElement.style.zIndex = "9999"
        // this.topMenuElement.style.left = "0"
        this.topMenuElement.style.borderBottom = `solid 3px ${borderAndBackGroundColor}`
        this.topMenuElement.style.display = "flex"
        this.topMenuElement.style.alignContent = "center"
        this.topMenuElement.style.flexDirection = "row"
        this.topMenuElement.style.justifyContent = "center"

        document.querySelector("body")?.appendChild(this.topMenuElement)
    }


    optionsBarRootNodeContainerInit() {

        this.optionsBarRootNodeContainerElement.id = "optionsBarRootNodeContainer"
        this.optionsBarRootNodeContainerElement.style.backgroundColor = "#323232"
        // this.optionsBarRootNodeContainerElement.style.overflowY="scroll"
        this.optionsBarRootNodeContainerElement.style.overflowX = "hidden"
        this.optionsBarRootNodeContainerElement.style.height = "100%"
        this.optionsBarRootNodeContainerElement.style.width = "50ch"
        this.optionsBarRootNodeContainerElement.style.borderRight = "solid 3px #323232"
        MrkLibrary.resizeElement(this.optionsBarRootNodeContainerElement, 4, ResizeType.horizontal)
        this.topMenuElement.appendChild(this.optionsBarRootNodeContainerElement)
    }

    optionsBarInit() {
        this.optionsBarElement.style.backgroundColor = "#101010"
        this.optionsBarElement.style.height = "100%"
        //this.optionsBarElement.style.position = "fixed"
        this.optionsBarElement.style.top = "0"
        this.optionsBarElement.style.zIndex = "9999"
        this.optionsBarElement.style.left = "0"
        this.optionsBarElement.style.flexGrow = "1"
        this.optionsBarElement.style.display = "flex"
        this.optionsBarElement.style.alignContent = "center"
        this.optionsBarElement.style.flexDirection = "column"
        this.optionsBarElement.style.justifyContent = "center"
        this.topMenuElement.appendChild(this.optionsBarElement)
    }


}