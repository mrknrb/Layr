import {LayrFrame} from "./LayrFrame.js";

console.log("indulF")
//let docdataset = SampleDataFactoryMongodb.generateSampleDataset(1000)
//console.log(docdataset.connectionsData)
//console.log(docdataset.docsData)


let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",
    "0Libraries/jquery.js",
    "0Libraries/arangojs.js",
    "0Libraries/axios.js",
    "0Libraries/socketio.js"
]

function LoadLibraries(callback: Function) {
    let betoltottscriptszam = 0
    scriptek.forEach(function (scriptsrc, i) {
        let script = document.createElement('script')
        script.src = scriptsrc
        document.body.appendChild(script)
        script.onload = function () {
            betoltottscriptszam++
            if (scriptek.length === betoltottscriptszam) {
                callback()
            }
        };
    })
}


let mainFrame = {}
LoadLibraries(function () {
    mainFrame = new MainFrame()

})

export class MainFrame {
    layrFrame: LayrFrame

    constructor() {
       // this.layrLogoKozepen()
        this.layrFrame = new LayrFrame()

        // @ts-ignore
        document.layrFrame = this.layrFrame

        console.log(this.layrFrame)
        setTimeout(() => {
            this.testload()

        }, 200)
    }

    async testload() {
        // @ts-ignore
        let a: LayrFrame = document.layrFrame
        // @ts-ignore
        let rootnode = await a.nodesEdgesManager.loadRootNode("61817e5f24b034523e70bcc6")


        //ideiglenes
        /*
                rootnode.elementsManager.elements.forEach(element => {
                    element.smpManager.smpSelectorDataDynamicMap.forEach(selector => {
                        selector.activateSelector(true)

                    })
                })
        */
        // await this.layrFrame.nodesEdgesManager.loadNormalNodesOfGroupNode(rootnode)
    }

    layrLogoKozepen() {

        let div = document.createElement("div")
        div.style.height=window.innerHeight+"px"
        div.style.width=window.innerWidth+"px"
        div.style.backgroundColor="#1A1A1A"
        div.style.zIndex="1000000"
        div.style.position="absolute"
        let image: HTMLImageElement = document.createElement("img")
        image.src = "0Resources/NagyLogo.png"


        image.style. top="0"
        image.style.  bottom="0"
        image.style.  left="0"
        image.style.  right="0"
        image.style.position="absolute"
        image.style.margin="auto"
        div.appendChild(image)
        document.body.appendChild(div)
        div.animate([
            // keyframes
            {opacity: '1'},
            {opacity: '1'},
            {opacity: '1'},
            {opacity: '0'}
        ], {
            duration: 200,
        }).onfinish = () => {


            div.remove()


        }


    }


}


