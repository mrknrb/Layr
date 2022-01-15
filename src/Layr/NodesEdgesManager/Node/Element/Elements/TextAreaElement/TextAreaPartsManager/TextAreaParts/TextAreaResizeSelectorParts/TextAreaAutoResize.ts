import {TextAreaElement} from "../../../TextAreaElement.js";
import {PartBaseElement_Field} from "../../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {HTMLElementAutoResizer, ResizeTypes} from "../../../../../../../../../0Egyebek/HTMLElementAutoResizer.js";

export class TextAreaAutoResize extends PartBaseElement_Field {
    static partName = "TextAreaAutoResize"
    htmlElementResizer:HTMLElementAutoResizer
    constructor(textAreaElement: TextAreaElement) {
        super(textAreaElement);
        this.htmlElementResizer = new HTMLElementAutoResizer(this.masterObject.element,ResizeTypes.autoY)

    }


    protected activate() {
        this.htmlElementResizer.startObserving()
        this.masterObject.element.addEventListener("keyup", ()=>{
            this. htmlElementResizer. adjustSize()
        }
       )
    }

    protected deactivate() {
        this.htmlElementResizer.stopObserving()
        this.masterObject.element.removeEventListener("keyup", ()=>{
            this. htmlElementResizer. adjustSize()
        })
    }

    loadData(data?: any) {
    }

    saveValue(data?: any) {
    }


}