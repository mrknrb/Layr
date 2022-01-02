import {ElementTypes} from "./Adatok/ElementTypes.js";
import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {FieldObject} from "../../../DocsConnsManager/Data/Doc/Field/FieldObject.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {NodeObjectNormal} from "../NodeObject/NodeObjectNormal.js";
import {NodeCDataObject} from "../../../DocsConnsManager/Data/Conn/NodeCData/NodeCDataObject.js";
import {ElementCDataFinder} from "./Adatok/ElementCDataFinder.js";
import {SMPManager} from "../../../SMP/SMPLayr/SMPManager.js";
import {SMPMasterObjectInterface} from "../../../SMP/SMPLayr/SMPMasterObjectInterface.js";


export abstract class Element implements SMPMasterObjectInterface {
    elementType: ElementTypes
    element: HTMLElement
    nodeObject: NodeObjectBase
    fieldId: string
    contextMenu: ContextMenu

    smpManager: SMPManager

    constructor(elementType: ElementTypes, nodeObject: NodeObjectBase, fieldId: string, element: HTMLElement) {
        this.element = element
        this.elementType = elementType
        this.nodeObject = nodeObject
        this.fieldId = fieldId
        this.contextMenu = new ContextMenu()
        this.contextMenu.contextMenuRightClickInit(this.element)
        this.nodeObject.elementsManager.elementCreatedEvent.emit(this)
    }

    public abstract deleteElement()

    public abstract elementsRefresh()

    eventsInit() {
    }

    elementInsertFullScreenOrNode(fullScreen: boolean) {
        if (fullScreen) {
            document.querySelector("#workScreenDiv").appendChild(this.element)
            this.element.style.height = "100%"
            this.element.style.width = "100%"
        } else {
            this.nodeObject.mainElement.element.appendChild(this.element)
        }
    }

    getFieldObject(): FieldObject {
        return LayrFind.fieldObject_ByFieldId_DocId(this.fieldId, this.nodeObject.docId)
    }

    getNodeCDataObject_ConnLevel_OnlyNonRoot(): NodeCDataObject {
        let nodeObject = this.nodeObject as NodeObjectNormal
        return LayrFind.conn(nodeObject.connId).nodeCDataObject
    }


    getElementCData() {

        return ElementCDataFinder.findElementCDataByPriority(this)
    }

    protected abstract elementInit()
}