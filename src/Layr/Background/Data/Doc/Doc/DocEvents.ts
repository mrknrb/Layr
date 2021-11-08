import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeObjectInterface} from "../../../../Frame/NodesManager/Node/NodeObject/NodeObjectInterface.js";
import {DocObject} from "./DocObject.js";

export class DocEvents {
    onDocChange: TypedEvent<DocObject>
    onDelete: TypedEvent<NodeObjectInterface>

    constructor() {
        this.onDelete = new TypedEvent<NodeObjectInterface>();
        this. onDocChange=new TypedEvent<DocObject>()
    }
}