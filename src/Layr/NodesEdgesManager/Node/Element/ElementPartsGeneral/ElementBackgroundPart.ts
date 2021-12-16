import {ElementBaseClass} from "../ElementBaseClass.js";
import {PartBaseElement_Field} from "../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ContextMenu} from "../../../../ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";

export class ElementBackgroundPart extends PartBaseElement_Field {


    protected masterObject: ElementBaseClass
    static partName = "ElementBackgroundPart"

    constructor(masterObject: ElementBaseClass) {
        super(masterObject);
        this.contextMenuInit()
    }

    activate() {


        this.loadData()


    }

    contextMenuInit() {

        this.partContextMenu = new ContextMenu()
        let contextMElementClickable = new ContextMElementClickable("Background color")
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
            this.setBackgroundColor(colorpicker.value)
        })
        colorpicker.addEventListener("change", ev => {
            this.saveValue()
        })

        this.partContextMenu.contextMenuElementInsert(contextMElementClickable)

    }

    loadData() {
        if (this.getPartData().data) {
            this.setBackgroundColor(this.getPartData().data)
        }

    }

    setBackgroundColor(color) {
        this.masterObject.element.style.backgroundColor=color
    }

    saveValue() {
        this.saveValueDefault(this.masterObject.element.style.backgroundColor)
        this.valueSync()
    }

    deactivate() {
        this.setBackgroundColor("white")
    }
}
