import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectNormal} from "../NodeObject/NodeObjectNormal.js";
import {Layouts} from "../Elements/Elements/GroupElement/Layouts/Layouts.js";
import {MrkLibrary} from "../../../../Global/MrkLibrary.js";
import {LayrFind} from "../../../../Global/LayrFind.js";

export class MainElementNormal extends MainElementBase {
    nodeObject: NodeObjectNormal

    constructor(nodeObject: NodeObjectNormal) {
        super(nodeObject);


    }

    layoutApply() {
      //let docObject=  this.nodeObject.layrBackgroundF.docsConnectionsManager.docObjectsMap.get(this.nodeObject.parentDocId)
        let parentDocObject= LayrFind.doc(this.nodeObject.parentDocId)

        let nodeStyleData = LayrFind.field_ByName_InDocObject("group",parentDocObject).fieldData.data.nodesStyle

        let layout = LayrFind.field_ByName_InDocObject("group",parentDocObject).fieldData.data.layout

        this.layoutClean()
        this.layoutDefault()
        MrkLibrary.dragElement(this.elementOptionsButton, this.element, false)
        let s = this.element.style
        let d = nodeStyleData.get(this.nodeObject.parentDocId).nodeLayoutsData
        s.overflow = "hidden"
        s.resize = "horizontal"
        if (layout === Layouts.absolute) {
            s.position = "absolute"
            d.absolute.top ? s.top = d.absolute.top : null
            d.absolute.left ? s.left = d.absolute.left : null
            d.absolute.width ? s.width = d.absolute.width : null
        } else if (layout === Layouts.static) {
            s.position = "static"
        }
        LayrFind.node_ById_InFrame(this.nodeObject.parentNodeId,window).mainElement.element.appendChild(this.element)

    }

}