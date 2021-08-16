import {ElementTypes} from "./ElementTypes.js";
import {NodeDivBase} from "../NodeDivBase.js";


export abstract class ElementBaseClass {
    elementType: ElementTypes
    element
    nodeDiv:NodeDivBase
    elementData
    elementSettings
    public abstract deleteElement()

    public abstract refreshData()

    constructor(elementType: ElementTypes, nodeDiv:NodeDivBase, elementData, elementSettings) {
        this.elementType = elementType
        this.nodeDiv=nodeDiv
        this.elementData=elementData
        this.elementSettings=elementSettings

    }

}