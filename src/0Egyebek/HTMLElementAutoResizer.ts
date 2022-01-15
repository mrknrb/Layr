export class HTMLElementAutoResizer {
    element: HTMLElement
    resizeObserver
    ActiveResizeType: ResizeTypes

    constructor(element: HTMLElement, resizeType: ResizeTypes) {
        this.element = element
        let self = this
        this.ActiveResizeType = resizeType
        // @ts-ignore
        this.resizeObserver = new ResizeObserver(function () {
            self.adjustSize()
        })
        this.  startObserving()
    }


    public adjustSize() {

        if (this.ActiveResizeType == ResizeTypes.autoY || this.ActiveResizeType == ResizeTypes.autoXY) {
            this.element.style.height = "5px"
            this.element.style.height = (this.element.scrollHeight+2) + "px"
        }
        if (this.ActiveResizeType == ResizeTypes.autoX || this.ActiveResizeType == ResizeTypes.autoXY) {
            this.element.style.width = "100px"

            this.element.style.width = (this.element.scrollWidth+2) + "px"
        }
    }
    startObserving(){
        this.resizeObserver.observe(this.element)

    }
    stopObserving(){
        this.resizeObserver.unobserve(this.element)

    }

}

export enum ResizeTypes {
    autoY = "autoY",
    autoXY = "autoXY",
    autoX = "autoX"

}