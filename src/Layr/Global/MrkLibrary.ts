import {FieldData} from "../Background/Data/Doc/Field/FieldData.js";
import {fieldData} from "../Background/Data/Doc/Doc/DocData.js";

export class MrkLibrary {
    static dragElement(draggingElement, moveableElement, kikapcsolas) {
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
        }
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

    static docFieldKereso(docFieldName: string, docData: fieldData) {
        let docFieldKeresett = new FieldData()
        docData.fieldsData.forEach(function (docField) {
            if (docField.fieldName == docFieldName) {
                docFieldKeresett = docField
            }
        })
        return docFieldKeresett
    }

    static resize() {
        const BORDER_SIZE = 4;
        const panel = document.getElementById("right_panel");

        let m_pos;

        function resize(e) {
            const dx = m_pos - e.x;
            m_pos = e.x;
            panel.style.width = (parseInt(getComputedStyle(panel, '').width) + dx) + "px";
        }

        panel.addEventListener("mousedown", function (e) {
            if (e.offsetX < BORDER_SIZE) {
                m_pos = e.x;
                document.addEventListener("mousemove", resize, false);
            }
        }, false);

        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", resize, false);
        }, false);
    }
}

























