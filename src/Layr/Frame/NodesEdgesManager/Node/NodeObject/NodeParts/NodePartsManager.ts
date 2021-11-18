import {PartsManagerBase} from "../../../PartsGeneral/PartsManagerBase.js";
import {TextAreaElement} from "../../Element/Elements/TextAreaElement/TextAreaElement.js";
import {TextAreaContentPart} from "../../Element/Elements/TextAreaElement/TextAreaPartsManager/TextAreaParts/TextAreaContentPart.js";
import {NodeObjectBase} from "../NodeObjectBase.js";
import {NodeNewElementPart} from "./NodeNewElementPart.js";

export class NodePartsManager extends PartsManagerBase{

    constructor(nodeObjectBase: NodeObjectBase) {
        super()
        let part = new NodeNewElementPart(nodeObjectBase)
        this.parts.set(part.constructor.name, part)
    }

}