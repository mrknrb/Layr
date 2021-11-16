import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";
import {NodeObjectBase} from "../../../../Frame/NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {NodeEvents} from "../../../../Frame/NodesEdgesManager/Node/NodeObject/NodeEvents.js";
import {PartSyncMessageObject} from "../../../../Frame/NodesEdgesManager/PartsGeneral/PartSyncMessageObject.js";

export class FieldEvents {

    onFieldChange: TypedEvent<PartSyncMessageObject>
    onDelete: TypedEvent<NodeObjectBase>
    nodeDataEvents: NodeEvents    //ha GroupField-rol van szo
    constructor() {
        this.onDelete = new TypedEvent<NodeObjectBase>();
        this.onFieldChange = new TypedEvent<PartSyncMessageObject>()
        this.nodeDataEvents = new NodeEvents()

        //this.onFieldChange.on()
    }

}