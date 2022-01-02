import {FieldData} from "../Layr/DocsConnsManager/Data/Doc/Field/FieldData.js";
import {DocData} from "../Layr/DocsConnsManager/Data/Doc/Doc/DocData.js";
import {TypedEvent} from "../0Libraries/TypedEvents.js";

export class MrkLibrary {
    static dragElement(draggingElement: HTMLElement, moveableElement: HTMLElement, kikapcsolas: boolean = false, gridSize: number = 1) {
        let megmozdultEvent = new TypedEvent()
        let posNewDistanceX = 0, posNewDistanceY = 0, posStartX = 0, posStartY = 0, elementStartX = 0, elementStartY = 0
        if (kikapcsolas) {
            draggingElement.removeEventListener("mousedown", dragMouseDown)
        } else {
            draggingElement.addEventListener("mousedown", dragMouseDown)
        }

        function dragMouseDown(e: MouseEvent) {
            e = e || window.event
            e.preventDefault()

            // get the mouse cursor position at startup:
            posStartX = e.clientX
            posStartY = e.clientY
            elementStartX = moveableElement.offsetLeft
            elementStartY = moveableElement.offsetTop
            document.addEventListener("mouseup", closeDragElement)
            // call a function whenever the cursor moves:
            document.addEventListener("mousemove", elementDrag)
        }

        function elementDrag(e: MouseEvent) {
            e = e || window.event
            e.preventDefault()
            // calculate the new cursor position:
            posNewDistanceX = e.clientX - posStartX
            posNewDistanceY = e.clientY - posStartY

            moveableElement.style.top = (Math.round((elementStartY + posNewDistanceY) / gridSize) * gridSize) + "px"
            moveableElement.style.left = (Math.round((elementStartX + posNewDistanceX) / gridSize) * gridSize) + "px"

        }

        function closeDragElement() {

            // stop moving when mouse button is released:
            document.removeEventListener("mouseup", closeDragElement)
            document.removeEventListener("mousemove", elementDrag)
            megmozdultEvent.emit("")
        }

        return megmozdultEvent
    }


    static grabInit(elementDiv: HTMLDivElement) {

        let pos = {top: 0, left: 0, x: 0, y: 0}

        const mouseDownHandler = function (e: MouseEvent) {
            //  e.stopPropagation()
            // e = e || window.event
            e.stopPropagation()
            //e.preventDefault()
            pos = {
                left: elementDiv.scrollLeft,
                top: elementDiv.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            }
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)

        }
        const mouseMoveHandler = function (e: MouseEvent) {
            // e = e || window.event
            e.preventDefault()

            // How far the mouse has been moved
            const dx = e.clientX - pos.x
            const dy = e.clientY - pos.y

            // Move the object
            elementDiv.scrollTop = pos.top - dy
            elementDiv.scrollLeft = pos.left - dx
        }

