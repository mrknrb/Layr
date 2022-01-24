import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {PartNodeCommon} from "../../../../../SMP/PartsGeneral/PartNodeCommon.js";
import {MrkLibrary} from "../../../../../../0Egyebek/MrkLibrary.js";

export class NodeFullScreenElementPart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase
    static partName = "NodeFullScreenElementPart"

    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
    }

    activate() {
        let fieldId = MrkLibrary.getFieldIdByUrl()
        if (fieldId!=undefined) {
            this.insertElementFullscreen(fieldId)
        }
        this.fullScreenButtonForElementInit()


    }

    fullScreenButtonForElementInit() {
        PartNodeCommon.contextMElementToAllChildElement(this.masterObject, this.contextMenuElementCreate, (contextMenuElement, element) => {
            contextMenuElement.clickEvent.on(event => {
                this.insertElementFullscreen(element.fieldId)
                window.location.href = window.location.origin + "#" + MrkLibrary.getDocIdByUrl()+"/" + element.fieldId
            })
        })
    }

    contextMenuElementCreate() {
        return new ContextMElementClickable("FullScreen")
    }

    insertElementFullscreen(fieldId: string) {
        if (fieldId) {
            this.masterObject.elementsManager.elementToFullScreen(fieldId)
        }
    }

    deactivate() {

    }

    loadData() {


    }


    saveValue(fieldId: string) {
    }

    partName: string;


}