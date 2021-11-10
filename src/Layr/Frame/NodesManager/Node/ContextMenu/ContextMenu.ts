import {ElementBaseClass} from "../Elements/ElementBaseClass.js";
import {ContextMenuElementBase} from "./ContextMenuElementBase.js";
import {ContextMenuElementGroup} from "./ContextMenuElementGroup.js";

export class ContextMenu {
    htmlElement: HTMLElement
    contextMenuMainElement: HTMLDivElement
    contextMenuElements: Map<string, ContextMenuElementBase>
    contextMenuElementGroups: Map<string, ContextMenuElementGroup>

    constructor(htmlElementOnClick: HTMLElement) {
        this.htmlElement = htmlElementOnClick
        this.contextMenuElements = new Map<string, ContextMenuElementBase>()
        this.contextMenuElementGroups = new Map<string, ContextMenuElementGroup>()
        this.contextMenuInit()
        this.contextMenuRightClickInit()

    }

    contextMenuInit() {

        this.contextMenuMainElement = document.createElement("div")
        let style = this.contextMenuMainElement.style

        style.backgroundColor = "#e1e1e1"
        style.border = "solid"
        style.borderWidth = "1px"
        style.width = "120px"
        style.height = "fit-content"
        style.minHeight = "20px"
        style.position = "fixed"
        style.zIndex = "10001"
        style.overflowX = "hidden"
        style.overflowY = "auto"
    }

    GetOrSetContextMenuElementGroup(groupName: string) {
        let group = this.contextMenuElementGroups.get(groupName)
        if (!group) {
            group = new ContextMenuElementGroup(groupName)
            this.contextMenuMainElement.appendChild(group.groupElement)
            this.contextMenuElementGroups.set(groupName,group)
        }
        return group
    }

    ContextMenuElementGroupsDeleteIfEmpty() {

        this.contextMenuElementGroups.forEach((group, key) => {

            if (group.isGroupElementEmpty()) {
                group.deleteGroupElement()
                this.contextMenuElementGroups.delete(key)
            }
        })
    }

    public contextMenuVisible(event: MouseEvent) {
        let style = this.contextMenuMainElement.style
        style.left = event.clientX + "px"
        style.top = event.clientY + "px"
        document.body.appendChild(this.contextMenuMainElement)
        let tullogasJobb = window.innerWidth - (event.clientX + this.contextMenuMainElement.getBoundingClientRect().width)

        if (tullogasJobb < 0) {
            style.left = event.clientX + tullogasJobb + "px"
        }
        let tullogasAlul = window.innerHeight - (event.clientY + this.contextMenuMainElement.getBoundingClientRect().height)
        if (tullogasAlul < 0) {
            style.top = event.clientY + tullogasAlul + "px"
        }

    }

    contextMenuInVisible() {
        this.contextMenuMainElement.remove()

        document.body.removeEventListener('click', function (event) {
        }, true);
        document.body.removeEventListener('contextmenu', function (event) {
        }, true);
    }

    private contextMenuRightClickInit() {
        let self = this
        setTimeout(function () {
            self.htmlElement.addEventListener("contextmenu", function (event) {
                self.contextMenuVisible(event)
                event.preventDefault()
                event.stopPropagation()
                var handler = function (event) {
                    // @ts-ignore
                    if (!event.path.find(element => element == self.contextMenuMainElement)) {
                        self.contextMenuInVisible()
                    }
                }
                document.body.addEventListener('click', handler, true);
                document.body.addEventListener('contextmenu', handler, true);

            })
        }, 0);
    }

    contextMenuElementInsert(contextMenuElement: ContextMenuElementBase, contextMenuElementGroupName: string) {
        let group = this.GetOrSetContextMenuElementGroup(contextMenuElementGroupName)

        group.newElement(contextMenuElement)

        contextMenuElement.contextMenu = this
        this.contextMenuElements.set(contextMenuElement.contextMenuElementId, contextMenuElement)

    }

    contextMenuElementRemove(contextMenuElementId: string) {
        let contextMenuElement = this.contextMenuElements.get(contextMenuElementId)
        contextMenuElement.element.remove()

       this. ContextMenuElementGroupsDeleteIfEmpty()

        this.contextMenuElements.delete(contextMenuElementId)


    }

}