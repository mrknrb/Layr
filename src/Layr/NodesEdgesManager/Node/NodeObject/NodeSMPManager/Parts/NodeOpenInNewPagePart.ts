import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {PartNodeCommon} from "../../../../../SMP/PartsGeneral/PartNodeCommon.js";
import {ContextMenu} from "../../../../../ContextMenu/ContextMenu.js";

export class NodeOpenInNewPagePart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase
    static partName = "NodeOpenInNewPagePart"

    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
    }

    activate() {
        this.newPageForElementInit()
        this.contextMenuInit()
    }

    newPageForElementInit() {

        PartNodeCommon.contextMElementToAllChildElement(this.masterObject, this.contextMenuElementCreate, (contextMenuElement, element) => {
            contextMenuElement.clickEvent.on(event => {
                this.openInNewPageWithFieldFullScreen(element.fieldId)
            })
        })
    }

    contextMenuInit() {

        this.partContextMenu = new ContextMenu()
        let contextMElementClickable = new ContextMElementClickable("Open in new page")

        contextMElementClickable.clickEvent.on(async event => {
            this.openInNewPage()
        })

        this.partContextMenu.contextMenuElementInsert(contextMElementClickable)

    }

    contextMenuElementCreate() {
        return new ContextMElementClickable("Open in new page")
    }

    openInNewPage() {

        window.open(window.location.origin + "#" + this.masterObject.docId, '_blank')?.focus();

    }

    openInNewPageWithFieldFullScreen(fieldId: string) {

        window.open(window.location.origin + "#" + this.masterObject.docId + "/" + fieldId, '_blank')?.focus();

    }

    deactivate() {

    }

    loadData() {


    }


    saveValue(fieldId: string) {
    }

    partName: string;


}