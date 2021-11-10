import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectNormal} from "../NodeObject/NodeObjectNormal.js";
import {Layouts} from "../Elements/Elements/GroupElement/Layouts/Layouts.js";
import {MrkLibrary} from "../../../../Global/MrkLibrary.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {GroupData} from "../Elements/Elements/GroupElement/GroupData.js";

export class MainElementNormal extends MainElementBase {
    nodeObject: NodeObjectNormal

    constructor(nodeObject: NodeObjectNormal) {
        super(nodeObject);


    }

    layoutApply() {

        this.layoutClean()
        this.layoutDefault()
        MrkLibrary.dragElement(this.elementOptionsButton, this.element, false)
        let s = this.element.style
        s.overflow = "hidden"
        s.resize = "horizontal"
        s.position = "relative"

        let parentDocObject = LayrFind.doc_ByNodeId_InFrame(this.nodeObject.parentNodeId, window)
        let nodeGroupData = LayrFind.connection(this.nodeObject.connectionId).connectionData.nodeGroupData
        let nodeStyleData = null
        if (nodeGroupData) {
            nodeStyleData = LayrFind.connection(this.nodeObject.connectionId).connectionData.nodeGroupData.nodeStyle
        }
        let groupData: GroupData = LayrFind.field_ByName_InDocObject("group", parentDocObject).fieldData.data

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

            } else if (layout === Layouts.static) {
                s.position = "static"
            }

        }
        LayrFind.node_ById_InFrame(this.nodeObject.parentNodeId, window).elementsManager.elements.get("group").element.appendChild(this.element)

    }

}