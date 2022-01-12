import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {ElementObject} from "../../../Element/ElementObject.js";

export class NodeFullScreenElementPart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase
    static partName = "NodeFullScreenElementPart"

    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
    }

    activate() {
        this.loadData()
        this.fullScreenButtonForElementInit()


    }

    fullScreenButtonForElementInit() {
        let self = this
        this.masterObject.elementsManager.elements.forEach(element => {
            self.insertButtonInElement(element)
        })
        this.masterObject.elementsManager.elementCreatedEvent.on(element => {
            self.insertButtonInElement(element)
        })
    }

    insertButtonInElement(element: ElementObject) {

        let contextMenuElementClickable = new ContextMElementClickable("FullScreen")
        element.contextMenu.contextMenuElementInsert(contextMenuElementClickable)
        contextMenuElementClickable.clickEvent.on(event => {
            this.insertElementFullscreen(element.fieldId)
            this.saveValue(element.fieldId)
        })
    }

    insertElementFullscreen(fieldId: string) {
        if (fieldId) {
            this.masterObject.elementsManager.elementToFullScreen(fieldId)
        }
    }

    deactivate() {

    }

    loadData() {


        this.insertElementFullscreen(this.getPartData().data)
    }


    saveValue(fieldId: string) {
        this.saveValueDefault(fieldId)
        this.valueSync()
    }

    partName: string;


}