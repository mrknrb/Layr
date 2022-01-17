import {MainElementBase} from "./MainElementBase.js";
import {NodeQuickButton} from "./NodeQuickButton.js";

export class NodeQuickButtonsBar {

    element: HTMLDivElement = document.createElement("div")
    mainElementBase: MainElementBase

    constructor(mainElementBase: MainElementBase) {
        this.mainElementBase = mainElementBase
        this.elementInit()

    }

    private elementInit() {


        this.element.style.height = "25px"
        this.element.style.width = "fit-content"
        this.element.style.backgroundColor = "rgba(196,196,196,0.78)"
        this.element.style.position = "absolute"
        this.element.style.right = "0px"
        this.element.style.top = "-29px"
        this.element.style.gap = "4px"
        this.element.style.padding = "0px 4px 0px 4px"
        this.element.style.borderRadius = "10px 10px 0px 0px"
        this.element.style.display = "none"
        this.element.style.flexDirection="row-reverse"
        this.element.style.zIndex="20000"
        this.mainElementBase.element.appendChild(this.element)


        this.mainElementBase.element.addEventListener("mouseenter", (e) => {
            this.element.style.display = "flex"
        })

        this.mainElementBase.element.addEventListener("mouseleave", (e) => {
            this.element.style.display = "none"
        })

    }

    public quickButtonInsert(nodeQuickButton: NodeQuickButton) {
        this.element.appendChild(nodeQuickButton.element)
    }


}