import {Layouts} from "../Layouts";
import {NodeDivAllData} from "../../NodeDivAllData";
import {NodeData} from "../../NodeDocData/NodeData/NodeData";
import {MainElementLayouts} from "./MainElementLayouts";
import {NodeDiv} from "../../NodeDiv";

export class MainElement {
    element: any
    nodeData: NodeData
    mainElementLayouts: MainElementLayouts
    constructor(nodeDiv:NodeDiv) {
        this.mainElementLayouts=new MainElementLayouts(this)
        this.elementInit()
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