import {Talca} from "../Talca/Talca.js";
import {Events} from "./Events.js";
import {ArangoMrkMessageClient} from "../Arangodb/ArangoMrkMessageClient.js";
import {NodeDiv} from "../NodeDiv/NodeDiv.js";
import {NodeDivFactory} from "./NodeDivFactory.js";
import {MrkLibrary} from "../MrkLibrary.js";


export class MrkS3 {
    pouchDB
    arangoMrkMessageClient: ArangoMrkMessageClient
    talca: Talca
    nodeDivMap: Map<string, NodeDiv>
    events: Events
    nodeDivFactory: NodeDivFactory

    constructor() {

        // @ts-ignore
        this.pouchDB = new PouchDB("MrkSUserData", {
            revs_limit: 50,
            auto_compaction: true
        })

        this.arangoMrkMessageClient = new ArangoMrkMessageClient()
        this.talca = new Talca(this)
        this.nodeDivMap = new Map<string, NodeDiv>()
        this.events = new Events()
        this.nodeDivFactory = new NodeDivFactory(this)
        MrkLibrary.cssPreventInit()
    }


}