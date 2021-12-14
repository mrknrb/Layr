import {ContextMenuElementBase} from "./ContextMenuElementBase.js";

export class ContextMenuElementGroupNemHasznalodEgyelore {
    groupName: string
    groupElement: HTMLDivElement
    private groupNameText: HTMLElement
    private groupElementContainer: HTMLDivElement

    constructor(groupName: string) {
        this.groupName = groupName
        this.init()
    }

    init() {


        this.groupElement = document.createElement("div")

        this.groupElement.style.width = "100%"
        this.groupElement.style.height = "fit-content"
        this.groupElement.style.borderBottom = "solid"
        this.groupElement.style.borderWidth = "3px"
        if (this.groupName != "withoutGroup") {

            this.groupNameText = document.createElement("i")
            this.groupNameText.style.fontSize = "9px"
            this.groupNameText.innerText = this.groupName
            this.groupNameText.style.userSelect = "none";
            this.groupNameText.style.cursor = "default"
            this.groupNameText.style.marginLeft = "8px"
            this.groupElement.appendChild(this.groupNameText)
        }
        this.groupElementContainer = document.createElement("div")
        this.groupElementContainer.style.width = "100%"
        this.groupElementContainer.style.height = "fit-content"
        this.groupElement.className="groupElementContainer"
        this.groupElement.appendChild(this.groupElementContainer)

    }

    newElement(contextMenuElementBase: ContextMenuElementBase) {
        this.groupElementContainer.appendChild(contextMenuElementBase.element)

    }

    isGroupElementEmpty(): boolean {
        if (this.groupElementContainer.childNodes.length > 0) {
            console.log()
            return false

        }
        return true


    }

    deleteGroupElement() {
        this.groupElement.remove()

    }


}