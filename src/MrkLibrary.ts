import {DocField} from "./Layr/Background/Data/DocData/DocField.js";
import {DocData} from "./Layr/Background/Data/DocData/DocData.js";

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
			// set the elementObject's new position:
			moveableElement.style.top = moveableElement.offsetTop - pos2 + "px"
			//Math.round((draggingElement.parentGroupElement.offsetTop - pos2) / 10) * 10 + "px";
			moveableElement.style.left = moveableElement.offsetLeft - pos1 + "px"
			//Math.round((draggingElement.parentGroupElement.offsetLeft - pos1) / 10) * 10 + "px";
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
			e.preventDefault()
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

			// Move the elementObject
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
		html = html.trim(); // Never return a text node of whitespace as the result
		template.innerHTML = html;
		return template.content.firstChild;
	}

	static docFieldKereso(docFieldName:string, docData: DocData) {
		let docFieldKeresett = new DocField()
		docData.docFields.forEach(function (docField) {
			if (docField.name == docFieldName) {
				docFieldKeresett=docField
			}
		})
		return docFieldKeresett
	}
}

























