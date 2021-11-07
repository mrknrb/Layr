import {ElementBaseClass} from "../Elements/ElementBaseClass.js";

export class ContextMenu {
    elementClass: ElementBaseClass
    contextMenuMainElement: HTMLDivElement

    constructor(elementClass: ElementBaseClass) {
        this.elementClass = elementClass


        this.contextMenuRightClickInit()
    }

    private contextMenuLoad(event: MouseEvent) {
        this.contextMenuMainElement = document.createElement("div")
        let style = this.contextMenuMainElement.style

        style.backgroundColor = "red"
        style.width = "100px"
        style.height = "100px"
        style.position = "fixed"
        style.zIndex = "10001"
        style.left = event.clientX + "px"
        style.top = event.clientY + "px"
        document.body.appendChild(this.contextMenuMainElement)
        let tullogasJobb = window.innerWidth -( event.clientX + this.contextMenuMainElement.getBoundingClientRect().width)

        if (tullogasJobb < 0) {
            style.left = event.clientX + tullogasJobb + "px"
        }
        let tullogasAlul = window.innerHeight -( event.clientY + this.contextMenuMainElement.getBoundingClientRect().height)
        if (tullogasAlul < 0){
            style.top = event.clientY + tullogasAlul + "px"
        }
        //  this.elementClass.element.parentElement.insertBefore(this.contextMenuMainElement, this.elementClass.element)
        console.log(this.contextMenuMainElement)
    }


    private contextMenuRightClickInit() {
        let self = this
        setTimeout(function () {
            self.elementClass.element?.addEventListener("contextmenu", function (event) {
                self.contextMenuLoad(event)
                event.preventDefault()
                event.stopPropagation()
                var handler = function (event) {
                    // @ts-ignore
                    if (!event.path.find(element => element == self.contextMenuMainElement)) {
                        self.contextMenuMainElement.remove()
                        document.body.removeEventListener('click', function (event) {
                        }, true);
                        document.body.removeEventListener('contextmenu', function (event) {
                        }, true);
                    }
                }
                document.body.addEventListener('click', handler, true);
                document.body.addEventListener('contextmenu', handler, true);

            })
        }, 0);
    }

}