import {LayrFrame} from "./LayrFrame.js";
import {LayrBackground} from "../Background/LayrBackground.js";

//let docdataset = SampleDataFactoryMongodb.generateSampleDataset(1000)
//console.log(docdataset.connections)
//console.log(docdataset.docs)


let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",
    "0Libraries/jquery.js",
    "0Libraries/arangojs.js",
    "0Libraries/axios.js"
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


//@ts-ignore
let layrBackgroundF: LayrBackground = chrome.extension.getBackgroundPage().layrBackgroundB

export {layrBackgroundF}
//@ts-ignore
window.layrBackgroundF = layrBackgroundF


let mainFrame = {}
LoadLibraries(function () {
    mainFrame = new MainFrame()

})

export class MainFrame {
    layrFrame: LayrFrame

    constructor() {
        this.layrFrame = new LayrFrame()
        //@ts-ignore
        window.layrFrame = this.layrFrame
        this.testload()

    }

    async testload() {
        let rootnode = await this.layrFrame.nodeManager.loadRootNode("61817e5f24b034523e70bcc6")
        // await this.layrFrame.nodeManager.loadNormalNodesOfGroupNode(rootnode)

    }


}


console.log("MainFrame Betoltott")