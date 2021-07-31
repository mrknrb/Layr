import {TypedEvent} from "../0Libraries/TypedEvents";
import {NodeDiv} from "../NodeDiv/NodeDiv";

export class Events {

    onDelete:TypedEvent<NodeDiv>
    constructor() {
        this.onDelete= new TypedEvent<NodeDiv>();
    }
}