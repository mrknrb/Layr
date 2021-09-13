import {MainElementBase} from "./MainElementBase.js";
import {NodeDivRoot} from "../NodeDivObject/NodeDivRoot.js";
import {Layouts} from "../../Layouts/Layouts.js";
import {ElementBaseClass} from "../Elements/ElementBaseClass.js";
import {DocDataObject} from "../../../Background/Data/DocData/DocDataObject.js";
import {DocURLObject} from "../../../Background/Arangodb/ArangoAdatok/DocURLObject.js";

export class MainElementRoot extends MainElementBase {
    constructor(nodeDiv: NodeDivRoot) {
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
        document.body.appendChild(this.element)
    }


}