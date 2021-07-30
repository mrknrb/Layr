import {ElementTypes} from "./ElementTypes";

export abstract class ElementBaseClass {
    elementType: ElementTypes

    public abstract deleteData()

    constructor(elementType: ElementTypes) {
        this.elementType = elementType
    }

}