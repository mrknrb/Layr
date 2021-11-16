import {ElementTypes} from "./Adatok/ElementTypes.js";
import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {NodeObjectInterface} from "../NodeObject/NodeObjectInterface.js";
import {FieldObject} from "../../../../Background/Data/Doc/Field/FieldObject.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {NodeObjectNormal} from "../NodeObject/NodeObjectNormal.js";
import {NodeStyleObject} from "../../../../Background/Data/Connection/NodeStyleData/NodeStyleObject.js";
import {ElementStyleFinder} from "./Adatok/ElementStyleFinder.js";
import {ElementTypesClassFinder} from "./Adatok/ElementTypesClassFinder.js";
import {ElementStyleBase} from "../../../../Background/Data/Connection/NodeStyleData/ElementStyleBase.js";
import {ElementResizer} from "./ElementResizer/ElementResizer.js";
import {PartsManager} from "../../PartsGeneral/PartsManager.js";


export abstract class ElementBaseClass {
    elementType: ElementTypes
    element: HTMLElement
    nodeObject: NodeObjectInterface
    fieldId: string
    contextMenu: ContextMenu

    partsManager: PartsManager

    constructor(elementType: ElementTypes, nodeObject: NodeObjectInterface, fieldId: string, element: HTMLElement) {
        this.element = element
        this.elementType = elementType
        this.nodeObject = nodeObject
        this.fieldId = fieldId
        this.contextMenu = new ContextMenu(this.element)

    }

    public abstract deleteElement()

    public abstract elementsRefresh()

    eventsInit() {
    }

    elementInsertFullScreen() {
        document.body.appendChild(this.element)
        this.element.style.height = "100%"
        this.element.style.width = "100%"
    }

    getFieldObject(): FieldObject {
        return LayrFind.fieldObject_ByFieldId_DocId(this.fieldId, this.nodeObject.docId)
    }

    getNodeStyleObject_ConnectionLevel_OnlyNonRoot(): NodeStyleObject {
        let nodeObject = this.nodeObject as NodeObjectNormal
        return LayrFind.connection(nodeObject.connectionId).nodeStyleObject
    }

    elementInsertInNode() {
        this.nodeObject.mainElement.element.appendChild(this.element)

    }

    getElementStyle(){

       return ElementStyleFinder.findElementStyleByPriority(this)
    }

    protected abstract elementInit()
}