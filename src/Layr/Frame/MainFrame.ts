import {LayrFrame} from "./LayrFrame.js";
import {layrBackgroundF} from "../../0Egyebek/LayrBackgroundFInitClass.js";

console.log("indulF")
//let docdataset = SampleDataFactoryMongodb.generateSampleDataset(1000)
//console.log(docdataset.connectionsData)
//console.log(docdataset.docsData)


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

let backgroundF = layrBackgroundF

let mainFrame = {}
LoadLibraries(function () {
    mainFrame = new MainFrame()

})

export class MainFrame {
    layrFrame: LayrFrame

    constructor() {

        this.layrFrame = new LayrFrame()
        //@ts-ignore
        document.layrFrame = this.layrFrame
        layrBackgroundF.layrFrameManager.newFrame(this.layrFrame)
        this.testload()

    }

    async testload() {
        let rootnode = await this.layrFrame.nodesManager.loadRootNode("61817e5f24b034523e70bcc6")
        // await this.layrFrame.nodesManager.loadNormalNodesOfGroupNode(rootnode)
    }
}