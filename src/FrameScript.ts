import {LayrBackground} from "./Layr/Background/LayrBackground.js";
import {zSampleDataFactory} from "./0Egyebek/zSampleDataFactory.js";

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
    layr:LayrBackground
    bkg:Window|null
    constructor() {

        this.bkg = chrome.extension.getBackgroundPage()
        //this.bkg.background.newTab(window)
    }
}





//let docdataset= zSampleDataFactory.generateSampleDocDataset(100 )
//console.log(docdataset)





