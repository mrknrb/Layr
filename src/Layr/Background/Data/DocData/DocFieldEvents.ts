import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";
import {DocDataObject} from "./DocDataObject.js";
import {NodeDivInterface} from "../../../Frame/NodeDiv/NodeDivObject/NodeDivInterface.js";
import {NodeDataEvents} from "./NodeDataEvents.js";

export class DocFieldEvents {

    onFieldChange: TypedEvent<void>
    onDelete: TypedEvent<NodeDivInterface>
    nodeDataEvents: NodeDataEvents    //ha GroupField-rol van szo
    constructor() {
        this.onDelete = new TypedEvent<NodeDivInterface>();
        this.onFieldChange = new TypedEvent()
        this.nodeDataEvents = new NodeDataEvents()

        //this.onFieldChange.on()
    }

}