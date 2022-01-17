import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";
import {ContextMenu} from "../../../../../../../ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {layrFrame} from "../../../../../../../LayrFrame.js";
import {GroupElementMainPart} from "./GroupElementMainPart.js";

export class GroupElementNewNodePart extends PartBaseElement_Field {

    static partName = "GroupElementNewNodePart"

    constructor(masterObject: ElementObject) {
        super(masterObject);
        this.contextMenuInit()
    }

    activate() {
    }

   async contextMenuInit() {

        this.partContextMenu = new ContextMenu()
        let contextMElementClickable = new ContextMElementClickable("New Node")

        contextMElementClickable.clickEvent.on(async  event => {
           let newNode=await this.newNode()
            let newNodeData=new NewNodeData(newNode.docId,newNode.connId)
            this.valueSync(newNodeData)
            this.masterObject.contextMenu.contextMenuInVisible()

        })

        this.partContextMenu.contextMenuElementInsert(contextMElementClickable)

    }

    async newNode() {
        let nodeNew = await layrFrame.nodesEdgesManager.newNodeObjectNormalWithNewConnNewDocToParentNode(this.masterObject.nodeObject)


        /*

                let nodeLayoutAbsolutePart =this.getPartInMasterobject_byClass(NodeLayoutAbsolutePart.partName)as NodeLayoutAbsolutePart
                nodeNew.smpManager.smpController.activateSelectorAndChildren(layoutSelectorDataNames.selector,true)

                nodeNew.smpManager.smpController.changeSelectorState({selectorName:layoutSelectorDataNames.selector,stateName:layoutSelectorDataNames.states.Absolute},true)
        */

        let groupMainPart = this.getPartInMasterobject_byClass(GroupElementMainPart.partName) as GroupElementMainPart
        groupMainPart.groupBodyElement.appendChild(nodeNew.mainElement.element)


        // nodeLayoutAbsolutePart.loadData()

return nodeNew
    }

   async loadData(newNodeData:NewNodeData) {
      let newNodeObject=await layrFrame.nodesEdgesManager. newNodeObjectNormalToParentNode(this.masterObject.nodeObject,newNodeData.docId,newNodeData.connId)
      // let groupMainPart = this.getPartInMasterobject_byClass(GroupElementMainPart.partName) as GroupElementMainPart
      // groupMainPart.groupBodyElement.appendChild(newNodeObject.mainElement.element)

    }


    saveValue() {
    }

    deactivate() {
    }
}
class NewNodeData{
    docId:string
    connId:string
    constructor(docId:string,connId:string) {
        this.docId=docId
        this.connId=connId
    }


}