import {PartsManagerBase} from "../../../PartsGeneral/PartsManagerBase.js";
import {NodeObjectBase} from "../NodeObjectBase.js";
import {NodePartsClassList} from "./NodePartsClassList.js";

export class NodePartsManager extends PartsManagerBase {
    parts: NodePartsClassList

    constructor(nodeObjectBase: NodeObjectBase) {
        super()
        this.parts = new NodePartsClassList(nodeObjectBase)
    }
}