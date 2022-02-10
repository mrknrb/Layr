import {NodesEdgesManager} from "./NodesEdgesManager/NodesEdgesManager.js";
import {LayrClient} from "./LayrServerClient/LayrClient.js";
import {DocsConnsManager} from "./DocsConnsManager/DocsConnsManager.js";
import {MrkLibrary} from "../0Egyebek/MrkLibrary.js";
import {LayrUI} from "./UILayrFrame/LayrUI.js";
import {LayrAccountManager} from "./LayrAccountManager/LayrAccountManager.js";
import {CollectionsManager} from "./CollectionsManager/CollectionsManager.js";

let layrFrame: LayrFrame

export {layrFrame}

export class LayrFrame {

    layrFrameId: string
    nodesEdgesManager: NodesEdgesManager
    layrUI: LayrUI
    pouchDB:PouchDB.Static
    layrClient: LayrClient
    docsConnsManager: DocsConnsManager
    layrAccountManager:LayrAccountManager
    collectionsManager:CollectionsManager
    constructor() {
        // @ts-ignore
        document.layrFrame = this
        layrFrame = this
        MrkLibrary.contextMenuInvisibleIfBackGroundClickInit()
        this.layrFrameId = Math.random().toString()
        this.layrClient = new LayrClient()

        this.layrAccountManager=new LayrAccountManager()
        this.layrUI = new LayrUI(this)
        this.pouchDB = new PouchDB("LayrPouchData", {
            revs_limit: 50,
            auto_compaction: true
        })
        this.docsConnsManager = new DocsConnsManager()
        this.collectionsManager=new CollectionsManager()
        this.nodesEdgesManager = new NodesEdgesManager()
    }


    createLayrFrame() {
    }
}
