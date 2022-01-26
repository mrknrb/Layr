import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {LayrFind} from "../../../../../../../../0Egyebek/LayrFind.js";
import {NodeLayoutSelectorDataNames} from "../../../../../NodeObject/NodeSMPManager/NodeNormalSMPStatic/NodeNormalSMPStaticData.js";
import {ElementObject} from "../../../../ElementObject.js";
import {GroupElementMainPart} from "./GroupElementMainPart.js";
import {layrFrame} from "../../../../../../../LayrFrame.js";
import {NodeObjectNormal} from "../../../../../NodeObject/NodeObjectNormal.js";
import {mousePositionMrk, MrkLibrary} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {NodeLayoutAbsolutePart} from "../../../../../NodeObject/NodeSMPManager/Parts/NodeLayoutAbsolutePart.js";
import {NodeObjectBase} from "../../../../../NodeObject/NodeObjectBase.js";

export class GroupElementPartAbsoluteLayout extends PartBaseElement_Field {

    static partName = "GroupElementPartAbsoluteLayout"
    scrollHelperElement: HTMLDivElement = document.createElement("div")

    constructor(masterObject: ElementObject) {
        super(masterObject);

    }

    activate() {
        setTimeout(() => {
            let childNodes = LayrFind.nodes_ByParentNodeId(this.masterObject.nodeObject.nodeId)

            childNodes?.forEach(node => {
                this.nodeAbsolutePartSet(node)
            })
            setTimeout(() => {
                let groupElementMainPart = this.masterObject.smpManager.masterObjectParts.getPartObject_ByName(GroupElementMainPart.partName) as GroupElementMainPart
             //  MrkLibrary.shadowForOverlappingNodesOnce(groupElementMainPart.groupBodyElement)
                MrkLibrary.   shadowForOverlappingNodesPermanent(groupElementMainPart.groupBodyElement)
            }, 200)
        }, 200)

        this.scrollMoreInit()
        // layrFrame.nodesEdgesManager.newNodeObjectWithNewDocEvent.on(this.newNodeAction)
        this.newNodeActionActivate(true)
        //this.newNodeInit()
    }

    newNodeActionActivate(active: boolean) {
        let self = this
        let newNodeActionInvoker = (eventData: { parentNodeObject: NodeObjectBase, newChildNode: NodeObjectNormal }) => {
            self.newNodeAction(eventData)
        }


        if (active) {

            layrFrame.nodesEdgesManager.newNodeObjectWithNewDocEvent.on(newNodeActionInvoker)

        } else {
            layrFrame.nodesEdgesManager.newNodeObjectWithNewDocEvent.off(newNodeActionInvoker)

        }

    }


    nodeAbsolutePartSet(node: NodeObjectNormal) {
        node.smpManager.smpController.changeSelectorState({
            selectorName: NodeLayoutSelectorDataNames.selector,
            stateName: NodeLayoutSelectorDataNames.states.Absolute
        })
    }

    newNodeAction(eventData: { parentNodeObject: NodeObjectBase, newChildNode: NodeObjectNormal }) {

        if (eventData.parentNodeObject.nodeId == this.masterObject.nodeObject.nodeId) {
            let nodeLayoutAbsolutePart = eventData.newChildNode.smpManager.masterObjectParts.getPartObject_ByName(NodeLayoutAbsolutePart.partName) as NodeLayoutAbsolutePart
            let groupElementMainPart = this.masterObject.smpManager.masterObjectParts.getPartObject_ByName(GroupElementMainPart.partName) as GroupElementMainPart
            this.nodeAbsolutePartSet(eventData.newChildNode)
            // eventData.newChildNode.mainElement.element.style.top = mousePositionMrk.clientY + "px"
            // eventData.newChildNode.mainElement.element.style.left = mousePositionMrk.clientX + "px"

            //   eventData.newChildNode.mainElement.element.style.left =mousePositionMrk.clientX- groupElementMainPart.groupBodyElement.scrollLeft - groupElementMainPart.+"px"
            //   top : e.pageY - $(document).scrollTop() - $('#canvas').offset().top
            let rect = groupElementMainPart.groupBodyElement.getBoundingClientRect();
            eventData.newChildNode.mainElement.element.style.left = mousePositionMrk.clientX + groupElementMainPart.groupBodyElement.scrollLeft - rect.left + "px"
            eventData.newChildNode.mainElement.element.style.top = mousePositionMrk.clientY + groupElementMainPart.groupBodyElement.scrollTop - rect.top + "px"

            nodeLayoutAbsolutePart.saveValue()
        }

    }

    loadData() {


    }


    saveValue() {
    }


    deactivate() {
        setTimeout(() => {
            let childNodes = LayrFind.nodes_ByParentNodeId(this.masterObject.nodeObject.nodeId)

            childNodes?.forEach(node => {
                node.smpManager.smpController.activateSelectorAndChildren(
                    NodeLayoutSelectorDataNames.selector, false)
                /*
                node.smpManager.smpController.changeSelectorState({
                    selectorName: NodeLayoutSelectorDataNames.selector,
                    stateName: NodeLayoutSelectorDataNames.states.Nothing
                })
                */
            })
            this.newNodeActionActivate(false)
            //layrFrame.nodesEdgesManager.newNodeObjectWithNewDocEvent.off(this.newNodeAction)
        }, 200)
        this.scrollHelperElement.remove()
    }

    scrollMoreInit() {


        let groupMainPart = this.getPartInMasterobject_byClass(GroupElementMainPart.partName) as GroupElementMainPart
        groupMainPart.groupBodyElement.appendChild(this.scrollHelperElement)
        this.scrollHelperElement.style.position = "absolute"
        this.scrollHelperElement.style.width = "1px"
        this.scrollHelperElement.style.height = "1px"
        this.scrollHelperElement.style.left = "1px"
        this.scrollHelperElement.style.top = "1px"
        this.scrollHelperElement.style.transition="left  0.1s ease-out,top  0.1s ease-out"
        groupMainPart.groupBodyElement.addEventListener('scroll', (event) => {
            let scrollactualY = groupMainPart.groupBodyElement.scrollHeight - groupMainPart.groupBodyElement.scrollTop
            let scrollbottomY = groupMainPart.groupBodyElement.clientHeight
            if (Math.abs(scrollactualY - scrollbottomY) < 500) {
                this.scrollHelperElement.style.top = groupMainPart.groupBodyElement.scrollHeight + 250 + "px"
            }else if(Math.abs(scrollactualY - scrollbottomY) > 750){
                this.scrollHelperElement.style.top = groupMainPart.groupBodyElement.scrollHeight - 250 + "px"
            }
            let scrollactualX=groupMainPart.groupBodyElement.scrollWidth - groupMainPart.groupBodyElement.scrollLeft
            let  scrollbottomX=groupMainPart.groupBodyElement.clientWidth
            if (Math.abs(scrollactualX-scrollbottomX)<500)
            {
                this.scrollHelperElement.style.left=groupMainPart.groupBodyElement.scrollWidth+250+"px"
            }else if(Math.abs(scrollactualX-scrollbottomX)>750){
                this.scrollHelperElement.style.left = groupMainPart.groupBodyElement.scrollWidth - 250 + "px"
            }

        });




    }


}