        const mouseUpHandler = function () {
            //TODO event es mentes
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }
        elementDiv.addEventListener('mousedown', mouseDownHandler)


    }


    static cssPreventInit() {
        let cssPreventNodeModification = document.createElement("style")
        cssPreventNodeModification.innerText = ".NodeDivMrkS * {all: revert;  * {    all: unset;  }}"
        document.body.appendChild(cssPreventNodeModification)
    }

    static htmlToElement(html: string) {
        let template = document.createElement('template');
        html = html.trim(); // Never return a text nodeObject of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    static docFieldKereso(docFieldName: string, docData: DocData) {
        let docFieldKeresett = new FieldData()
        docData.fieldsData.forEach(function (docField) {
            if (docField.fieldName == docFieldName) {
                docFieldKeresett = docField
            }
        })
        return docFieldKeresett
    }

    static forEachFieldInObject(object: Object, callback: (elementKey: string) => any) {
        for (const elementKey2 in object) {
            if (Object.prototype.hasOwnProperty.call(object, elementKey2)) {
                callback(elementKey2)
            }
        }
    }

    static contextMenuInvisibleIfBackGroundClickInit() {
        let backgroundClickEvent = new TypedEvent()

        // @ts-ignore
        document.backgroundClickEvent = backgroundClickEvent
        var handler = (event: any) => {
            if (!event.path.find((element: any) => {
                if (element == document || element == window) {

                } else {
                    return element.classList.contains("ContextMenuLayr")
                }
            })) {

                backgroundClickEvent.emit(true)
            }
        }
        document.body.addEventListener('click', handler, true);
        document.body.addEventListener('contextmenu', handler, true);
    }

    static randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }


    static resizeElement(element: HTMLElement, BORDER_SIZE: number = 4, resizeType: ResizeType, gridSize: number = 1) {


        let resizeEvent = new TypedEvent()
        // yx ---------------------------------------------------------------------------------------------------------------
        let posNewDistanceX = 0, posStartX = 0, elementStartX = 0

        let mouseDownListenerHorizontal = (e: MouseEvent) => {
            if (e.offsetX > element.clientWidth - BORDER_SIZE) {
                posStartX = e.clientX
                elementStartX = element.clientWidth
                resizeInProgress = true
                document.addEventListener("mousemove", resizeHorizontal, false);
            }
        }
        let resizeHorizontal = (e: MouseEvent) => {
            e.preventDefault()
            posNewDistanceX = e.clientX - posStartX
            let elementBorderX = element.offsetWidth - element.clientWidth
            element.style.width = (Math.round((elementStartX + posNewDistanceX) / gridSize) * gridSize) - elementBorderX + 2 + "px"
        }
        // yx ---------------------------------------------------------------------------------------------------------------
        let posNewDistanceY = 0, posStartY = 0, elementStartY = 0
        let mouseDownListenerVertical = (e: MouseEvent) => {
            if (e.offsetY > element.clientHeight - BORDER_SIZE) {
                posStartY = e.clientY
                elementStartY = element.clientHeight
                resizeInProgress = true
                document.addEventListener("mousemove", resizeVertical, false);
            }
        }
        let resizeVertical = (e: MouseEvent) => {
            e.preventDefault()
            posNewDistanceY = e.clientY - posStartY
            let elementBorderY = element.offsetHeight - element.clientHeight
            element.style.height = (Math.round((elementStartY + posNewDistanceY) / gridSize) * gridSize) - elementBorderY + 2 + "px"
        }

        // yx ---------------------------------------------------------------------------------------------------------------
        let resizeInProgress = false

        element.addEventListener("mousedown", function (e) {
            if (resizeType == ResizeType.horizontal || resizeType == ResizeType.both) {
                mouseDownListenerHorizontal(e)
            }
            if (resizeType == ResizeType.vertical || resizeType == ResizeType.both) {
                mouseDownListenerVertical(e)
            }


        }, false);

        document.addEventListener("mouseup", function () {
            document.body.style.cursor = ""
            if (resizeType == ResizeType.horizontal || resizeType == ResizeType.both) {
                document.removeEventListener("mousemove", resizeHorizontal, false);
            }
            if (resizeType == ResizeType.vertical || resizeType == ResizeType.both) {
                document.removeEventListener("mousemove", resizeVertical, false);
            }
            if (resizeInProgress) {
                resizeInProgress = false
                resizeEvent.emit(true)
            }

        }, false);
        // yx ---------------------------------------------------------------------------------------------------------------
        element.addEventListener("mousemove", function (e) {
            if (resizeType == ResizeType.horizontal) {
                if (e.offsetX >= element.clientWidth - BORDER_SIZE) {
                    document.body.style.cursor = "w-resize"
                } else {
                    console.log(resizeInProgress)
                    resizeInProgress? document.body.style.cursor = "w-resize": document.body.style.cursor = ""
                }
            }
            if (resizeType == ResizeType.vertical) {
                if (e.offsetY >= element.clientHeight - BORDER_SIZE) {
                    element.style.cursor = "n-resize"
                } else {
                    if (!resizeInProgress) element.style.cursor = ""

                }
            }
            if (resizeType == ResizeType.both) {
                if (e.offsetX >= element.clientWidth - BORDER_SIZE && (e.offsetY >= element.clientHeight - BORDER_SIZE)) {
                    element.style.cursor = "se-resize"
                } else if (e.offsetX >= element.clientWidth - BORDER_SIZE) {
                    element.style.cursor = "w-resize"
                } else if (e.offsetY >= element.clientHeight - BORDER_SIZE) {
                    element.style.cursor = "n-resize"
                } else {

                    if (!resizeInProgress) element.style.cursor = ""
                }


            }
        }, false);
        // yx ---------------------------------------------------------------------------------------------------------------
        element.addEventListener("mouseleave", function (e) {
            resizeInProgress? document.body.style.cursor = "w-resize": document.body.style.cursor = ""

        }, false);

        return resizeEvent

    }


    static mousePositionInit() {
        document.addEventListener("mousemove", ev => {
            mousePositionMrk = ev
        })
    }

    static emptyObjectCheck(obj: Object) {
        return Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    }


}


export let mousePositionMrk: MouseEvent

export enum ResizeType {
    horizontal = "horizontal",
    vertical = "vertical",
    both = "both",
}





















