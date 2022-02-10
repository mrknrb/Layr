import {PartBaseNode_Doc} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNode_Doc.js";
import {NodeObjectBase} from "../../NodeObjectBase.js";
import {ElementTypes} from "../../../Element/Adatok/ElementTypes.js";
import {ContextMElementSubContextMButton} from "../../../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementSubContextMButton.js";
import {ContextMenu} from "../../../../../UIElemek/ContextMenu/ContextMenu.js";
import {ContextMElementInputText} from "../../../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementInputText.js";
import {ContextMElementDropDownStatic} from "../../../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementDropDownStatic.js";
import {ContextMElementClickable} from "../../../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {NodeQuickMenuButton} from "../../../MainElement/NodeQuickMenuButton.js";
import {TypedEvent} from "../../../../../../0Libraries/TypedEvents.js";

export class NodeNewElementPart extends PartBaseNode_Doc {
    masterObject: NodeObjectBase
    static partName = "NodeNewElementPart"
    subContextMenu: ContextMenu = new ContextMenu()
    quickButton: NodeQuickMenuButton = new NodeQuickMenuButton()

    constructor(masterObject: NodeObjectBase) {
        super(masterObject);
        this.contextInit()
    }

    activate() {

        this.quickButton.setColor("green")
        this.quickButton.addImage("0Resources/add.svg")
        this.masterObject.mainElement.nodeQuickButtonsBar.quickMenuElementInsert(this.quickButton)
        this.quickButton.element.addEventListener("click", () => {
            let bounding = this.quickButton.element.getBoundingClientRect()
            this.subContextMenu.contextMenuActivate(bounding.x, bounding.y)
        })

    }

    contextInit() {
        this.partContextMenu = new ContextMenu()
        let contextMenuElementNewNode = new ContextMElementSubContextMButton("New ElementObject")
        this.partContextMenu.contextMenuElementInsert(contextMenuElementNewNode)
        this.subContextMenu.contextMenuHoverInit(contextMenuElementNewNode.element)


        let subContextMenuElementNewNodeName = new ContextMElementInputText("Field Name:")
        this.subContextMenu.contextMenuElementInsert(subContextMenuElementNewNodeName)
        let options: string[] = []
        for (const elementType in ElementTypes) {
            options.push(elementType.toString())
        }

        let subContextMenuElementDropDownStatic = new ContextMElementDropDownStatic("Field Type:", options)
        this.subContextMenu.contextMenuElementInsert(subContextMenuElementDropDownStatic)

        let contextMenuElementClickable = new ContextMElementClickable("New element")
        this.subContextMenu.contextMenuElementInsert(contextMenuElementClickable)
        let hibauzenet = document.createElement("b")
        hibauzenet.innerText = "Fill everything!"
        hibauzenet.style.backgroundColor = "red"
        hibauzenet.style.display = "none"
        this.subContextMenu.element.appendChild(hibauzenet)
        contextMenuElementClickable.clickEvent.on(event => {
            if (!subContextMenuElementDropDownStatic.value || !subContextMenuElementNewNodeName.inputElement.value) {
                hibauzenet.style.display = "block"

            } else {
                this.saveValue({
                    elementType: subContextMenuElementDropDownStatic.value,
                    fieldName: subContextMenuElementNewNodeName.inputElement.value
                })
                hibauzenet.style.display = "none"
                subContextMenuElementNewNodeName.resetValue()
                subContextMenuElementDropDownStatic.resetValue()
                this.subContextMenu.contextMenuInVisible()
            }


        })
    }

    nodeQuickButtonInit() {


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