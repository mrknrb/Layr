import {ElementTypes} from "../../../../NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";

export class FieldData {
    fieldId: string
    fieldName: string
    elementType: ElementTypes
    partsData: any

    constructor(fieldName: string,
                elementType: ElementTypes) {
        this.fieldName = fieldName
        this.elementType = elementType
        this.fieldId = Math.random().toString()
        this.partsData = {}
    }
}