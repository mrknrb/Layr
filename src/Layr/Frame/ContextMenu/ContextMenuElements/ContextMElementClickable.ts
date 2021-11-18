import {ContextMenuElementBase} from "../ContextMenuElementBase.js";
import {ContextMenu} from "../ContextMenu.js";
import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";

export class ContextMElementClickable extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    clickEvent: TypedEvent<ContextMElementClickable>

    constructor(contextMenu: ContextMenu, elementName: string) {
        super(contextMenu, elementName);
        this.elementInitClickable()
        this.clickEvent=new TypedEvent<ContextMElementClickable>()
    }

    elementInitClickable() {
let self=this
        this.element.style.width = "100%"
        this.element.style.height = "fit-content"
        let textElement = document.createElement("b")
        textElement.style.userSelect = "none";
        textElement.style.cursor = "default"
        textElement.style.margin = "2px"

        textElement.innerText = this.elementName

        this.element.appendChild(textElement)
        this.element.addEventListener("click", (event) => {
            self.clickEvent.emit(this)
        })
    }


}