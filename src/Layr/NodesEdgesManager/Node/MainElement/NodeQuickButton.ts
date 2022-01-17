export class NodeQuickButton {
    element: HTMLDivElement = document.createElement("div")

    constructor() {
        this.elementInit()

    }

    elementInit() {
        this.element.classList.add("QuickButton")

    }

    setColor(color:string) {
        this.element.style.backgroundColor=color
    }

    addImage(imgPath:string) {

        let imageElement = document.createElement("img") as HTMLImageElement
        imageElement.src = imgPath
        imageElement.style.height = "18px"
        imageElement.style.width = "18px"
        this.element.appendChild(imageElement)

    }

}