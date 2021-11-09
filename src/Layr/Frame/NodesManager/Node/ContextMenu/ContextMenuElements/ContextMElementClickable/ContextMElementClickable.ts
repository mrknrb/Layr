import {ContextMenuElementBase} from "../../ContextMenuElementBase.js";
import {ContextMenu} from "../../ContextMenu.js";

export class ContextMElementClickable extends ContextMenuElementBase {

    elementName: string
    element: HTMLDivElement
    onClickCallbackFunction: (clicked: ContextMElementClickable) => any

    constructor( elementName:string,onClickCallbackFunction: (clicked: ContextMElementClickable) => any) {
        super();
        this.elementName=elementName
        this.onClickCallbackFunction = onClickCallbackFunction
        this.elementInitClickable()
    }

    elementInitClickable() {

        this.element.style.width = "100%"
        this.element.style.height = "fit-content"
        let textElement=document.createElement("b")
        textElement.style.userSelect = "none";
        textElement.style.cursor="default"
        textElement.style.margin="2px"

        textElement.innerText=this.elementName

        this.element.appendChild(textElement)
        this.element.addEventListener("click", (event) =>{
            this.onClickCallbackFunction(this)
            this.contextMenu. contextMenuInVisible()
        })
    }


}