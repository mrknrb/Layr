import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {ContextMElementSubContextM} from "../../../ContextMenu/ContextMenuElements/ContextMElementSubContextM.js";
import {ContextMElementInputText} from "../../../ContextMenu/ContextMenuElements/ContextMElementInputText.js";
import {ContextMElementDropDownStatic} from "../../../ContextMenu/ContextMenuElements/ContextMElementDropDownStatic.js";
import {ElementTypes} from "../Element/Adatok/ElementTypes.js";
import {ContextMElementClickable} from "../../../ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {NodeNewElementPart} from "../NodeObject/NodeParts/NodeNewElementPart.js";
import {NodePartsClassList} from "../NodeObject/NodeParts/NodePartsClassList.js";

export class MainElementContextMManager {


    contextMenu: ContextMenu
    nodeObject: NodeObjectBase

    constructor(nodeObject: NodeObjectBase) {
        this.nodeObject = nodeObject
        this.contextMenu = new ContextMenu(false, this.nodeObject.mainElement.element)

       // this.NewNodeContextInit()
    }

    NewNodeContextInit() {

        let self = this
        let contextMenuElementNewNode = new ContextMElementSubContextM(this.contextMenu, "New Element")
        this.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")
        let subContextMenu = new ContextMenu(true, contextMenuElementNewNode.element)
        let subContextMenuElementNewNodeName = new ContextMElementInputText(this.contextMenu, "Field Name:")
        subContextMenu.contextMenuElementInsert(subContextMenuElementNewNodeName, "Node")
        let options: string[] = []
        for (const elementType in ElementTypes) {
            options.push(elementType.toString())
        }

        let subContextMenuElementDropDownStatic = new ContextMElementDropDownStatic(this.contextMenu, "Field Type:", options)
        subContextMenu.contextMenuElementInsert(subContextMenuElementDropDownStatic, "Node")

        let contextMenuElementClickable = new ContextMElementClickable(this.contextMenu, "New element")
        subContextMenu.contextMenuElementInsert(contextMenuElementClickable, "Node")
        contextMenuElementClickable.clickEvent.on(event => {
            let a = self.nodeObject.nodePartsManager.parts.NodeNewElementPart
            a.saveValue({
                elementType: subContextMenuElementDropDownStatic.value,
                fieldName: subContextMenuElementNewNodeName.value
            })
            self.contextMenu.contextMenuInVisible()
            subContextMenu.contextMenuInVisible()
        })


        /*
        let contextMenuElementNewNode = new ContextMElementClickable(this.contextMenu, "New Element", (contextElement) => {
           let doc= LayrFind.doc(this.nodeObject.docId)

        })
        this.contextMenu.contextMenuElementInsert(contextMenuElementNewNode, "Node")
        */
    }

    elementChange_fieldDataUpdate_Init() {
        let self = this
        this.element.addEventListener("keyup", function (e) {
            self.getFieldObject().fieldData.data.content = self.element.value
            self.getFieldObject().fieldEvents.onFieldChange.emit()
        })
    }

    fieldDataChange_ElementUpdate_Init() {
        this.getFieldObject().fieldEvents.onFieldChange.on(() => this.element.value = this.getFieldObject().fieldData.data.content)
    }
}