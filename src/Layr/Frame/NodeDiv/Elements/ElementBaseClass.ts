import {ElementTypes} from "./ElementTypes.js";
import {NodeDivBase} from "../NodeDiv/NodeDivBase.js";
import {ContextMenu} from "./ContextMenu/ContextMenu.js";


export abstract class ElementBaseClass {
    elementType: ElementTypes
    element: HTMLElement
    nodeDiv: NodeDivBase
    elementData
    elementSettings
    contextMenu
    public abstract deleteElement()

    public abstract refreshData()

    protected abstract elementInit()

    constructor(elementType: ElementTypes, nodeDiv: NodeDivBase, elementData, elementSettings) {

        this.elementType = elementType
        this.nodeDiv = nodeDiv
        this.elementData = elementData
        this.elementSettings = elementSettings
        this. contextMenu = new ContextMenu(this)
    }


}