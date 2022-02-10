import {NodeObjectBase} from "../NodeObject/NodeObjectBase.js";
import {ContextMenu} from "../../../UIElemek/ContextMenu/ContextMenu.js";
import {NodeQuickMenuBar} from "./NodeQuickMenuBar.js";


export abstract class MainElementBase {
    element: HTMLDivElement= document.createElement("div")
    nodeObject: NodeObjectBase
    elementOptionsButton: HTMLDivElement
    contextMenu: ContextMenu
    nodeQuickButtonsBar: NodeQuickMenuBar = new NodeQuickMenuBar(this)

    constructor(nodeObject) {
        this.nodeObject = nodeObject
        this.elementInit()
       // this.elementOptionsButtonInit()


        this.contextMenu = new ContextMenu()
        this.contextMenu.contextMenuRightClickInit(this.element)

    }


    private elementInit() {
        let self = this
        this.element.classList.add("LayrMainElement")

        this.element.addEventListener("contextmenu", function (e) {
            e.preventDefault()
            e.stopPropagation()

        })
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })

    }

    abstract layoutApply()





}











