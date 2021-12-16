import {LayrFrame} from "../../LayrFrame.js";
import {LayrUI} from "../LayrUI.js";

export class OptionsBar {
    layrUI: LayrUI
    layrFrame: LayrFrame
    elemek
    optionsBarElement

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.layrFrame = layrUI.layrFrame
        this.optionsBarInit()
        this.elemek = {}
        //options gomb
       // this._optionsGombInit()
        //new gomb
      //  this._newGombInit()
       // this._openRootGombInit()

        document.querySelector("body").appendChild(this.optionsBarElement)
    }

    optionsBarInit() {
        this.optionsBarElement = document.createElement("div")
        this.optionsBarElement.style.backgroundColor = "#101010"

        this.optionsBarElement.style.height = "16ch"
        //this.optionsBarElement.style.position = "fixed"
        this.optionsBarElement.style.top = "0"
        this.optionsBarElement.style.zIndex = "9999"
        this.optionsBarElement.style.left = "0"
        //kozepre helyezi oket
        this.optionsBarElement.style.display = "flex"
        this.optionsBarElement.style.alignContent = "center"
        this.optionsBarElement.style.flexDirection = "column"
        this.optionsBarElement.style.justifyContent = "center"
    }

    _optionsGombInit() {
        this.elemek.options = document.createElement("div")
        this.elemek.options.style.backgroundColor = "#5fc4d4"
        this.elemek.options.style.width = "6ch"
        this.elemek.options.style.height = "100%"
        this.optionsBarElement.appendChild(this.elemek.options)
    }

    _newGombInit() {
        this.elemek.new = document.createElement("div")
        // this.elemek.new.style.backgroundColor = "grey"
        this.elemek.new.style.width = "6ch"
        this.elemek.new.style.height = "100%"
        const plusicon = document.createElement("img")
        plusicon.src = "0Resources/add.svg"
        plusicon.style.height = "100%"
        plusicon.style.width = "100%"
        this.elemek.new.appendChild(plusicon)
        this.optionsBarElement.appendChild(this.elemek.new)
    }

    _openRootGombInit() {
        let self = this
        this.elemek.openRoot = {}
        this.elemek.openRoot.elemek = {}
        let elemek = this.elemek.openRoot.elemek
        elemek.mainDiv = document.createElement("div")
        // this.elemek.new.style.backgroundColor = "grey"


        elemek.mainDiv.style.width = "fit-content"
        elemek.mainDiv.style.height = "100%"

        elemek.openButton = document.createElement("div")
        elemek.openButton.style.backgroundColor = "#68864a"
        elemek.openButton.style.height = "100%"
        elemek.openButton.style.width = "6ch"
        elemek.openButton.style.float = "right"
        elemek.openButton.addEventListener("click", function () {
            console.log("open1")

            self.layrFrame.nodesEdgesManager.loadRootNode(elemek.openInput.value)
        })


        elemek.mainDiv.appendChild(elemek.openButton)

        elemek.openInput = document.createElement("input")
        elemek.openInput.style.backgroundColor = "#e5dec0"
        elemek.openInput.style.height = "100%"
        elemek.openInput.style.width = "50ch"
        elemek.mainDiv.appendChild(elemek.openInput)

        this.optionsBarElement.appendChild(elemek.mainDiv)


    }

}