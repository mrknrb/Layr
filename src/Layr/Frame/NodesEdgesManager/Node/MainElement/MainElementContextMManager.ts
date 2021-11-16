import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../ContextMenu/ContextMenuElements/ContextMElementClickable/ContextMElementClickable.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {ContextMElementSubContextM} from "../../../ContextMenu/ContextMenuElements/ContextMElementSubContextM/ContextMElementSubContextM.js";

export class MainElementContextMManager {


    contextMenu: ContextMenu
    nodeObject:NodeObjectBase
    constructor(nodeObject) {
        this.nodeObject=nodeObject
        this.contextMenu = new ContextMenu()
        this.contextMenu.contextMenuRightClickInit(nodeObject.element)

      this.  NewNodeContextInit()
    }

    NewNodeContextInit() {
      let subContextMenu= new ContextMenu()

        let contextMenuElementNewNode = new ContextMElementSubContextM(this.contextMenu, "New Element",subContextMenu )
        this.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")


        /*
        let contextMenuElementNewNode = new ContextMElementClickable(this.contextMenu, "New Element", (contextElement) => {
           let doc= LayrFind.doc(this.nodeObject.docId)

        })
        this.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")
        */
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