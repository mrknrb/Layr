import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {DocObject} from "../Doc/DocObject.js";
import {NodeInterface} from "../../../../Frame/NodesManager/Node/NodeObject/NodeInterface.js";
import {NodeEvents} from "../../../../Frame/NodesManager/Node/NodeObject/NodeEvents.js";

export class FieldEvents {

    onFieldChange: TypedEvent<void>
    onDelete: TypedEvent<NodeInterface>
    nodeDataEvents: NodeEvents    //ha GroupField-rol van szo
    constructor() {
        this.onDelete = new TypedEvent<NodeInterface>();
        this.onFieldChange = new TypedEvent()
        this.nodeDataEvents = new NodeEvents()

        //this.onFieldChange.on()
    }

}