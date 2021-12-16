import {FieldData} from "../Layr/DocsConnsManager/Data/Doc/Field/FieldData.js";
import {DocData} from "../Layr/DocsConnsManager/Data/Doc/Doc/DocData.js";
import {TypedEvent} from "../0Libraries/TypedEvents.js";

export class MrkLibrary {
    static dragElement(draggingElement, moveableElement, kikapcsolas) {
        let megmozdultEvent = new TypedEvent()
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
        if (kikapcsolas) {
            draggingElement.onmousedown = null
        } else {
            draggingElement.onmousedown = dragMouseDown
        }

        function dragMouseDown(e) {
            e = e || window.event
            e.preventDefault()

            // get the mouse cursor position at startup:
            pos3 = e.clientX
            pos4 = e.clientY
            document.onmouseup = closeDragElement
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag
        }

        function elementDrag(e) {
            e = e || window.event
            e.preventDefault()
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX
            pos2 = pos4 - e.clientY
            pos3 = e.clientX
            pos4 = e.clientY
            // set the object's new position:
            moveableElement.style.top = moveableElement.offsetTop - pos2 + "px"
            moveableElement.style.left = moveableElement.offsetLeft - pos1 + "px"

            //moveableElement.style.top = Math.round((moveableElement.offsetTop - pos2) / 20) * 20 + "px";
            //moveableElement.style.left=Math.round((moveableElement.offsetLeft - pos1) / 20) * 20 + "px";
            //Math.round((moveableElement.offsetTop - pos2) / 10) * 10 + "px";
            //Math.round((moveableElement.offsetLeft - pos1) / 10) * 10 + "px";
        }

        function closeDragElement() {

            // stop moving when mouse button is released:
            document.onmouseup = null
            document.onmousemove = null
            megmozdultEvent.emit("")
        }

        return megmozdultEvent
    }

    static grabInit(elementDiv) {

        let pos = {top: 0, left: 0, x: 0, y: 0}

        const mouseDownHandler = function (e) {
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
        const mouseMoveHandler = function (e) {
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

    static htmlToElement(html) {
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

    static forEachFieldInObject(object, callback: (elementKey) => any) {
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
        var handler = (event) => {
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


    static resizeElement(element: HTMLElement, BORDER_SIZE: number = 4, resizeType: ResizeType) {
        element.classList.add("resizeRight")
        let m_pos;
        let mouseDownListener = (e) => {
            if (e.offsetX > element.clientWidth - BORDER_SIZE) {
                m_pos = e.x;
                document.addEventListener("mousemove", resize, false);
            }
        }
        let resize = (e) => {
            e.preventDefault()
            const dx = m_pos - e.x;
            m_pos = e.x;
            //element.style.width = (parseInt(getComputedStyle(element, '').width) - dx) + "px";
            element.style.width = (element.clientWidth - dx) + "px"
        }
        let m_pos2;
        let mouseDownListener2 = (e) => {
            if (e.offsetY > element.clientHeight - BORDER_SIZE) {
                m_pos2 = e.y;
                document.addEventListener("mousemove", resize2, false);
            }
        }
        let resize2 = (e) => {
            e.preventDefault()
            const dx = m_pos2 - e.y;
            m_pos2 = e.y;
            //element.style.width = (parseInt(getComputedStyle(element, '').width) - dx) + "px";
            element.style.height = (element.clientHeight - dx) + "px"
        }


        element.addEventListener("mousedown", function (e) {
            if (resizeType == ResizeType.horizontal || resizeType == ResizeType.both) {
                mouseDownListener(e)
            }
            if (resizeType == ResizeType.vertical || resizeType == ResizeType.both) {
                mouseDownListener2(e)
            }
        }, false);

        document.addEventListener("mouseup", function () {
            document.body.style.cursor = ""
            if (resizeType == ResizeType.horizontal || resizeType == ResizeType.both) {
                document.removeEventListener("mousemove", resize, false);
            }
            if (resizeType == ResizeType.vertical || resizeType == ResizeType.both) {
                document.removeEventListener("mousemove", resize2, false);
            }


        }, false);
        element.addEventListener("mousemove", function (e) {
            if (resizeType == ResizeType.horizontal) {
                if (e.offsetX > element.clientWidth - BORDER_SIZE) {
                    element.style.cursor = "w-resize"
                } else {
                    element.style.cursor = ""

                }
            }
            if (resizeType == ResizeType.vertical) {
                if (e.offsetY > element.clientHeight - BORDER_SIZE) {
                    element.style.cursor = "n-resize"
                } else {
                    element.style.cursor = ""

                }
            }
            if (resizeType == ResizeType.both) {
                if (e.offsetX > element.clientWidth - BORDER_SIZE&&(e.offsetY > element.clientHeight - BORDER_SIZE)) {
                    element.style.cursor = "se-resize"
                } else  if (e.offsetX > element.clientWidth - BORDER_SIZE) {
                    element.style.cursor = "w-resize"
                } else  if (e.offsetY > element.clientHeight - BORDER_SIZE) {
                    element.style.cursor = "n-resize"
                }else{
                    element.style.cursor = ""

                }



            }
        }, false);


    }


    static mousePositionInit() {
        document.addEventListener("mousemove", ev => {
            mousePositionMrk = ev
        })
    }
}


export let mousePositionMrk: MouseEvent

export enum ResizeType {
    horizontal = "horizontal",
    vertical = "vertical",
    both = "both",
}





















