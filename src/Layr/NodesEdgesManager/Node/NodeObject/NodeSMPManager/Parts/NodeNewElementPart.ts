import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ElementTypes} from "../../../Element/Adatok/ElementTypes.js";
import {ContextMElementSubContextMButton} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementSubContextMButton.js";
import {ContextMenu, ContextMenuTypes} from "../../../../../ContextMenu/ContextMenu.js";
import {ContextMElementInputText} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementInputText.js";
import {ContextMElementDropDownStatic} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementDropDownStatic.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";

export class NodeNewElementPart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase

    static partName="NodeNewElementPart"
    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
    }

    activate() {

        this.contextInit()

    }

    contextInit() {
        let contextMenu = this.masterObject.contextMenu
        let contextMenuElementNewNode = new ContextMElementSubContextMButton( "New Element",contextMenu)
        contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")
        let subContextMenu = new ContextMenu(contextMenuElementNewNode.element, ContextMenuTypes.hoverMenu)
        let subContextMenuElementNewNodeName = new ContextMElementInputText("Field Name:", contextMenu)
        subContextMenu.contextMenuElementInsert(subContextMenuElementNewNodeName, "Node")
        let options: string[] = []
        for (const elementType in ElementTypes) {
            options.push(elementType.toString())
        }

        let subContextMenuElementDropDownStatic = new ContextMElementDropDownStatic("Field Type:", contextMenu, options)
        subContextMenu.contextMenuElementInsert(subContextMenuElementDropDownStatic, "Node")

        let contextMenuElementClickable = new ContextMElementClickable("New element", contextMenu)
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

    deactivate() {

    }

    loadData(fieldId: string) {
        this.masterObject.elementsManager.elementLoad(this.getMasterDataObject().fieldObjects.find(fieldObj => fieldObj.fieldData.fieldId == fieldId))
    }


    saveValue(data: { fieldName: string, elementType: string }) {
        let fieldObject = this.getMasterDataObject().newField(data.fieldName, data.elementType)
        this.valueSync(fieldObject.fieldData.fieldId)

    }

    partName: string;


}