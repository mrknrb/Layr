import {Layouts} from "../Layouts";
import {MainElement} from "./MainElement";

export class MainElementLayouts {
    mainElem: MainElement

    constructor(mainElem: MainElement) {
        this.mainElem = mainElem
    }

    newLayout(layout: Layouts) {
        this.deleteLayout()
        this.mainElem.element.style.backgroundColor = this.mainElem.nodeData.layoutData.all.color
        this.mainElem.element.style.borderStyle = "solid"

        this.mainElem.element.style.minWidth = "100px"
        this.mainElem.element.style.minHeight = "40px"
        if (layout == Layouts.root) {
            this.layoutRoot()
        } else if (layout == Layouts.absolute) {
            this.layoutAbsolute()
        } else if (layout == Layouts.static) {
            this.layoutAbsolute()
        }
    }

    private deleteLayout() {
        this.mainElem.element.removeAttribute("style")

    }


    private layoutRoot() {
        this.mainElem.element.style.position = "relative"
        this.mainElem.element.style.width = "100%"
        this.mainElem.element.style.height = "6ch"
        this.mainElem.element.style.display = "flex"
        this.mainElem.element.style.flexFlow = "column"
    }

    private layoutAbsolute() {

        this.mainElem.element.style.height = "fit-content"
        this.mainElem.element.style.position = "absolute"
        if (this.mainElem.nodeData.layoutData.absolute.width)
            this.mainElem.element.style.width = this.mainElem.nodeData.layoutData.absolute.width
        else
            this.mainElem.element.style.width = "100px"
        if (this.mainElem.nodeData.layoutData.absolute.height)
            this.mainElem.element.style.height = this.mainElem.nodeData.layoutData.absolute.height
        else
            this.mainElem.element.style.height = "50px"
        if (this.mainElem.nodeData.layoutData.absolute.top)
            this.mainElem.element.style.top = this.mainElem.nodeData.layoutData.absolute.top
        else
            this.mainElem.element.style.top = "50px"
        if (this.mainElem.nodeData.layoutData.absolute.left)
            this.mainElem.element.style.left = this.mainElem.nodeData.layoutData.absolute.left
        else
            this.mainElem.element.style.left = "50px"

        this.mainElem.element.style.resize = "horizontal"
        this.mainElem.element.style.display = "flex"
        this.mainElem.element.style.flexFlow = "column"
        this.mainElem.element.style.zIndex = "2100000000"
    }


}