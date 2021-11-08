import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {DocObject} from "../Doc/DocObject.js";
import {NodeObjectInterface} from "../../../../Frame/NodesManager/Node/NodeObject/NodeObjectInterface.js";
import {NodeEvents} from "../../../../Frame/NodesManager/Node/NodeObject/NodeEvents.js";

export class FieldEvents {

    onFieldChange: TypedEvent<void>
    onDelete: TypedEvent<NodeObjectInterface>
    nodeDataEvents: NodeEvents    //ha GroupField-rol van szo
    constructor() {
        this.onDelete = new TypedEvent<NodeObjectInterface>();
        this.onFieldChange = new TypedEvent()
        this.nodeDataEvents = new NodeEvents()

        //this.onFieldChange.on()
    }

}