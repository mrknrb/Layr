import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectRoot} from "../NodeObject/NodeObjectRoot.js";
import {Layouts} from "../Elements/Elements/GroupElement/Layouts/Layouts.js";
export class MainElementRoot extends MainElementBase {
    constructor(nodeDiv: NodeObjectRoot) {
        super(nodeDiv);
    }

    layoutApply(layoutRootHaUres?: Layouts) {
        this.layoutClean()
        this.layoutDefault()
        let s = this.element.style
        s.position = "fixed"
        s.bottom = "6ch"
        s.left = "0px"
        s.width = "300px"
        s.overflow = "hidden"
        s.resize = "horizontal"
        s.zIndex = "10000"
        document.body.appendChild(this.element)
    }


}