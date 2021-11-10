import {ElementTypes} from "./ElementTypes.js";
import {ContextMenu} from "../ContextMenu/ContextMenu.js";
import {NodeObjectInterface} from "../NodeObject/NodeObjectInterface.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";


export abstract class ElementBaseClass {
    elementType: ElementTypes
    element: HTMLElement
    nodeObject: NodeObjectInterface
    fieldObject:FieldObject
    elementStyle
    contextMenu: ContextMenu


    constructor(elementType:ElementTypes, nodeObject: NodeObjectInterface, fieldObject, elementStyle,element: HTMLElement) {
        this.element=element
        this.elementType = elementType
        this.nodeObject = nodeObject
        this.fieldObject = fieldObject
        this.elementStyle = elementStyle
        this.contextMenu = new ContextMenu(this.element)
    }

    public abstract deleteElement()

    public abstract refreshData()

    protected abstract elementInit()

    eventsInit() {




    }

    elementInsertFullScreen() {
        document.body.appendChild(this.element)
        this.element.style.height = "100%"
        this.element.style.width = "100%"
    }

    elementInsertInNode() {
        this.nodeObject.mainElement.element.appendChild(this.element)

    }
}