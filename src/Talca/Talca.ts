export class Talca {
    conceptMap
    elemek
    talcaElement
    constructor(conceptMap) {
this.conceptMap=conceptMap
        this._talcaInit()
        this.elemek = {}
//options gomb
        this._optionsGombInit()
//new gomb
        this._newGombInit()
        this._openRootGombInit()

        document.querySelector("body").appendChild(this.talcaElement)
    }

    _talcaInit() {
        this.talcaElement = document.createElement("div")
        this.talcaElement.style.backgroundColor = "black"
        this.talcaElement.style.width = "100vw"
        this.talcaElement.style.height = "6ch"
        this.talcaElement.style.position = "fixed"
        this.talcaElement.style.bottom = "0"
        this.talcaElement.style.zIndex = "2147483647"
        this.talcaElement.style.left = "0"
//kozepre helyezi oket
        this.talcaElement.style.display = "inline-flex"
        this.talcaElement.style.alignContent = "center"
        this.talcaElement.style.flexDirection = "row"
        this.talcaElement.style.justifyContent = "center"
    }

    _optionsGombInit() {
        this.elemek.options = document.createElement("div")
        this.elemek.options.style.backgroundColor = "red"
        this.elemek.options.style.width = "6ch"
        this.elemek.options.style.height = "100%"
        this.talcaElement.appendChild(this.elemek.options)

    }

    _newGombInit() {
        this.elemek.new = document.createElement("div")
        // this.elemek.new.style.backgroundColor = "grey"
        this.elemek.new.style.width = "6ch"
        this.elemek.new.style.height = "100%"
        const plusicon = document.createElement("img")
        plusicon.src = "resources/add.svg"
        plusicon.style.fill = "red"
        plusicon.style.height = "100%"
        plusicon.style.width = "100%"
        this.elemek.new.appendChild(plusicon)
        this.talcaElement.appendChild(this.elemek.new)
    }

    _openRootGombInit() {
        let self=this
        this.elemek.openRoot = {}
        this.elemek.openRoot.elemek = {}
        let elemek = this.elemek.openRoot.elemek
        elemek.mainDiv = document.createElement("div")
        // this.elemek.new.style.backgroundColor = "grey"


        elemek.mainDiv.style.width = "fit-content"
        elemek.mainDiv.style.height = "100%"

        elemek.openButton = document.createElement("div")
        elemek.openButton.style.backgroundColor = "blue"
        elemek.openButton.style.height = "100%"
        elemek.openButton.style.width = "6ch"
        elemek.openButton.style.float = "right"
        elemek.openButton.addEventListener("click",function () {
            self.conceptMap.ujRootNodeDivBetoltes(elemek.openInput.value)
        })


        elemek.mainDiv.appendChild(elemek.openButton)

        elemek.openInput = document.createElement("input")
        elemek.openInput.style.backgroundColor = "yellow"
        elemek.openInput.style.height = "100%"
        elemek.openInput.style.width = "50ch"
        elemek.mainDiv.appendChild(elemek.openInput)

        this.talcaElement.appendChild(elemek.mainDiv)


    }

}