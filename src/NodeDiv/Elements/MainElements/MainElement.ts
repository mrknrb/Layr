import {Layouts} from "../Layouts";
import {NodeDivAllData} from "../../NodeDivAllData";
import {NodeData} from "../../NodeDocData/NodeData/NodeData";
import {MainElementLayouts} from "./MainElementLayouts";

export class MainElement {
    element: any
    nodeData: NodeData
    mainElementLayouts: MainElementLayouts
    constructor(nodeDivAllData: NodeDivAllData) {
        this.nodeData = nodeDivAllData.nodeDocData.nodeData
        this.mainElementLayouts=new MainElementLayouts(this)
        this.elementInit()
        if (this.nodeData.layout){
            MainElementLayouts.newLayout(this.nodeData.layout)
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