import {TypedEvent} from "../0Libraries/TypedEvents.js";
import {NodeDiv} from "../NodeDiv/NodeDiv.js";

export class Events {

    onDelete:TypedEvent<NodeDiv>
    constructor() {
        this.onDelete= new TypedEvent<NodeDiv>();
    }
}