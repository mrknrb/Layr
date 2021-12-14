import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ElementTypes} from "../../../Element/Adatok/ElementTypes.js";
import {ContextMElementSubContextMButton} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementSubContextMButton.js";
import {ContextMenu} from "../../../../../ContextMenu/ContextMenu.js";
import {ContextMElementInputText} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementInputText.js";
import {ContextMElementDropDownStatic} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementDropDownStatic.js";
import {ContextMElementClickable} from "../../../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";

export class NodeNewElementPart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase
    static partName = "NodeNewElementPart"

    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
        this.contextInit()
    }

    activate() {

    }

    contextInit() {
        this.partContextMenu=new ContextMenu()
        let contextMenuElementNewNode = new ContextMElementSubContextMButton("New Element")
        this.partContextMenu.contextMenuElementInsert(contextMenuElementNewNode)
        let subContextMenu = new ContextMenu()
        subContextMenu.contextMenuHoverInit(contextMenuElementNewNode.element)

        let subContextMenuElementNewNodeName = new ContextMElementInputText("Field Name:")
        subContextMenu.contextMenuElementInsert(subContextMenuElementNewNodeName)
        let options: string[] = []
        for (const elementType in ElementTypes) {
            options.push(elementType.toString())
        }

        let subContextMenuElementDropDownStatic = new ContextMElementDropDownStatic("Field Type:", options)
        subContextMenu.contextMenuElementInsert(subContextMenuElementDropDownStatic)

        let contextMenuElementClickable = new ContextMElementClickable("New element")
        subContextMenu.contextMenuElementInsert(contextMenuElementClickable)
        contextMenuElementClickable.clickEvent.on(event => {

            this.saveValue({
                elementType: subContextMenuElementDropDownStatic.value,
                fieldName: subContextMenuElementNewNodeName.value
            })
            this.partContextMenu.contextMenuInVisible()
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