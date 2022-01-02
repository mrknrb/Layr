import {ContextMenuElementBase} from "./ContextMenuElementBase.js";
import {TypedEvent} from "../../0Libraries/TypedEvents.js";

export class ContextMenu extends ContextMenuElementBase {
    htmlElementController!: HTMLElement
    contextMenuElements: Map<string, ContextMenuElementBase>
    // contextMenuElementGroups: Map<string, ContextMenuElementGroupNemHasznalodEgyelore>
    private mouseOverNow: boolean=false

    constructor() {
        super();
        this.contextMenuElements = new Map<string, ContextMenuElementBase>()
        // this.contextMenuElementGroups = new Map<string, ContextMenuElementGroupNemHasznalodEgyelore>()
        this.contextMenuInit()
        this.mouseOverNowInit()
    }

    contextMenuInit() {

        this.element.classList.add("ContextMenuLayr")
        this.element.classList.add("ContextMenuElement")


    }

    /*
        GetOrSetContextMenuElementGroup(groupName?: string) {
            let groupName2
            if (!groupName) {
                groupName2 = "withoutGroup"
            } else {
                groupName2 = groupName
            }
            let group = this.contextMenuElementGroups.get(groupName2)
            if (!group) {
                group = new ContextMenuElementGroupNemHasznalodEgyelore(groupName2)
                this.contextMenuMainElement.appendChild(group.groupElement)
                this.contextMenuElementGroups.set(groupName2, group)
            }
            return group
        }

        private ContextMenuElementGroupsDeleteIfEmpty() {

            this.contextMenuElementGroups.forEach((group, key) => {

                if (group.isGroupElementEmpty()) {
                    group.deleteGroupElement()
                    this.contextMenuElementGroups.delete(key)
                }
            })
        }
    */
    public contextMenuAppearInCoordinates(coordinateX: number, coordinateY: number) {

        let style = this.element.style
        style.display = "block"


        style.left = coordinateX + "px"
        style.top = coordinateY + "px"
        let tullogasJobb = window.innerWidth - (coordinateX + this.element.getBoundingClientRect().width)

        if (tullogasJobb < 0) {
            style.left = coordinateX + tullogasJobb + "px"
        }
        let tullogasAlul = window.innerHeight - (coordinateY + this.element.getBoundingClientRect().height)
        if (tullogasAlul < 0) {
            style.top = coordinateY + tullogasAlul + "px"
        }

    }

    contextMenuVisible() {
        this.element.style.display = "block"

    }

    contextMenuInVisible() {
        this.element.style.display = "none"

        document.body.removeEventListener('click', function (event) {
        }, true);
        document.body.removeEventListener('contextmenu', function (event) {
        }, true);
    }

    contextMenuActivate(coordinateX: number, coordinateY: number) {
        this.contextMenuAppearInCoordinates(coordinateX, coordinateY)

        // @ts-ignore
        let backgroundClickEvent: TypedEvent<any> = document.backgroundClickEvent
        let handler = () => {
            this.contextMenuInVisible()
            //yx majd nezd meg lehet teljesitmenyigenyes
            //  backgroundClickEvent.off(handler)
        }
        backgroundClickEvent.on(handler)
    }

    contextMenuElementInsert(contextMenuElement: ContextMenuElementBase) {
        //yx a groupos reszt egyelore kiszedem
        // , contextMenuElementGroupName?: string
        /*
        let group = this.GetOrSetContextMenuElementGroup(contextMenuElementGroupName)
        group.newElement(contextMenuElement)
        */
        this.element.appendChild(contextMenuElement.element)

        contextMenuElement.parentContextMenu = this
        this.contextMenuElements.set(contextMenuElement.contextMenuElementId, contextMenuElement)

    }

    contextMenuElementRemove(contextMenuElementId: string) {
        let contextMenuElement = this.contextMenuElements.get(contextMenuElementId)
        contextMenuElement?.element.remove()
        // this.ContextMenuElementGroupsDeleteIfEmpty()
        this.contextMenuElements.delete(contextMenuElementId)
    }

    contextMenuElementVisible(contextMenuElementId: string, visible: boolean) {
        let contextMenuElement = this.contextMenuElements.get(contextMenuElementId)
        contextMenuElement?.elementVisible(visible)
    }


    private mouseOverNowInit() {
        this.element.addEventListener("mouseenter", (event) => {
            this.mouseOverNow = true
        })
        this.element.addEventListener("mouseleave", (event) => {
            this.mouseOverNow = false
        })
    }


    contextMenuHoverInit(htmlElementController: HTMLElement) {

        this.element.classList.add("ContextMenuLayrFloating")
        this.htmlElementController = htmlElementController
        this.element.style.position = "fixed"
        // htmlElementController.appendChild(this.element)
        document.body.appendChild(this.element)
        this.contextMenuInVisible()
        let self = this
        setTimeout(() => {
            self.htmlElementController.addEventListener("mouseenter", (event) => {
                let elementBounding = self.htmlElementController.getBoundingClientRect()
                let coordinateX = elementBounding.right - 10
                let coordinateY = elementBounding.top
                self.contextMenuActivate(coordinateX, coordinateY)
            })
            self.htmlElementController.addEventListener("mouseleave", (event) => {
                setTimeout(() => {
                    if (!self.mouseOverNow) self.contextMenuInVisible()
                }, 30)
            })
        }, 0);
    }

    contextMenuRightClickInit(htmlElementController: HTMLElement) {

        this.element.classList.add("ContextMenuLayrFloating")
        this.htmlElementController = htmlElementController
        this.element.style.position = "fixed"
        this.contextMenuInVisible()
        // htmlElementController.appendChild(this.element)
        document.body.appendChild(this.element)
        let self = this
        setTimeout(() => {
            self.htmlElementController.addEventListener("contextmenu", (event) => {
                let coordinateY = event.clientY
                let coordinateX = event.clientX
                event.preventDefault()
                event.stopPropagation()
                this.contextMenuActivate(coordinateX, coordinateY)
            })
        }, 0);
    }

    /*
      contextMenuInsertedInit() {
         // this.htmlElementController.appendChild(this.contextMenuMainElement)

        /* yx lehet nem kell
         insertContextMenu_IfInserted(parentElement: HTMLElement) {
             parentElement.appendChild(this.contextMenuMainElement)
         }
     */

}

export enum ContextMenuTypes {
    hoverMenu = "hoverMenu",
    rightClickMenu = "rightClickMenu",
    insertedMenu = "insertedMenu"

}
