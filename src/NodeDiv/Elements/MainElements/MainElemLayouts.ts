import {Layouts} from "../Layouts";
import {MainElem} from "./MainElem";

export abstract class MainElemLayouts {

    static newLayout(mainElem: MainElem, layout: Layouts) {
        this.deleteLayout(mainElem)
        mainElem.element.style.backgroundColor = mainElem.nodeData.layoutData.all.color
        mainElem.element.style.borderStyle = "solid"

        mainElem.element.style.minWidth = "100px"
        mainElem.element.style.minHeight = "40px"
        if (layout == Layouts.root) {
            this.layoutRoot(mainElem)
        } else if (layout == Layouts.absolute) {
            this.layoutAbsolute(mainElem)
        }else if (layout == Layouts.static) {
            this.layoutAbsolute(mainElem)
        }
    }

    private static deleteLayout(mainElem: MainElem) {
        mainElem.element.removeAttribute("style")

    }


    private static layoutRoot(mainElem: MainElem) {
        mainElem.element.style.position = "relative"
        mainElem.element.style.width = "100%"
        mainElem.element.style.height = "6ch"
        mainElem.element.style.display = "flex"
        mainElem.element.style.flexFlow = "column"
    }

    private static layoutAbsolute(mainElem: MainElem) {
        mainElem.element.style.height = "fit-content"
        mainElem.element.style.position = "absolute"
        if (mainElem.nodeData.layoutData.absolute.width)
            mainElem.element.style.width = mainElem.nodeData.layoutData.absolute.width
        else
            mainElem.element.style.width = "100px"
        if (mainElem.nodeData.layoutData.absolute.height)
            mainElem.element.style.height = mainElem.nodeData.layoutData.absolute.height
        else
            mainElem.element.style.height = "50px"
        if (mainElem.nodeData.layoutData.absolute.top)
            mainElem.element.style.top = mainElem.nodeData.layoutData.absolute.top
        else
            mainElem.element.style.top = "50px"
        if (mainElem.nodeData.layoutData.absolute.left)
            mainElem.element.style.left = mainElem.nodeData.layoutData.absolute.left
        else
            mainElem.element.style.left = "50px"

        mainElem.element.style.resize = "horizontal"
        mainElem.element.style.display = "flex"
        mainElem.element.style.flexFlow = "column"
        mainElem.element.style.zIndex = "2100000000"
    }


}