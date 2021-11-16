import {TypedEvent} from "../../../../../0Libraries/TypedEvents.js";

export class NodeEvents {

    onNodeChange: TypedEvent<string>
    onNodeDocFieldStyleChange: TypedEvent<{ nodeId: string, dodFieldName: string }>

    constructor() {
        this.onNodeChange = new TypedEvent<string>()
        this.onNodeDocFieldStyleChange = new TypedEvent<{ nodeId: string, dodFieldName: string }>()
    }

}