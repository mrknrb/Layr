import {ElementTypes} from "../../../../Frame/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";

export class FieldData {
    fieldId: string
    fieldName: string
    elementType: ElementTypes
    data: any

    constructor() {
        this.fieldId = Math.random().toString()
        this.data={}
    }


}