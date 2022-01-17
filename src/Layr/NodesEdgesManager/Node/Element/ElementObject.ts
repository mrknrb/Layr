import {ElementTypes} from "./Adatok/ElementTypes.js";
import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {LayrFind} from "../../../../0Egyebek/LayrFind.js";
import {ElementCDataFinder} from "./Adatok/ElementCDataFinder.js";
import {SMPManager} from "../../../SMP/SMPLayr/SMPManager.js";
import {SMPMasterObjectInterface} from "../../../SMP/SMPLayr/SMPMasterObjectInterface.js";
import {SMPSavePart_ElementType} from "../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";
import {SMPSelectorDataStatic} from "../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";


export class ElementObject implements SMPMasterObjectInterface {
    elementType: ElementTypes
    element: HTMLElement
    nodeObject: NodeObjectBase
    fieldId: string
    contextMenu: ContextMenu

    smpManager: SMPManager

    constructor(elementConfigFile: ElementConfigFile, fieldId: string, nodeObjectBase: NodeObjectBase) {

        this.element = document.createElement(elementConfigFile.BaseHTMLElementType)

        this.element.classList.add("LayrElement")
        this.elementType = elementConfigFile.elementType
        this.nodeObject = nodeObjectBase

        this.nodeObject.mainElement.element.appendChild(this.element)
        this.fieldId = fieldId
        this.contextMenu = new ContextMenu()
        this.contextMenu.contextMenuRightClickInit(this.element)
        this.nodeObject.elementsManager.elementCreatedEvent.emit(this)
        this.smpManager = new SMPManager({
            smpSavePart: SMPSavePart_ElementType,
            masterObject: this,
            partsClassArray: elementConfigFile.smpData.partsClassArray,
            smpSelectorDataStaticArray: elementConfigFile.smpData.SMPSelectorDataStaticArray
        })
    }

    public deleteElement() {
    }


    elementInsertFullScreenOrNode(fullScreen: boolean) {
        if (fullScreen) {
            document.querySelector("#workScreenDiv")?.appendChild(this.element)
            this.element.classList.add("LayrFullScreenElement")
        } else {
            this.nodeObject.mainElement.element.appendChild(this.element)
        }
    }

    getFieldObject() {
        return LayrFind.fieldObject_ByFieldId_DocId(this.fieldId, this.nodeObject.docId)
    }


    getElementCData() {
        return ElementCDataFinder.findElementCDataByPriority(this)
    }

}

export interface ElementConfigFile {
    elementType: ElementTypes,
    BaseHTMLElementType: string,
    smpData: {
        partsClassArray: any[],
        SMPSelectorDataStaticArray: SMPSelectorDataStatic[]
    }
}