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
        let self=this
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
            self.elementOptionsButton.style.display="block"
        })

        this.element.addEventListener("mouseleave", function (e) {
            self.elementOptionsButton.style.display="none"
        })
    }

    abstract layoutApply()

    protected layoutClean() {
        this.element.removeAttribute("style")
    }

    protected layoutDefault() {
        // background-color: #e0f7fa;
        this.element.style.cssText += `
              
                `
    }
    elementOptionsButtonInit(){
        this.elementOptionsButton=document.createElement("div")
        this.elementOptionsButton.style.height ="10px"
        this.elementOptionsButton.style.width ="20px"
        this.elementOptionsButton.style.backgroundColor ="#004d40"
        this.elementOptionsButton.style.position="absolute"
        this.elementOptionsButton.style.right="0%"
        this.elementOptionsButton.style.top="0%"
        this.elementOptionsButton.style.borderRadius="0 0 0px 10px"
        this.elementOptionsButton.style.display="none"

        this.element.appendChild(this.elementOptionsButton)
    }

}











