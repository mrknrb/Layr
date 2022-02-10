import {PartBaseElement_Field} from "../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../ElementObject.js";
import {MrkLibrary} from "../../../../../../../0Egyebek/MrkLibrary.js";
import {QuickMenuBarBase} from "../../../../../../UIElemek/QuickMenu/QuickMenuBarBase.js";
import {QuickMenuButtonBase} from "../../../../../../UIElemek/QuickMenu/QuickMenuButtonBase.js";
import {TypedEvent} from "../../../../../../../0Libraries/TypedEvents.js";
import {MessageLayr, MessageType} from "../../../../../../../0Egyebek/MessageLayrCommon/MessageLayr.js";
import {MessageManager} from "../../../../../../../0Egyebek/MessageLayrCommon/MessageManager.js";


export class BrowserMainPart extends PartBaseElement_Field {

    static partName = "Main"
    iframe!: HTMLIFrameElement
    menuBar: QuickMenuBarBase = new QuickMenuBarBase()
    urlFieldInput: HTMLInputElement = document.createElement("input")
    iframePlaceHolder: HTMLDivElement = document.createElement("div")

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
        this.loadData()
    }

    protected elementInit() {
        this.masterDivElementInit()
        this.topBarDivInit()
        this.turnOnOffQuickButtonInit()
        this.refreshQuickButtonInit()
        this.backForwardButtonInit()
        this.urlTextAreaElementInit()
        this.iframePlaceHolderInit()
    }

    masterDivElementInit() {
        this.masterObject.element.style.display = "flex"
        this.masterObject.element.style.backgroundColor = "#ffffff"
        this.masterObject.element.style.height = "300px"
        this.masterObject.element.style.paddingBottom = "4px"
        this.masterObject.element.style.flexDirection = "column";
    }

    topBarDivInit() {
        this.menuBar.element.style.height = "30px"
        this.masterObject.element.appendChild(this.menuBar.element)
    }

    refreshQuickButtonInit() {
        let refreshButton = new QuickMenuButtonBase()
        refreshButton.addImage("0Resources/refresh.svg")
        this.menuBar.quickMenuElementInsert(refreshButton)
        refreshButton.element.addEventListener("click", ev => {
            // this.iframe.contentWindow?.location.reload(true)
            //     console.log("mess sent");
            // this.iframe.contentWindow?.postMessage({h: 123123}, '*');
            if (!this.iframe.contentWindow) return
            let messageManager = new MessageManager(this.iframe.contentWindow,MessageType.ToContent_Refresh)
            messageManager.sendMassage("")
        })
    }


    powerButton: QuickMenuButtonBase = new QuickMenuButtonBase()

    turnOnOffQuickButtonInit() {
        this.powerButton.addImage("0Resources/power.svg")
        this.menuBar.quickMenuElementInsert(this.powerButton)
        this.powerButton.element.addEventListener("click", ev => {
            if (!this.browserOn) {
                this.browserActivate(true)
            } else {
                this.browserActivate(false)
            }
        })
    }

    backForwardButtonInit() {
        let backButton = new QuickMenuButtonBase()
        backButton.addImage("0Resources/arrow.svg")
        backButton.imageElement.style.transform = "rotate(180deg)"
        this.menuBar.quickMenuElementInsert(backButton)
        backButton.element.addEventListener("click", ev => {
            if (!this.iframe.contentWindow) return

            let messageManager = new MessageManager(this.iframe.contentWindow,MessageType.ToContent_Back)
            messageManager.sendMassage("")
        })

        let forwardButton = new QuickMenuButtonBase()
        forwardButton.addImage("0Resources/arrow.svg")

        this.menuBar.quickMenuElementInsert(forwardButton)
        forwardButton.element.addEventListener("click", ev => {
            if (!this.iframe.contentWindow) return



            let messageManager = new MessageManager(this.iframe.contentWindow,MessageType.ToContent_Forward)
            messageManager.sendMassage("")
        })
    }

    loadUrl(url: string) {
        if (MrkLibrary.isValidHttpUrl(url)) {
            this.browserActivate(true)
            this.iframe.src = this.urlFieldInput.value
            this.saveValue()
        } else {
            this.browserActivate(true)
            let searchurl = "https://www.google.com/search?&q=" + url
            this.iframe.src = searchurl
            this.urlFieldInput.value = searchurl
            this.saveValue()
        }
    }

    urlTextAreaElementInit() {
        this.urlFieldInput.style.flex = "1"
        this.urlFieldInput.style.backgroundColor = "#999999"

        this.urlFieldInput.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                this.loadUrl(this.urlFieldInput.value)
            }
        });
        this.urlFieldInput.addEventListener("click", (event) => {
            this.urlFieldInput.select()
        });
        this.menuBar.element.appendChild(this.urlFieldInput)
    }
    urlTextAreaElementUrlChangeRefreshInit() {

        if (!this.iframe.contentWindow) return

        let messageManager = new MessageManager(this.iframe.contentWindow,MessageType.ToFrame_UrlChanged)
        messageManager.messageReceiverInit((message) => {
            this.urlFieldInput.value=message.data.toString()
        })
    }
    iframeCreate() {
        this.iframe = document.createElement("iframe")
        this.iframe.style.transform = "75%"
        this.iframe.style.flex = "1"
        this.iframe.style.backgroundColor = "white"
        this.iframe.allowFullscreen = true
        this.iframe.src = this.urlFieldInput.value
        // MrkLibrary.resizeElement(this.masterObject.element, 4, ResizeType.vertical, 21)
        this.urlTextAreaElementUrlChangeRefreshInit()
        this.masterObject.element.appendChild(this.iframe)
        this.iframe.addEventListener("click", (event) => {
            if (!this.browserOn) {
                this.saveValue()
                this.iframe.src = this.urlFieldInput.value
                this.browserOn = true
                this.powerButton.activate(true)
            }
        });


    }

    iframePlaceHolderInit() {

        this.iframePlaceHolder.style.transform = "75%"
        this.iframePlaceHolder.style.flex = "1"

        this.iframePlaceHolder.style.backgroundColor = "grey"
        this.iframePlaceHolder.style.display = "flex"
        this.iframePlaceHolder.style.alignItems = "center"
        this.iframePlaceHolder.style.justifyContent = "center"


        let image = document.createElement("img")
        image.src = "0Resources/power.svg"
        image.style.height = "200px"
        image.style.width = "200px"

        this.iframePlaceHolder.appendChild(image)


        // MrkLibrary.resizeElement(this.masterObject.element, 4, ResizeType.vertical, 21)
        this.masterObject.element.appendChild(this.iframePlaceHolder)
        this.iframePlaceHolder.addEventListener("click", (event) => {
            if (!this.browserOn) {
                this.browserActivate(true)
            }
        });

    }

    browserOn: boolean = false
    browserActivateEvent: TypedEvent<boolean> = new TypedEvent<boolean>()

    browserActivate(activate: boolean) {
        if (activate && !this.browserOn) {

            this.browserOn = true
            this.iframePlaceHolder.style.display = "none"
            this.iframeCreate()
            this.powerButton.activate(true)
            this.browserActivateEvent.emit(true)
        }
        console.log(activate)
        console.log(this.browserOn)
        if (!activate && this.browserOn) {
            console.log("eddig ok")
            this.browserOn = false
            this.iframePlaceHolder.style.display = "flex"
            this.iframe.remove()

            this.powerButton.activate(false)
            this.browserActivateEvent.emit(false)
        }


    }

    loadData() {
        if (MrkLibrary.emptyObjectCheck(this.getPartData().data)) return
        this.urlFieldInput.value = this.getPartData().data
        // this.iframe.src = this.getPartData().data

    }


    saveValue() {

        this.saveValueDefault(this.urlFieldInput.value)
    }

    deactivate() {

    }
}
