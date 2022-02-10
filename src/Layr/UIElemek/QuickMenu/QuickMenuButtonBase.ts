import {QuickMenuElementBase} from "./QuickMenuElementBase.js";

export class QuickMenuButtonBase extends QuickMenuElementBase{

    element: HTMLDivElement = document.createElement("div")
    imageElement?: HTMLImageElement

    constructor() {
        super();

        this.elementBaseInit()

    }

    elementBaseInit() {
        this.element.classList.add("QuickButton")
    }

    setColor(color: string) {
        this.element.style.backgroundColor = color
    }

    addImage(imgPath: string) {
        this.imageElement = document.createElement("img") as HTMLImageElement
        this.imageElement.src = imgPath
        this.imageElement.style.height = "65%"
        this.imageElement.style.width = "65%"
        this.element.appendChild(this.imageElement)
    }

    activate(activate: boolean) {
        if (activate) {
            this.element.style.backgroundColor = "#446d42"
        } else {

            this.element.style.backgroundColor = "#664e4e"
        }
    }

    setText(text:string) {
       let textElement=document.createElement("b")
        textElement.innerText=text
        this.element.appendChild(textElement)
        this.element.style.padding="0px 10px 0px 10px"
        this.element.style.userSelect="none"
        this.element.style.aspectRatio="auto"
        this.element.style.width="fit-content"
    }

}