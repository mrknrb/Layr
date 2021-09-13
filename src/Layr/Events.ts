import {TypedEvent} from "../0Libraries/TypedEvents.js";
import {NodeDivInterface} from "./Frame/NodeDiv/NodeDivObject/NodeDivInterface.js";

export class Events {

    onDelete:TypedEvent<NodeDivInterface>
    constructor() {
        this.onDelete= new TypedEvent<NodeDivInterface>();
    }
}