import {GroupElement} from "./GroupElement.js";
import {ContextMElementClickable} from "../../../ContextMenu/ContextMenuElements/ContextMElementClickable/ContextMElementClickable.js";
import {LayrFrame} from "../../../../../LayrFrame.js";

export class GroupContextMButtonsManager {

    groupElement: GroupElement
    layrFrame:LayrFrame
    constructor(groupElement: GroupElement) {
        this.groupElement = groupElement
        //@ts-ignore
        this. layrFrame=window.layrFrame
    }

    NonLoadedButtonsInit() {
        this.loadGroupInit()

    }

    LoadedButtonsInit() {
        this.  NewNodeContextInit()
    }

    loadGroupInit() {
        let contextMenuElementClickable = new ContextMElementClickable("Load Group", (contextMenuElementClickable) => {

            this. layrFrame.nodesManager.loadNormalNodesOfGroupNode(this.groupElement.nodeObject)
            this.groupElement.contextMenu.contextMenuElementRemove(contextMenuElementClickable.contextMenuElementId)
            this.groupElement.groupElementEventLoaded.emit(true)

        })
        this.groupElement.contextMenu.contextMenuElementInsert(contextMenuElementClickable, "GroupElement")
    }

    NewNodeContextInit() {

        let contextMenuElementNewNode = new ContextMElementClickable("New Node", (contextMenuElementClickable) => {

            this. layrFrame.nodesManager.newNodeObjectWithNewDoc(this.groupElement.nodeObject)

        })
        this.groupElement.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "GroupElement")


    }

}