import {ElementBaseClass} from "../ElementBaseClass.js";
import {ResizeTypes} from "./ResizeTypes.js";

export class HTMLElementResizer {
    element: HTMLElement
    resizeObserver
    ActiveResizeType: ResizeTypes

    constructor(element: HTMLElement) {
        this.element = element
        let self = this

        // @ts-ignore
        this.resizeObserver = new ResizeObserver(function () {

                self.adjustSize()

        }).observe(this.element)
    }


    public resizeActivate(resizeType: ResizeTypes) {
        this.ActiveResizeType = resizeType
        if (resizeType == ResizeTypes.autoY) {
            this.element.style.resize = "none"
        } else if (resizeType == ResizeTypes.autoX) {

            this.element.style.resize = "none"
        }else if (resizeType == ResizeTypes.autoXY) {

            this.element.style.resize = "none"
        } else if (resizeType == ResizeTypes.manual) {
            this.element.style.resize = "vertical"
        } else if (resizeType == ResizeTypes.oneLine) {
            this.element.style.resize = "none"
            this.element.style.height = "2ch"
        }
    }

    public adjustSize() {

        if (this.ActiveResizeType == ResizeTypes.autoY || this.ActiveResizeType == ResizeTypes.autoXY) {
            this.element.style.height = "5px"
            this.element.style.height = (this.element.scrollHeight - 3) + "px"
        }
        if (this.ActiveResizeType == ResizeTypes.autoX || this.ActiveResizeType == ResizeTypes.autoXY) {
            this.element.style.width = "100px"

            this.element.style.width = (this.element.scrollWidth ) + "px"
        }
    }


}

