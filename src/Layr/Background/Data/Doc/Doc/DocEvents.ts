import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeObjectBase} from "../../../../Frame/NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {DocObject} from "./DocObject.js";

export class DocEvents {
    onDocChange: TypedEvent<DocObject>
    onDelete: TypedEvent<NodeObjectBase>

    constructor() {
        this.onDelete = new TypedEvent<NodeObjectBase>();
        this.onDocChange = new TypedEvent<DocObject>()
    }
}