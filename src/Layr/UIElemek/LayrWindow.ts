import {MrkLibrary, ResizeType} from "../../0Egyebek/MrkLibrary.js";
import {TypedEvent} from "../../0Libraries/TypedEvents.js";
import {QuickMenuBarBase} from "./QuickMenu/QuickMenuBarBase.js";
import {QuickMenuText} from "./QuickMenu/QuickMenuText.js";

export class LayrWindow {
    mainDiv: HTMLDivElement = document.createElement("div")
    headDiv: HTMLDivElement = document.createElement("div")
    headLeft: QuickMenuBarBase = new QuickMenuBarBase()
    headRight: QuickMenuBarBase = new QuickMenuBarBase()

    bodyDiv: HTMLDivElement = document.createElement("div")
    closeButton: HTMLImageElement = document.createElement("img")

    closeEvent: TypedEvent<any> = new TypedEvent<any>()
    autoClosing: boolean
    nameQuickMenuText=new QuickMenuText()

    constructor(autoClosing: boolean = true) {
        this.autoClosing = autoClosing
        this.mainDivInit()
        this.headInit()
        this.bodyInit()
        this.closeButtonInit()
    }

    private mainDivInit() {
        document.body.appendChild(this.mainDiv)
        this.mainDiv.style.position = "absolute"
        this.mainDiv.style.backgroundColor = "grey"
        this.mainDiv.style.top = "150px"
        this.mainDiv.style.left = "150px"
        this.mainDiv.style.display = "none"
        this.mainDiv.style.height = "600px"
        this.mainDiv.style.width = "600px"
        this.mainDiv.style.flexDirection = "column"
        this.mainDiv.style.zIndex = "100000"
        this.mainDiv.style.border = "solid"
        this.mainDiv.style.borderWidth = "3px"
        this.mainDiv.style.boxShadow = "0px 0px 13px 6px #0000006b"
    }

    private headInit() {
        this.mainDiv.appendChild(this.headDiv)
        this.headDiv.style.height = "25px"
        this.headDiv.style.backgroundColor = "#616161"
        this.headDiv.style.width = "100%"
        this.headDiv.style.flexDirection = "row"
        this.headDiv.style.display = "flex"
        MrkLibrary.dragElement(this.headDiv, this.mainDiv)
        MrkLibrary.resizeElement(this.mainDiv, 7, ResizeType.both)
        this.headLeft.element.style.height="100%"
        this.headLeft.element.style.flex="1 1"
        this.headDiv.appendChild(this.headLeft.element)
        this.headRight.element.style.flex="1 1"
        this.headRight.element.style.height="100%"
        this.headRight.element.style.flexDirection="row-reverse"
        this.headRight.element.style.paddingRight="0px"

        this.headDiv.appendChild(this.headRight.element)
        this.headLeft.quickMenuElementInsert(this.nameQuickMenuText)
    }

    private bodyInit() {
        this.mainDiv.appendChild(this.bodyDiv)
        this.bodyDiv.style.flex = "1"
    }

    private closeButtonInit() {
        this.headRight.element.appendChild(this.closeButton)
        this.closeButton.style.width = "25px"
        this.closeButton.style.height = "25px"
        this.closeButton.style.backgroundColor = "#a82a2a"


        this.closeButton.addEventListener("click", () => {
            this.closeEvent.emit(true)
            if (this.autoClosing) this.closeOpenWindow(false)
        })
    }

    closeOpenWindow(open: boolean) {
        if (open) {
            this.mainDiv.style.display = "flex"
        } else {
            this.mainDiv.style.display = "none"
        }
    }

    setName(name: string) {
        this.nameQuickMenuText.setText(name)

    }


}