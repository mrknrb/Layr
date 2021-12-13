import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeObjectBase} from "../../../../NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {NodeEvents} from "../../../../NodesEdgesManager/Node/NodeObject/NodeEvents.js";
import {SyncObjectElement_Field} from "./SyncObjectElement_Field.js";

export class FieldEvents {

    onFieldChange: TypedEvent<SyncObjectElement_Field>
    onDelete: TypedEvent<NodeObjectBase>
    nodeDataEvents: NodeEvents    //ha GroupField-rol van szo
    constructor() {
        this.onDelete = new TypedEvent<NodeObjectBase>();
        this.onFieldChange = new TypedEvent<SyncObjectElement_Field>()
        this.nodeDataEvents = new NodeEvents()

        //this.onFieldChange.on()
    }

}