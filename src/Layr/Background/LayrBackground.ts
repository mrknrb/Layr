import {DocsConnectionsManager} from "./DocsConnectionsManager/DocsConnectionsManager.js";
import {LayrClient} from "./LayrServerClient/LayrClient.js";


//@ts-ignore
let layrBackgroundB:LayrBackground

export {layrBackgroundB}

export class LayrBackground {
    pouchDB
    layrClient: LayrClient
    docsConnectionsManager: DocsConnectionsManager


    constructor() {


        // @ts-ignore
        window.layrBackground = this
        // @ts-ignore
        layrBackgroundB = this


        // @ts-ignore
        this.pouchDB = new PouchDB("LayrPouchData", {
            revs_limit: 50,
            auto_compaction: true
        })

        this.docsConnectionsManager = new DocsConnectionsManager()
        this.layrClient = new LayrClient()


    }
}