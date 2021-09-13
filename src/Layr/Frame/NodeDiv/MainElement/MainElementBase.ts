import {NodeDivInterface} from "../NodeDivObject/NodeDivInterface.js";


export abstract class MainElementBase {
    element: HTMLDivElement
    nodeDiv: NodeDivInterface
    elementOptionsButton:HTMLDivElement

    constructor(nodeDiv) {
        this.nodeDiv = nodeDiv
        this.elementInit()
       this. elementOptionsButtonInit()
    }

    private elementInit() {
        this.element = document.createElement("div")
        this.element.setAttribute("class", "NodeDivMrkS")
        this.element.addEventListener("contextmenu", function (e) {
            e.preventDefault()
            e.stopPropagation()
        })
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })

        this.element.addEventListener("mouseenter", function (e) {

        })
        this.element.addEventListener("mouseleave", function (e) {

        })
    }

    abstract layoutApply()

    protected layoutClean() {
        this.element.removeAttribute("style")
    }

    protected layoutDefault() {
        this.element.style.cssText += `
                border-style: solid;
                resize: horizontal;
                background-color: antiquewhite;
                min-width: 40px;
                min-height: 20px;              
                height: fit-content;
                width:40px;
                `
    }
    elementOptionsButtonInit(){
        this.elementOptionsButton=document.createElement("div")
        this.elementOptionsButton.style.height ="10px"
        this.elementOptionsButton.style.width ="20px"
        this.elementOptionsButton.style.backgroundColor ="green"
        this.elementOptionsButton.style.position="absolute"
        this.elementOptionsButton.style.right="0%"
        this.elementOptionsButton.style.top="0%"

        this.element.appendChild(this.elementOptionsButton)
    }

}











