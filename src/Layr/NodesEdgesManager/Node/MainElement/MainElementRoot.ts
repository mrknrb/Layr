import {MainElementBase} from "./MainElementBase.js";
import {NodeObjectRoot} from "../NodeObject/NodeObjectRoot.js";
import {MrkLibrary, ResizeType} from "../../../../0Egyebek/MrkLibrary.js";

export class MainElementRoot extends MainElementBase {
    constructor(nodeDiv: NodeObjectRoot) {
        super(nodeDiv);
    }

    layoutApply() {
        //this.layoutClean()
       // this.layoutDefault()
        let s = this.element.style

        document.querySelector("#optionsBarRootNodeContainer").appendChild(this.element)
    }
}