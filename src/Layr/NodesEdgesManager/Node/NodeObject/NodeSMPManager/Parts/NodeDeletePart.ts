import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {ContextMenu} from "../../../../../ContextMenu/ContextMenu.js";
import {NodeQuickButton} from "../../../MainElement/NodeQuickButton.js";
import {ContextMElementSubContextMButton} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementSubContextMButton.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {layrFrame} from "../../../../../LayrFrame.js";
import {NodeObjectNormal} from "../../NodeObjectNormal.js";

export class NodeDeletePart extends PartBaseNode_Doc {
    masterObject: NodeObjectNormal
    static partName = "NodeDeletePart"
    subContextMenu: ContextMenu = new ContextMenu()
    quickButton: NodeQuickButton = new NodeQuickButton()

    constructor(masterObject: NodeObjectNormal) {
        super(masterObject);
        this.contextInit()
    }

    activate() {

        this.quickButton.setColor("red")
        this.quickButton.addImage("0Resources/close.svg")

        this.masterObject.mainElement.nodeQuickButtonsBar.quickButtonInsert(this.quickButton)
        this.quickButton.element.addEventListener("click", () => {
            let bounding = this.quickButton.element.getBoundingClientRect()
            this.subContextMenu.contextMenuActivate(bounding.x, bounding.y)
        })

    }

    contextInit() {
        this.partContextMenu = new ContextMenu()
        let contextMenuElementDeleteNode = new ContextMElementSubContextMButton("Delete Node")
        this.partContextMenu.contextMenuElementInsert(contextMenuElementDeleteNode)
        this.subContextMenu.contextMenuHoverInit(contextMenuElementDeleteNode.element)


        let contextMenuElementClickableNode = new ContextMElementClickable("Only Node")
        this.subContextMenu.contextMenuElementInsert(contextMenuElementClickableNode)

        contextMenuElementClickableNode.clickEvent.on(event => {
            this.deleteNode()
            this.valueSync(true)
        })
        let contextMenuElementClickableNodeDoc = new ContextMElementClickable("Node And Doc")
        this.subContextMenu.contextMenuElementInsert(contextMenuElementClickableNodeDoc)

        contextMenuElementClickableNodeDoc.clickEvent.on(event => {
            layrFrame.nodesEdgesManager.deleteDocByNodeObject(this.masterObject)
            this.deleteNode()
            this.subContextMenu.contextMenuInVisible()

        })
    }

    deleteNode() {
        this.masterObject.mainElement.element.remove()
        layrFrame.nodesEdgesManager.deleteNodeKeepDoc(this.masterObject)
        this.subContextMenu.contextMenuInVisible()
    }




    nodeQuickButtonInit() {


    }


    deactivate() {

    }

    loadData(torolve: string) {
        if (torolve) this.deleteNode()
    }


    saveValue(data: { fieldName: string, elementType: string }) {

    }

    partName: string;


}