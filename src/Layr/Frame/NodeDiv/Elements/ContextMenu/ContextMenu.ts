import {ElementBaseClass} from "../ElementBaseClass.js";

export class ContextMenu {
    element: ElementBaseClass
    contextMenuMainElement: HTMLDivElement
    contextMenuOn: boolean

    constructor(element: ElementBaseClass) {
        this.element = element

        this.contextMenuOn = false
        this.contextMenuRightClickInit()
    }

    private contextMenuMainElementInit() {
        this.contextMenuMainElement = document.createElement("div")
        let style = this.contextMenuMainElement.style
        style.backgroundColor = "red"
        style.height = "100px"
        style.width = "100px"
        style.position = "absolute"
        style.left = this.element.element.offsetLeft + this.element.element.offsetWidth + "px"
        style.top = this.element.element.offsetTop + "px"
        this.element.element.parentElement.insertBefore(this.contextMenuMainElement, this.element.element)
        console.log(this.contextMenuMainElement)
    }



    contextMenuLoad() {
        this.contextMenuOn = true
        this.contextMenuMainElementInit()
    }

    contextMenuUnload() {
        this.contextMenuOn = false
        this.contextMenuMainElement.remove()
    }

    private contextMenuRightClickInit() {
        let self = this
        setTimeout(function () {
            self.element.element?.addEventListener("contextmenu", function (event) {
                self.contextMenuLoad()
                event.preventDefault()
                var handler = function (event) {
                    // @ts-ignore
                    if (!event.path.find(element => element == self.contextMenuMainElement)) {
                        self.contextMenuUnload()
                        document.body.removeEventListener('click', function (event) {
                        }, true);
                        document.body.removeEventListener('contextmenu', function (event) {
                        }, true);
                    }
                }
                document.body.addEventListener('click' , handler, true);
                document.body.addEventListener('contextmenu', handler, true);

            })
        }, 0);
    }

}