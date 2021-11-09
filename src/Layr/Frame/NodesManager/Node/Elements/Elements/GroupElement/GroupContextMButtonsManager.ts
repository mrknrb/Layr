import {GroupElement} from "./GroupElement.js";
import {ContextMElementClickable} from "../../../ContextMenu/ContextMenuElements/ContextMElementClickable/ContextMElementClickable.js";

export class GroupContextMButtonsManager {

    groupElement: GroupElement

    constructor(groupElement: GroupElement) {
        this.groupElement = groupElement

    }

    NonLoadedButtonsInit() {
        this.loadGroupInit()

    }

    LoadedButtonsInit() {
        this.  NewNodeContextInit()
    }

    loadGroupInit() {
        let contextMenuElementClickable = new ContextMElementClickable("Load Group", (contextMenuElementClickable) => {
            //@ts-ignore
            window.layrFrame.nodeManager.loadNormalNodesOfGroupNode(this.groupElement.nodeObject)
            this.groupElement.contextMenu.contextMenuElementRemove(contextMenuElementClickable.contextMenuElementId)
            this.groupElement.groupElementEventLoaded.emit(true)

        })
        this.groupElement.contextMenu.contextMenuElementInsert(contextMenuElementClickable, "GroupElement")
    }

    NewNodeContextInit() {

        let contextMenuElementNewNode = new ContextMElementClickable("New Node", (contextMenuElementClickable) => {
            //@ts-ignore
            window.layrFrame.nodeManager.loadNormalNodesOfGroupNode(this.groupElement.nodeObject)
            this.groupElement.contextMenu.contextMenuElementRemove(contextMenuElementClickable.contextMenuElementId)

        })
        this.groupElement.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "GroupElement")


    }

}