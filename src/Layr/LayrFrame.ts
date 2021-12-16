import {NodesEdgesManager} from "./NodesEdgesManager/NodesEdgesManager.js";
import {LayrClient} from "./LayrServerClient/LayrClient.js";
import {DocsConnsManager} from "./DocsConnsManager/DocsConnsManager.js";
import {MrkLibrary} from "../0Egyebek/MrkLibrary.js";
import {LayrUI} from "./UIElemek/LayrUI.js";


let layrFrame: LayrFrame

export {layrFrame}

export class LayrFrame {

    layrFrameId: string
    nodesEdgesManager: NodesEdgesManager
    layrUI: LayrUI
    pouchDB
    layrClient: LayrClient
    docsConnsManager: DocsConnsManager

    constructor() {
        // @ts-ignore
        document.layrFrame = this
        layrFrame = this
        MrkLibrary.contextMenuInvisibleIfBackGroundClickInit()
        this.layrFrameId = Math.random().toString()
        this.layrUI = new LayrUI(this)
        // @ts-ignore
        this.pouchDB = new PouchDB("LayrPouchData", {
            revs_limit: 50,
            auto_compaction: true
        })
        this.docsConnsManager = new DocsConnsManager()
        this.layrClient = new LayrClient()
        this.nodesEdgesManager = new NodesEdgesManager()
    }

    createLayrFrame() {
    }
}
