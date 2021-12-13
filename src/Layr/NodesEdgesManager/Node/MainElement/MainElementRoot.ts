import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectRoot} from "../NodeObject/NodeObjectRoot.js";

export class MainElementRoot extends MainElementBase {
    constructor(nodeDiv: NodeObjectRoot) {
        super(nodeDiv);
    }

    layoutApply() {
        this.layoutClean()
        this.layoutDefault()
        let s = this.element.style
        s.position = "fixed"
        s.bottom = "6ch"
        s.left = "0px"
        s.width = "300px"

        s.resize = "horizontal"
        s.zIndex = "10000"
        document.body.appendChild(this.element)
    }


}