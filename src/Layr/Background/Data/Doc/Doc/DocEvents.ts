import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeInterface} from "../../../../Frame/NodesManager/Node/NodeObject/NodeInterface.js";
import {DocObject} from "./DocObject.js";

export class DocEvents {
    onDocChange: TypedEvent<DocObject>
    onDelete: TypedEvent<NodeInterface>

    constructor() {
        this.onDelete = new TypedEvent<NodeInterface>();
        this. onDocChange=new TypedEvent<DocObject>()
    }
}