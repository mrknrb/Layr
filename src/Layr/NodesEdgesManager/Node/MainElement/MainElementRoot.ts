import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectRoot} from "../NodeObject/NodeObjectRoot.js";
import {MrkLibrary, ResizeType} from "../../../../0Egyebek/MrkLibrary.js";
import {ResizeTypes} from "../Element/ElementResizer/ResizeTypes.js";

export class MainElementRoot extends MainElementBase {
    constructor(nodeDiv: NodeObjectRoot) {
        super(nodeDiv);
    }

    layoutApply() {
        this.layoutClean()
        this.layoutDefault()
        let s = this.element.style
        s.position = "fixed"
        s.bottom = "0ch"
        s.left = "0px"
        s.width = "300px"
MrkLibrary.resizeElement(this.element, 4,ResizeType.horizontal)
       // s.resize = "horizontal"
        s.zIndex = "10000"
        document.body.appendChild(this.element)
    }


}