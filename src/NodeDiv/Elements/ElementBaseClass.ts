import {ElementTypes} from "./ElementTypes.js";
import {NodeDiv} from "../NodeDiv.js";


export abstract class ElementBaseClass {
    elementType: ElementTypes
    element
    nodeDiv:NodeDiv
    elementData
    elementSettings
    public abstract deleteElement()

    public abstract refreshData()

    constructor(elementType: ElementTypes,nodeDiv:NodeDiv,elementData,elementSettings) {
        this.elementType = elementType
        this.nodeDiv=nodeDiv
        this.elementData=elementData
        this.elementSettings=elementSettings

    }

}