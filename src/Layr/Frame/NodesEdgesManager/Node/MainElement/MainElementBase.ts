import {NodeObjectInterface} from "../NodeObject/NodeObjectInterface.js";
import {ContextMenu} from "../../../ContextMenu/ContextMenu.js";
import {MainElementContextMManager} from "./MainElementContextMManager.js";


export abstract class MainElementBase {
    element: HTMLDivElement
    elementKeret: HTMLDivElement
    nodeObject: NodeObjectInterface
    elementOptionsButton: HTMLDivElement
    contextMenuManager:MainElementContextMManager
    constructor(nodeObject) {
        this.nodeObject = nodeObject
        this.elementInit()
        this.elementOptionsButtonInit()

        this.contextMenuManager = new MainElementContextMManager(this)

    }


    private elementInit() {
        let self = this
        this.element = document.createElement("div")
        this.element.classList.add("LayrMainElement")

        this.element.addEventListener("contextmenu", function (e) {
            e.preventDefault()
            e.stopPropagation()

        })
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })

        this.element.addEventListener("mouseenter", function (e) {
            self.elementOptionsButton.style.display = "block"
        })

        this.element.addEventListener("mouseleave", function (e) {
            self.elementOptionsButton.style.display = "none"
        })
    }

    abstract layoutApply()

    protected layoutClean() {
        this.element.removeAttribute("style")
    }

    protected layoutDefault() {
        // background-color: #e0f7fa;
        this.element.style.cssText += `   `
    }

    elementOptionsButtonInit() {
        this.elementOptionsButton = document.createElement("div")
        this.elementOptionsButton.style.height = "15px"
        this.elementOptionsButton.style.width = "25px"
        this.elementOptionsButton.style.backgroundColor = "rgba(0,77,64,0.71)"
        this.elementOptionsButton.style.position = "absolute"
        this.elementOptionsButton.style.right = "0px"
        this.elementOptionsButton.style.top = "0px"
        this.elementOptionsButton.style.borderRadius = "0px 0px 0px 10px"
        this.elementOptionsButton.style.display = "none"

        this.element.appendChild(this.elementOptionsButton)
    }



}










