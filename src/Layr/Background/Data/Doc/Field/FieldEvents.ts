import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeObjectInterface} from "../../../../Frame/NodesEdgesManager/Node/NodeObject/NodeObjectInterface.js";
import {NodeEvents} from "../../../../Frame/NodesEdgesManager/Node/NodeObject/NodeEvents.js";
import {PartSyncMessageObject} from "../../../../Frame/NodesEdgesManager/PartsGeneral/PartSyncMessageObject.js";

export class FieldEvents {

    onFieldChange: TypedEvent<PartSyncMessageObject>
    onDelete: TypedEvent<NodeObjectInterface>
    nodeDataEvents: NodeEvents    //ha GroupField-rol van szo
    constructor() {
        this.onDelete = new TypedEvent<NodeObjectInterface>();
        this.onFieldChange = new TypedEvent<PartSyncMessageObject>()
        this.nodeDataEvents = new NodeEvents()

        //this.onFieldChange.on()
    }

}