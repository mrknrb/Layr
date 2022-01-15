import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";
import {ContextMenu} from "../../../../../../../ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";

export class TextAreaTextColorPart extends PartBaseElement_Field {


    protected masterObject: ElementObject
    static partName = "TextAreaTextColorPart"

    constructor(masterObject: ElementObject) {
        super(masterObject);
        this.contextMenuInit()
    }

    activate() {
        this.loadData()
    }

    contextMenuInit() {

        this.partContextMenu = new ContextMenu()
        let contextMElementClickable = new ContextMElementClickable("Text color")
        let colorpicker = document.createElement("input")
        colorpicker.type = "color"
        colorpicker.style.width = "5px"
        colorpicker.style.height = "5px"
        colorpicker.style.visibility = "hidden"
        contextMElementClickable.element.appendChild(colorpicker)
        contextMElementClickable.clickEvent.on(event => {

            colorpicker.click()

        })
        colorpicker.addEventListener("input", ev => {
            this.setTextColor(colorpicker.value)
        })
        colorpicker.addEventListener("change", ev => {
            this.saveValue()
        })

        this.partContextMenu.contextMenuElementInsert(contextMElementClickable)

    }

    loadData() {
        if (this.getPartData().data) {
            this.setTextColor(this.getPartData().data)
        }
    }

    setTextColor(color:string) {
        this.masterObject.element.style.color=color
    }

    saveValue() {
        this.saveValueDefault(this.masterObject.element.style.color)
        this.valueSync()
    }

    deactivate() {
        this.setTextColor("white")
    }
}
