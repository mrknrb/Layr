import {NodeQuickMenuButton} from "../../Layr/NodesEdgesManager/Node/MainElement/NodeQuickMenuButton.js";
import {QuickMenuButtonBase} from "./QuickMenuButtonBase.js";

export class QuickMenuBarBase {

    element: HTMLDivElement = document.createElement("div")

    constructor() {

        this.baseElementInit()
    }

  private  baseElementInit() {

      this.element.style.backgroundColor = "rgba(196,196,196,0.78)"
        this.element.style.gap = "4px"
        this.element.style.padding = "0px 4px 0px 4px"
        this.element.style.display = "flex"
        this.element.style.flexDirection="row-reverse"
    }

    public quickButtonInsert(nodeQuickButton: QuickMenuButtonBase) {
        this.element.appendChild(nodeQuickButton.element)
    }

}