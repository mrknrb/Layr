import {Layouts} from "../Layouts";
import {NodeDivAllData} from "../../NodeDivAllData";
import {NodeData} from "../../NodeDocData/NodeData/NodeData";
import {MainElemLayouts} from "./MainElemLayouts";

export class MainElem {
    element: any
    nodeData: NodeData

    constructor(nodeDivAllData: NodeDivAllData) {
        this.nodeData = nodeDivAllData.nodeDocData.nodeData
        this.elementInit()
        if (this.nodeData.layout){
            MainElemLayouts.newLayout(this,this.nodeData.layout)
        }
    }

    private elementInit() {
        this.element = document.createElement("div")
        this.element.setAttribute("class", "NodeDivMrkS")
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })

        this.element.addEventListener("mouseenter", function (e) {

        })
        this.element.addEventListener("mouseleave", function (e) {

        })

    }




}