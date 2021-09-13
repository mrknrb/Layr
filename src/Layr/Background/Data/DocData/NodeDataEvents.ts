import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";

export class NodeDataEvents {

    onNodeChange: TypedEvent<string>
    onNodeDocFieldSettingChange: TypedEvent<{ nodeId: string, dodFieldName: string }>

    constructor() {
        this.onNodeChange = new TypedEvent<string>()
        this.onNodeDocFieldSettingChange = new TypedEvent<{ nodeId: string, dodFieldName: string }>()
    }

}