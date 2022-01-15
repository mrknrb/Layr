import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";
import {ContextMenu} from "../../../../../../../ContextMenu/ContextMenu.js";
import {ContextMElementClickable} from "../../../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {layrFrame} from "../../../../../../../LayrFrame.js";
import {NodeLayoutAbsolutePart} from "../../../../../NodeObject/NodeSMPManager/Parts/NodeLayoutAbsolutePart.js";
import {mousePositionMrk} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {GroupElementConfigFile, layoutSelectorDataNames} from "../GroupElementStaticData.js";
import {GroupElementMainPart} from "./GroupElementMainPart.js";

export class GroupElementNewNodePart extends PartBaseElement_Field {

    static partName = "GroupElementNewNodePart"

    constructor(masterObject: ElementObject) {
        super(masterObject);
        this.contextMenuInit()
    }

    activate() {
    }

    contextMenuInit() {

        this.partContextMenu = new ContextMenu()
        let contextMElementClickable = new ContextMElementClickable("New Node")

        contextMElementClickable.clickEvent.on(event => {
            this.newNode()


        })

        this.partContextMenu.contextMenuElementInsert(contextMElementClickable)

    }

    async newNode() {
        let nodeNew = await layrFrame.nodesEdgesManager.newNodeObjectNormalWithNewDocToParentNode(this.masterObject.nodeObject)


/*

        let nodeLayoutAbsolutePart =this.getPartInMasterobject_byClass(NodeLayoutAbsolutePart.partName)as NodeLayoutAbsolutePart
        nodeNew.smpManager.smpController.activateSelectorAndChildren(layoutSelectorDataNames.selector,true)

        nodeNew.smpManager.smpController.changeSelectorState({selectorName:layoutSelectorDataNames.selector,stateName:layoutSelectorDataNames.states.Absolute},true)
*/

        let groupMainPart=   this. getPartInMasterobject_byClass(GroupElementMainPart.partName) as GroupElementMainPart
        groupMainPart.groupBodyElement.appendChild(nodeNew.mainElement.element)



       // nodeLayoutAbsolutePart.loadData()


    }

    loadData() {


    }


    saveValue() {
    }

    deactivate() {
    }
}
