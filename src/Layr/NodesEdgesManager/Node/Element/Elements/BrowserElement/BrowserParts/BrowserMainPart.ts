import {PartBaseElement_Field} from "../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../ElementObject.js";
import {MrkLibrary} from "../../../../../../../0Egyebek/MrkLibrary.js";
import {QuickMenuBarBase} from "../../../../../../../0Egyebek/QuickMenu/QuickMenuBarBase.js";
import {QuickMenuButtonBase} from "../../../../../../../0Egyebek/QuickMenu/QuickMenuButtonBase.js";


export class BrowserMainPart extends PartBaseElement_Field {

    static partName = "Main"
    iframe: HTMLIFrameElement = document.createElement("iframe")
    menuBar: QuickMenuBarBase = new QuickMenuBarBase()
    urlFieldInput: HTMLInputElement = document.createElement("input")

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
        this.loadData()
        setInterval(() => {
            this.iframe.contentWindow?.postMessage({h: 123123}, '*');
        }, 1000)
    }

    protected elementInit() {
        this.masterDivElementInit()
        this.topBarDivInit()
        this.refreshQuickButtonInit()
        this.backForwardButtonInit()
        this.urlTextAreaElementInit()
        this.iframeInit()
    }

    masterDivElementInit() {
        this.masterObject.element.style.display = "flex"
        this.masterObject.element.style.backgroundColor = "#230000"
        this.masterObject.element.style.height = "300px"
        this.masterObject.element.style.paddingBottom = "4px"
        this.masterObject.element.style.flexDirection = "column";
    }

    topBarDivInit() {
        this.menuBar.element.style.height = "30px"
        this.menuBar.element.style.flexDirection = "row"
        this.masterObject.element.appendChild(this.menuBar.element)
    }

    refreshQuickButtonInit() {
        let refreshButton = new QuickMenuButtonBase()
        refreshButton.addImage("0Resources/refresh.svg")
        this.menuBar.quickButtonInsert(refreshButton)
        refreshButton.element.addEventListener("click", ev => {
            this.iframe.contentWindow?.location.reload(true)
        })


    }

    backForwardButtonInit() {
        let backButton = new QuickMenuButtonBase()
        backButton.addImage("0Resources/arrow.svg")
        backButton.imageElement.style.transform="rotate(180deg)"
        this.menuBar.quickButtonInsert(backButton)
        backButton.element.addEventListener("click", ev => {

        })

        let forwardButton = new QuickMenuButtonBase()
        forwardButton.addImage("0Resources/arrow.svg")

        this.menuBar.quickButtonInsert(forwardButton)
        forwardButton.element.addEventListener("click", ev => {

        })
    }

    urlTextAreaElementInit() {
        this.urlFieldInput.style.flex = "1"
        this.urlFieldInput.style.backgroundColor = "#999999"
        /*  this.urlFieldInput.addEventListener("change",ev => {
              this.saveValue()
              this.iframe.src = this.urlFieldInput.value
          })*/
        this.urlFieldInput.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                this.saveValue()
                this.iframe.src = this.urlFieldInput.value
            }
        });
        this.menuBar.element.appendChild(this.urlFieldInput)
    }

    iframeInit() {
        this.iframe.style.transform = "75%"
        this.iframe.style.flex = "1"
        this.iframe.allowFullscreen = true
        // MrkLibrary.resizeElement(this.masterObject.element, 4, ResizeType.vertical, 21)
        this.masterObject.element.appendChild(this.iframe)
    }

    loadData() {
        if (MrkLibrary.emptyObjectCheck(this.getPartData().data)) return
        this.urlFieldInput.value = this.getPartData().data
        this.iframe.src = this.getPartData().data

    }


    saveValue() {

        this.saveValueDefault(this.urlFieldInput.value)
    }

    deactivate() {

    }
}
