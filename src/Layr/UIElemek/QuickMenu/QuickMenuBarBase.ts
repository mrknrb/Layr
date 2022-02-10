import {NodeQuickMenuButton} from "../../NodesEdgesManager/Node/MainElement/NodeQuickMenuButton.js";
import {QuickMenuButtonBase} from "./QuickMenuButtonBase.js";
import {QuickMenuElementBase} from "./QuickMenuElementBase.js";

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
        this.element.style.flexDirection="row"
    }

    public quickMenuElementInsert(quickMenuElement: QuickMenuElementBase) {
        this.element.appendChild(quickMenuElement.element)
    }



}