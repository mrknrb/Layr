import {MainElementBase} from "./MainElementBase.js";
import {NodeQuickMenuButton} from "./NodeQuickMenuButton.js";
import {QuickMenuBarBase} from "../../../UIElemek/QuickMenu/QuickMenuBarBase.js";

export  class NodeQuickMenuBar extends QuickMenuBarBase{

    mainElementBase: MainElementBase

    constructor(mainElementBase: MainElementBase) {
        super()
        this.mainElementBase = mainElementBase
        this.elementInit()

    }

    private elementInit() {


        this.element.style.height = "25px"
        this.element.style.width = "fit-content"
        this.element.style.backgroundColor = "rgb(196,196,196)"
        this.element.style.position = "absolute"
        this.element.style.right = "-4px"
        this.element.style.top = "-29px"
        this.element.style.flexDirection = "row-reverse"
        this.element.style.padding = "0px"
        this.element.style.zIndex="20000"
        this.element.style.borderRadius = "15px 15px 0px 0px"
        this.element.style.display = "none"
        this.element.style.border = "solid"
        this.element.style.borderBottomWidth = "0px"
        this.mainElementBase.element.appendChild(this.element)


        this.mainElementBase.element.addEventListener("mouseenter", (e) => {
            this.element.style.display = "flex"
        })

        this.mainElementBase.element.addEventListener("mouseleave", (e) => {
            this.element.style.display = "none"
        })

    }


}