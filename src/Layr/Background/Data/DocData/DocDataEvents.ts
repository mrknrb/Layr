import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";
import {NodeDivInterface} from "../../../Frame/NodeDiv/NodeDivObject/NodeDivInterface.js";
import {DocDataObject} from "./DocDataObject.js";

export class DocDataEvents {
    onDocChange: TypedEvent<DocDataObject>
    onDelete: TypedEvent<NodeDivInterface>

    constructor() {
        this.onDelete = new TypedEvent<NodeDivInterface>();
        this. onDocChange=new TypedEvent<DocDataObject>()
    }
}