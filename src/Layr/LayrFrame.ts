import {NodesEdgesManager} from "./NodesEdgesManager/NodesEdgesManager.js";
import {Talca} from "./Talca/Talca.js";
import {LayrClient} from "./LayrServerClient/LayrClient.js";
import {DocsConnsManager} from "./DocsConnsManager/DocsConnsManager.js";
import {MrkLibrary} from "../0Egyebek/MrkLibrary.js";


//@ts-ignore
let layrFrame: LayrFrame

export {layrFrame}

export class LayrFrame {

    layrFrameId: string
    nodesEdgesManager: NodesEdgesManager
    talca: Talca
    pouchDB
    layrClient: LayrClient
    docsConnsManager: DocsConnsManager

    constructor() {
        // @ts-ignore
        document.layrFrame=this
        layrFrame=this
        MrkLibrary.contextMenuInvisibleIfBackGroundClickInit()
        this.layrFrameId = Math.random().toString()
        this.talca = new Talca(this)
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
