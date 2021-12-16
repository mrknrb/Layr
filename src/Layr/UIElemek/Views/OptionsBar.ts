import {LayrFrame} from "../../LayrFrame.js";
import {LayrUI} from "../LayrUI.js";
import {MrkLibrary, ResizeType} from "../../../0Egyebek/MrkLibrary.js";

export class OptionsBar {
    layrUI: LayrUI
    layrFrame: LayrFrame
    topMenuElement:HTMLElement
    optionsBarElement: HTMLElement
    optionsBarRootNodeContainerElement: HTMLElement

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.layrFrame = layrUI.layrFrame
        this.topMenuInit()

        this.optionsBarRootNodeContainerInit()
        this.optionsBarInit()
    }

    topMenuInit(){
        this.topMenuElement = document.createElement("div")
        this.topMenuElement.style.backgroundColor = "#101010"

        this.topMenuElement.style.height = "16ch"
        //this.optionsBarElement.style.position = "fixed"
        this.topMenuElement.style.top = "0"
        this.topMenuElement.style.zIndex = "9999"
        this.topMenuElement.style.left = "0"

        this.topMenuElement.style.display = "flex"
        this.topMenuElement.style.alignContent = "center"
        this.topMenuElement.style.flexDirection = "row"
        this.topMenuElement.style.justifyContent = "center"

        document.querySelector("body").appendChild(this.topMenuElement)
    }


    optionsBarRootNodeContainerInit() {
        this.optionsBarRootNodeContainerElement = document.createElement("div")
        this.optionsBarRootNodeContainerElement.id="optionsBarRootNodeContainer"
        this.optionsBarRootNodeContainerElement.style.backgroundColor = "#848484"
       // this.optionsBarRootNodeContainerElement.style.overflowY="scroll"
        this.optionsBarRootNodeContainerElement.style.overflowX="hidden"
        this.optionsBarRootNodeContainerElement.style.height = "100%"
        this.optionsBarRootNodeContainerElement.style.width = "50ch"
        this.optionsBarRootNodeContainerElement.style.borderRight = "solid 10px rgb(213,213,213)"
        MrkLibrary.resizeElement(this.optionsBarRootNodeContainerElement, 4, ResizeType.horizontal)
        this.topMenuElement.appendChild(this.optionsBarRootNodeContainerElement)
    }

    optionsBarInit() {
        this.optionsBarElement = document.createElement("div")
        this.optionsBarElement.style.backgroundColor = "#101010"

        this.optionsBarElement.style.height = "100%"
        //this.optionsBarElement.style.position = "fixed"
        this.optionsBarElement.style.top = "0"
        this.optionsBarElement.style.zIndex = "9999"
        this.optionsBarElement.style.left = "0"
        this.optionsBarElement.style.flexGrow="1"
        this.optionsBarElement.style.display = "flex"
        this.optionsBarElement.style.alignContent = "center"
        this.optionsBarElement.style.flexDirection = "column"
        this.optionsBarElement.style.justifyContent = "center"

        this.topMenuElement.appendChild(this.optionsBarElement)
    }


}