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
        let parentDocObject=  LayrFind.doc_ByNodeId_InFrame(this.nodeObject.parentNodeId,window)

        let nodesStyleData = LayrFind.field_ByName_InDocObject("group",parentDocObject).fieldData.data.nodesStyle


        this.layoutClean()
        this.layoutDefault()
        MrkLibrary.dragElement(this.elementOptionsButton, this.element, false)
        let s = this.element.style

        let nodeStyleData =  nodesStyleData.find((nodeStyleData)=> nodeStyleData.docId==this.nodeObject.docId)
       if (nodeStyleData){

           let d=nodeStyleData.nodeStyleLayoutsData
           let layout= nodeStyleData.layout

           s.overflow = "hidden"
           s.resize = "horizontal"
           if (layout === Layouts.absolute) {
               s.position = "absolute"
               d.absolute.top ? s.top = d.absolute.top +"px": null
               d.absolute.left ? s.left = d.absolute.left +"px" : null
               d.absolute.width ? s.width = d.absolute.width +"px" : null
               d.absolute.width ? s.width = d.absolute.height +"px" : null

           } else if (layout === Layouts.static) {
               s.position = "static"
           }

       }
        LayrFind.node_ById_InFrame(this.nodeObject.parentNodeId,window).elementsManager.elements.get("group").element.appendChild(this.element)

    }

}