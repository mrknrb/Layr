import {TypedEvent} from "../0Libraries/TypedEvents.js";
import {NodeDivBase} from "./Frame/NodeDiv/NodeDivBase.js";

export class Events {

    onDelete:TypedEvent<NodeDivBase>
    constructor() {
        this.onDelete= new TypedEvent<NodeDivBase>();
    }
}