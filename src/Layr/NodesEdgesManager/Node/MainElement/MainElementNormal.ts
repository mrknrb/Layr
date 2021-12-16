import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectNormal} from "../NodeObject/NodeObjectNormal.js";

export class MainElementNormal extends MainElementBase {
    nodeObject: NodeObjectNormal

    constructor(nodeObject: NodeObjectNormal) {
        super(nodeObject);
    }

    layoutApply() {
        this.layoutClean()
        this.layoutDefault()
        let s = this.element.style
        /*
                let parentDocObject = LayrFind.doc_ByNodeId_InFrame(this.nodeObject.parentNodeIdnull)

                let nodeGroupData = LayrFind.conn(this.nodeObject.connId).connData.data.nodeCDataParts
                let nodeStyleData = null
                if (nodeGroupData) {
                    nodeStyleData = LayrFind.conn(this.nodeObject.connId).connData.nodeGroupData.nodeStyleData
                }
                let groupData: GroupData = LayrFind.field_GroupType_InDocObject(parentDocObject).fieldData.partsData

                let layout = null
                if (groupData) {
                    layout = groupData.layout
                }

                if (nodeStyleData) {
                    let d = nodeStyleData.nodeStyleLayoutsData
                    if (layout === Layouts.absolute) {

                        s.position = "absolute"
                        d.absolute.top ? s.top = d.absolute.top + "px" : null
                        d.absolute.left ? s.left = d.absolute.left + "px" : null
                        d.absolute.width ? s.width = d.absolute.width + "px" : null
                        d.absolute.width ? s.width = d.absolute.height + "px" : null

                    } else if (layout === Layouts.list) {
                        s.position = "static"
                    }

                }
                let groupElement = LayrFind.elements_ByType(LayrFind.node_ById_InFrame(this.nodeObject.parentNodeId).elementsManager.elements, ElementTypes.Group)[0]
                groupElement.element.appendChild(this.element)
        */
    }

}