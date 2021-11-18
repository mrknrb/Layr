import {PartBaseNode_Doc} from "../../../PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../NodeObjectBase.js";
import {ElementTypes} from "../../Element/Adatok/ElementTypes.js";
import {ContextMElementSubContextM} from "../../../../ContextMenu/ContextMenuElements/ContextMElementSubContextM.js";
import {ContextMenu} from "../../../../ContextMenu/ContextMenu.js";
import {ContextMElementInputText} from "../../../../ContextMenu/ContextMenuElements/ContextMElementInputText.js";
import {ContextMElementDropDownStatic} from "../../../../ContextMenu/ContextMenuElements/ContextMElementDropDownStatic.js";
import {ContextMElementClickable} from "../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";

export class NodeNewElementPart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase

    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
    }

    protected partInit() {

        this.contextInit()

    }

    contextInit() {
        let contextMenu = this.masterObject.mainElement.contextMenuManager.contextMenu
        let contextMenuElementNewNode = new ContextMElementSubContextM(contextMenu, "New Element")
        contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")
        let subContextMenu = new ContextMenu(true, contextMenuElementNewNode.element)
        let subContextMenuElementNewNodeName = new ContextMElementInputText(contextMenu, "Field Name:")
        subContextMenu.contextMenuElementInsert(subContextMenuElementNewNodeName, "Node")
        let options: string[] = []
        for (const elementType in ElementTypes) {
            options.push(elementType.toString())
        }

        let subContextMenuElementDropDownStatic = new ContextMElementDropDownStatic(contextMenu, "Field Type:", options)
        subContextMenu.contextMenuElementInsert(subContextMenuElementDropDownStatic, "Node")

        let contextMenuElementClickable = new ContextMElementClickable(contextMenu, "New element")
        subContextMenu.contextMenuElementInsert(contextMenuElementClickable, "Node")
        contextMenuElementClickable.clickEvent.on(event => {

            this.saveValue({
                elementType: subContextMenuElementDropDownStatic.value,
                fieldName: subContextMenuElementNewNodeName.value
            })
            contextMenu.contextMenuInVisible()
            subContextMenu.contextMenuInVisible()
        })


    }
    partRemove() {

    }
    loadData(fieldId: string) {
        this.masterObject.elementsManager.elementLoad(this.getDataObject().fieldObjects.find(fieldObj => fieldObj.fieldData.fieldId == fieldId))
    }


    saveValue(data: { fieldName: string, elementType: string }) {
        let fieldObject = this.getDataObject().newField(data.fieldName, data.elementType)
        this.valueSync(fieldObject.fieldData.fieldId)

    }


}