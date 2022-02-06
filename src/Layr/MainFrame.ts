import {LayrFrame} from "./LayrFrame.js";
import {LayrLogoKozepen} from "../0Egyebek/LayrLogoKozepen.js";
import {MrkLibrary} from "../0Egyebek/MrkLibrary.js";

let layrLogoKozepenAnimacio = new LayrLogoKozepen()
layrLogoKozepenAnimacio.feltunik()
MrkLibrary.mousePositionInit()
let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",
    "0Libraries/jquery.js",
    "0Libraries/arangojs.js",
    "0Libraries/axios.js",
   "0Libraries/socketio.js",
    "0Libraries/createRBTree.js",
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


        this.layrFrame = new LayrFrame()

        // @ts-ignore
        document.layrFrame = this.layrFrame

        // @ts-ignore
        document.mrkLibrary = MrkLibrary

        console.log(this.layrFrame)
        setTimeout(() => {
            this.testload()
            layrLogoKozepenAnimacio.eltunik()
        }, 50)

    }

    async testload() {
        // @ts-ignore
        let a: LayrFrame = document.layrFrame
        let b = a.nodesEdgesManager.loadRootNodeFromURLAuto()
        //  let rootnode = await a.nodesEdgesManager.loadRootNode(window.location.hash.substr(1))


        // @ts-ignore
        // let rootnode = await a.nodesEdgesManager.loadRootNode("61817e5f24b034523e70bcc6")


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


}
