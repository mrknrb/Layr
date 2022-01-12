import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {PartNodeCommon} from "../../../../../SMP/PartsGeneral/PartNodeCommon.js";

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
        PartNodeCommon.contextMElementToAllChildElement(this.masterObject,this. contextMenuElementCreate, (contextMenuElement,element) => {
            contextMenuElement.clickEvent.on(event => {
                this.insertElementFullscreen(element.fieldId)
                this.saveValue(element.fieldId)
            })
        })
    }

    contextMenuElementCreate() {
        return new ContextMElementClickable("FullScreen")
    }

    insertElementFullscreen(fieldId
                                :
                                string
    ) {
        if (fieldId) {
            this.masterObject.elementsManager.elementToFullScreen(fieldId)
        }
    }

    deactivate() {

    }

    loadData() {


        this.insertElementFullscreen(this.getPartData().data)
    }


    saveValue(fieldId
                  :
                  string
    ) {
        this.saveValueDefault(fieldId)
        this.valueSync()
    }

    partName: string;


}