import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeObjectBase} from "../../../../Frame/NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {DocObject} from "./DocObject.js";

export class DocEvents {

    onDelete: TypedEvent<NodeObjectBase>
    onDocChange: TypedEvent<DocObject>
    onFieldObjectCreate: TypedEvent<DocObject>

    constructor() {
        this.onDelete = new TypedEvent<NodeObjectBase>();
        this.onDocChange = new TypedEvent<DocObject>()
        this.onFieldObjectCreate=new TypedEvent<DocObject>()
    }
}