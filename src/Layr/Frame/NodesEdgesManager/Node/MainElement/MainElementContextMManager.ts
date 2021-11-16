import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../ContextMenu/ContextMenuElements/ContextMElementClickable/ContextMElementClickable.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectInterface} from "../NodeObject/NodeObjectInterface.js";

export class MainElementContextMManager {


    contextMenu: ContextMenu
    nodeObject:NodeObjectInterface
    constructor(nodeObject) {
        this.nodeObject=nodeObject
        this.contextMenu = new ContextMenu(nodeObject.element)

      this.  NewNodeContextInit()
    }

    NewNodeContextInit() {
        let contextMenuElementNewNode = new ContextMElementClickable(this.contextMenu, "New Element", (contextElement) => {
           let doc= LayrFind.doc(this.nodeObject.docId)

        })
        this.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")
    }

    elementChange_fieldDataUpdate_Init() {
        let self = this
        this.element.addEventListener("keyup", function (e) {
            self.getFieldObject().fieldData.data.content = self.element.value
            self.getFieldObject().fieldEvents.onFieldChange.emit()
        })
    }

    fieldDataChange_ElementUpdate_Init() {
        this.getFieldObject().fieldEvents.onFieldChange.on(() => this.element.value = this.getFieldObject().fieldData.data.content)
    }
}