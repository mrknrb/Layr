import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";

export class NodeEvents {

    onNodeChange: TypedEvent<string>
    onNodeDocFieldCDataChange: TypedEvent<{ nodeId: string, dodFieldName: string }>

    constructor() {
        this.onNodeChange = new TypedEvent<string>()
        this.onNodeDocFieldCDataChange = new TypedEvent<{ nodeId: string, dodFieldName: string }>()
    }

}