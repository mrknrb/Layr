import {NodeObjectBase} from "../../NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {ContextMenuElementBase} from "../../UIElemek/ContextMenu/ContextMenuElementBase.js";
import {ElementObject} from "../../NodesEdgesManager/Node/Element/ElementObject.js";

export class PartNodeCommon {

    static contextMElementToAllChildElement<Type>(nodeObjectBase: NodeObjectBase,contextMenuInsertableCreator:()=>Type,elementFunction:(contextMenuElement:Type,element:ElementObject)=>any) {

        nodeObjectBase.elementsManager.elements?.forEach(element => {
            let contextMElem=contextMenuInsertableCreator()
            element.contextMenu.contextMenuElementInsert(contextMElem)
            elementFunction(contextMElem,element)
        })
        nodeObjectBase.elementsManager.elementCreatedEvent.on(element => {
            let contextMElem=contextMenuInsertableCreator()
            element.contextMenu.contextMenuElementInsert(contextMElem)
            elementFunction(contextMElem,element)
        })
    }
}