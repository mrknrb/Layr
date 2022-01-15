import {PartBaseElement_Field} from "../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {ElementObject} from "../ElementObject.js";
import {MrkLibrary, ResizeType} from "../../../../../0Egyebek/MrkLibrary.js";

export class ElementManualResizePart extends PartBaseElement_Field {
    static partName = "ElementManualResizePart"
    resizeEvent: TypedEvent<unknown>

    constructor(textAreaElement: ElementObject) {
        super(textAreaElement);
    }

    protected activate() {

        this.loadData()
        this.resizeEvent = MrkLibrary.resizeElement(this.masterObject.element, 4, ResizeType.vertical, 21)
        this.resizeEvent.on(() => {

                this.saveValue()
            }
        )

    }

    protected deactivate() {
        this.resizeEvent=new TypedEvent<unknown>()

    }

    loadData() {
        if (MrkLibrary.emptyObjectCheck(this.getPartData().data)) return
        this.masterObject.element.style.height = this.getPartData().data

    }

    saveValue() {
        this.saveValueDefault(this.masterObject.element.style.height)
    }

}