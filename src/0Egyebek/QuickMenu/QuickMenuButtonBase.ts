export  class QuickMenuButtonBase {

    element: HTMLDivElement = document.createElement("div")
    imageElement :HTMLImageElement= document.createElement("img") as HTMLImageElement
    constructor() {

        this.elementBaseInit()

    }

    elementBaseInit() {
        this.element.classList.add("QuickButton")
    }
    setColor(color:string) {
        this.element.style.backgroundColor=color
    }
    addImage(imgPath:string) {

       this. imageElement.src = imgPath
        this. imageElement.style.height = "65%"
        this.  imageElement.style.width = "65%"
        this.element.appendChild( this. imageElement)
    }
}