import {MongoMrk} from "./LayrServerClient/MongoMrk.js";
import {DocsConnectionsManager} from "./DocsConnectionsManager/DocsConnectionsManager.js";


//@ts-ignore
let layrBackgroundB:LayrBackground
export {layrBackgroundB}

export class LayrBackground {
    pouchDB
    mongoMrk: MongoMrk
    docsConnectionsManager: DocsConnectionsManager


    constructor() {


        // @ts-ignore
        window.layrBackgroundB = this
        // @ts-ignore
        layrBackgroundB = this


        // @ts-ignore
        this.pouchDB = new PouchDB("LayrPouchData", {
            revs_limit: 50,
            auto_compaction: true
        })

        this.docsConnectionsManager = new DocsConnectionsManager()
        this.mongoMrk = new MongoMrk()

    }
}