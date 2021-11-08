import {ContextMenuElementBase} from "../../ContextMenuElementBase.js";
import {ContextMenu} from "../../ContextMenu.js";

export class ContextMElementClickable extends ContextMenuElementBase {
    elementId: string
    elementName: string
    element: HTMLDivElement
    onClickCallbackFunction: (clicked: ContextMElementClickable) => any

    constructor( elementName:string,onClickCallbackFunction: (clicked: ContextMElementClickable) => any) {
        super();
        this.elementId=Math.random().toString()
        this.elementName=elementName
        this.onClickCallbackFunction = onClickCallbackFunction
        this.elementInitClickable()
    }

    elementInitClickable() {

        this.element.style.width = "100%"
        this.element.style.height = "20px"
        this.element.style.backgroundColor="blue"
        this.element.style.border="solid"
        this.element.innerText=this.elementName
        this.element.addEventListener("click", (event) =>{
            this.onClickCallbackFunction(this)
            this.contextMenu. contextMenuInVisible()
        })
    }


}