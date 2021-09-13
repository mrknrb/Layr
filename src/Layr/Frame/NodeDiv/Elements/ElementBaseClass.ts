import {ElementTypes} from "./ElementTypes.js";
import {ContextMenu} from "./ContextMenu/ContextMenu.js";
import {NodeDivInterface} from "../NodeDivObject/NodeDivInterface.js";
import {DocFieldObject} from "../../../Background/Data/DocData/DocFieldObject.js";


export abstract class ElementBaseClass {
    elementType: ElementTypes
    element: HTMLElement
    nodeDiv: NodeDivInterface
    docFieldObject:DocFieldObject
    elementSettings
    contextMenu: ContextMenu

    public abstract deleteElement()

    public abstract refreshData()

    protected abstract elementInit()

    constructor(elementType: ElementTypes, nodeDiv: NodeDivInterface, docFieldObject, elementSettings) {

        this.elementType = elementType
        this.nodeDiv = nodeDiv
        this.docFieldObject = docFieldObject
        this.elementSettings = elementSettings
        this.contextMenu = new ContextMenu(this)
    }

    eventsInit() {




    }

    elementInsertFullScreen() {
        document.body.appendChild(this.element)
        this.element.style.height = "100%"
        this.element.style.width = "100%"
    }

    elementInsertInNodeDiv() {
        this.nodeDiv.mainElement.element.appendChild(this.element)

    }
}