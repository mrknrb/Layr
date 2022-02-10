import {QuickMenuElementBase} from "./QuickMenuElementBase.js";

export class QuickMenuText extends QuickMenuElementBase{

    element: HTMLElement = document.createElement("b")

    constructor() {
        super();

        this.elementBaseInit()

    }

    elementBaseInit() {
        this.element.style.padding="0px 10px 0px 10px"
        this.element.style.userSelect="none"
        this.element.style.aspectRatio="auto"
        this.element.style.width="fit-content"
    }


    setText(text:string) {
        this.element.innerText=text

    }

}