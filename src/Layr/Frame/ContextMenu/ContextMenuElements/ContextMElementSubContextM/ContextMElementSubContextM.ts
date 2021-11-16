import {ContextMenuElementBase} from "../../ContextMenuElementBase.js";
import {ContextMenu} from "../../ContextMenu.js";

export class ContextMElementSubContextM extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    subContextMenu: ContextMenu

    constructor(contextMenu: ContextMenu, elementName: string, subContextMenu: ContextMenu) {
        super(contextMenu, elementName);
        this.subContextMenu = subContextMenu
        this.elementInitSubContextMenu()
    }

    elementInitSubContextMenu() {

        this.element.style.width = "100%"
        this.element.style.height = "fit-content"
        let textElement = document.createElement("b")
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "2px"
        textElement.innerText = this.elementName

        this.element.appendChild(textElement)
        this.element.addEventListener("mouseenter", (event) => {
            let elementBounding=this.element. getBoundingClientRect()
          let  coordinateX=elementBounding.left+elementBounding.width
            let  coordinateY=elementBounding.top
           this.subContextMenu.contextMenuActivate(coordinateX,coordinateY)
        })
        this.element.addEventListener("mouseleave", (event) => {
           
            this.contextMenu.contextMenuInVisible()
        })


    }


}