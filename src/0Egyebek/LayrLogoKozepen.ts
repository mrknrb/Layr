export class LayrLogoKozepen {
    layrLogoHatter!: HTMLDivElement

    eltunik() {
        this.layrLogoHatter.animate([
            // keyframes

            {opacity: '1', filter: "blur(0px)", backgroundColor: "grey"},
            {opacity: '0', filter: "blur(8px)"}
        ], {
            duration: 200,
        }).onfinish = () => {
            this.layrLogoHatter.remove()
        }
    }

    feltunik() {
        this.layrLogoHatter = document.createElement("div")
        let div = this.layrLogoHatter
        div.style.height = window.innerHeight + "px"
        div.style.width = window.innerWidth + "px"
        div.style.backgroundColor = "#1A1A1A"
        div.style.zIndex = "1000000"
        div.style.position = "absolute"
        let image: HTMLImageElement = document.createElement("img")
        image.src = "0Resources/NagyLogo.png"


        image.style.top = "0"
        image.style.bottom = "0"
        image.style.left = "0"
        image.style.right = "0"
        image.style.position = "absolute"
        image.style.margin = "auto"
        div.appendChild(image)
        document.body.appendChild(div)


    }


}