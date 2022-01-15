import {PartBaseElement_Field} from "../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../ElementObject.js";
import {MrkLibrary, ResizeType} from "../../../../../../../0Egyebek/MrkLibrary.js";


export class BrowserMainPart extends PartBaseElement_Field {

    static partName = "Main"
    iframe: HTMLIFrameElement = document.createElement("iframe")
    topBarDiv: HTMLDivElement = document.createElement("div")
    urlFieldInput: HTMLInputElement = document.createElement("input")

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
        this.urlTextAreaElementInit()
        this.iframeInit()
    }

    masterDivElementInit() {
        this.masterObject.element.style.display = "flex"
        this.masterObject.element.style.backgroundColor="#230000"
        this.masterObject.element.style.height = "300px"
        this.masterObject.element.style.paddingBottom="4px"
        this.masterObject.element.style.flexDirection = "column";
    }

    topBarDivInit() {
        this.topBarDiv.style.height = "30px"

        this.topBarDiv.style.display = "flex"
        this.masterObject.element.appendChild(this.topBarDiv)


    }

    urlTextAreaElementInit() {
        this.urlFieldInput.style.flex = "1"
        this.urlFieldInput.style.backgroundColor="#999999"
        this.urlFieldInput.addEventListener("change",ev => {
            this.saveValue()
            this.iframe.src = this.urlFieldInput.value
        })
        this.topBarDiv.appendChild(this.urlFieldInput)
    }

    iframeInit() {
        this.iframe.style.transform="75%"
        this.iframe.style.flex = "1"
        this.iframe.allowFullscreen=true
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
