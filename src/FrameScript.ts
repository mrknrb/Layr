import {LayrBackground} from "./Layr/Background/LayrBackground.js";
import {zSampleDataFactory} from "./0Egyebek/zSampleDataFactory.js";
import {LayrFrame} from "./Layr/Frame/LayrFrame.js";

let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",
    "0Libraries/jquery.js",
    "0Libraries/arangojs.js"
]
function LoadLibraries(callback:Function) {
    let betoltottscriptszam=0
    scriptek.forEach(function (scriptsrc,i) {
        let script = document.createElement('script')
        script.src = scriptsrc
        document.body.appendChild(script)
        script.onload = function () {
            betoltottscriptszam++
            if(scriptek.length===betoltottscriptszam){

                callback()
            }
        };
    })
}



let frameScript ={}
LoadLibraries(function () {
    frameScript = new FrameScript()
})


export class FrameScript {
    layrFrame:LayrFrame
    constructor() {
        this.layrFrame=new LayrFrame()
        this.layrFrame.nodeDivManager.createRootNodeDiv("http://localhost:8529|_system|docsTs|78505685.1225844|")

        //this.bkg.background.newTab(window)
    }
}





//let docdataset= zSampleDataFactory.generateSampleDocDataset(100 )
//console.log(docdataset)





