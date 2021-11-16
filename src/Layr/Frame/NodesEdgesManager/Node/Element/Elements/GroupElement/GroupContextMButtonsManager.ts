import {GroupElement} from "./GroupElement.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable/ContextMElementClickable.js";
import {LayrFrame} from "../../../../../LayrFrame.js";

export class GroupContextMButtonsManager {

    groupElement: GroupElement
    layrFrame: LayrFrame

    constructor(groupElement: GroupElement) {
        this.groupElement = groupElement
        //@ts-ignore
        this.layrFrame = document.layrFrame
    }

    NonLoadedButtonsInit() {
        this.loadGroupInit()

    }

    LoadedButtonsInit() {
        this.NewNodeContextInit()
    }

    loadGroupInit() {
        let contextMenuElementClickable = new ContextMElementClickable(this.groupElement.contextMenu, "Load Group", (contextElement) => {

            this.layrFrame.nodesManager.loadNormalNodesOfGroupNode(this.groupElement.nodeObject)
            this.groupElement.contextMenu.contextMenuElementRemove(contextElement.contextMenuElementId)
            this.groupElement.groupElementEventLoaded.emit(true)

        })
        this.groupElement.contextMenu.contextMenuElementInsert(contextMenuElementClickable, "GroupElement")
    }

    NewNodeContextInit() {

        let contextMenuElementNewNode = new ContextMElementClickable(this.groupElement.contextMenu, "New Node", (contextElement) => {

            this.layrFrame.nodesManager.newNodeObjectWithNewDoc(this.groupElement.nodeObject)

        })
        this.groupElement.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "GroupElement")


    }

}