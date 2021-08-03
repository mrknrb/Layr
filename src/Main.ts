import {MrkS3} from "./MrkS3/MrkS3.js";
import {zSampleDataFactory} from "./zSampleDataFactory.js";

let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",
    "0Libraries/jquery.js",
    "0Libraries/arangojs.js"
]
function scriptbetoltes() {
    let betoltottscriptszam=0
    scriptek.forEach(function (scriptsrc,i) {
        let script = document.createElement('script')
        script.src = scriptsrc
        document.body.appendChild(script)
        script.onload = function () {
            betoltottscriptszam++
            if(scriptek.length===betoltottscriptszam){
                main = new Main()
            }
        };
    })
}
let main ={}
scriptbetoltes()


export class Main {
    mrks3:MrkS3
    bkg:Window
    constructor() {
        this.mrks3 = new MrkS3()
       this.mrks3.nodeDivFactory.ujRootNodeDivBetoltes("http://localhost:8529|_system|docsTs|78505685.1225844|")

       // this.bkg = chrome.extension.getBackgroundPage()
        //this.bkg.background.newTab(window)
    }
}





//let docdataset= zSampleDataFactory.generateSampleDocDataset(100 )
//console.log(docdataset)





