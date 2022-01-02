import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectRoot} from "../NodeObject/NodeObjectRoot.js";

export class MainElementRoot extends MainElementBase {
    constructor(nodeDiv: NodeObjectRoot) {
        super(nodeDiv);
    }

    layoutApply() {
        //this.layoutClean()
        // this.layoutDefault()
        let s = this.element.style
s.border="none"
        document.querySelector("#optionsBarRootNodeContainer").appendChild(this.element)
    }
}