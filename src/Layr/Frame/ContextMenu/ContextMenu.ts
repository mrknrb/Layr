import {ContextMenuElementBase} from "./ContextMenuElementBase.js";
import {ContextMenuElementGroup} from "./ContextMenuElementGroup.js";

export class ContextMenu {
    htmlElement: HTMLElement
    contextMenuMainElement: HTMLDivElement
    contextMenuElements: Map<string, ContextMenuElementBase>
    contextMenuElementGroups: Map<string, ContextMenuElementGroup>

    constructor() {
        this.contextMenuElements = new Map<string, ContextMenuElementBase>()
        this.contextMenuElementGroups = new Map<string, ContextMenuElementGroup>()
        this.contextMenuInit()

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
            this.contextMenuElementGroups.set(groupName, group)
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

    public contextMenuVisible(coordinateX: number, coordinateY: number) {

        let style = this.contextMenuMainElement.style
        style.left = coordinateX + "px"
        style.top = coordinateY + "px"
        document.body.appendChild(this.contextMenuMainElement)
        let tullogasJobb = window.innerWidth - (coordinateX + this.contextMenuMainElement.getBoundingClientRect().width)

        if (tullogasJobb < 0) {
            style.left = coordinateX + tullogasJobb + "px"
        }
        let tullogasAlul = window.innerHeight - (coordinateY + this.contextMenuMainElement.getBoundingClientRect().height)
        if (tullogasAlul < 0) {
            style.top = coordinateY + tullogasAlul + "px"
        }

    }

    public contextMenuRightClickInit(htmlElementOnClick: HTMLElement) {

        this.htmlElement = htmlElementOnClick
        let self = this
        setTimeout(() => {
            self.htmlElement.addEventListener("contextmenu", (event) => {
                let coordinateY = event.clientY
                let coordinateX = event.clientX
                event.preventDefault()
                event.stopPropagation()
                this.contextMenuActivate(coordinateX, coordinateY)
            })
        }, 0);
    }

    contextMenuInVisible() {
        this.contextMenuMainElement.remove()

        document.body.removeEventListener('click', function (event) {
        }, true);
        document.body.removeEventListener('contextmenu', function (event) {
        }, true);
    }

    contextMenuActivate(coordinateX: number, coordinateY: number) {
        this.contextMenuVisible(coordinateX, coordinateY)

        var handler = (event) => {
            // @ts-ignore
            if (!event.path.find(element => element == self.contextMenuMainElement)) {
                this.contextMenuInVisible()
            }
        }
        document.body.addEventListener('click', handler, true);
        document.body.addEventListener('contextmenu', handler, true);

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

        this.ContextMenuElementGroupsDeleteIfEmpty()

        this.contextMenuElements.delete(contextMenuElementId)


    }

}