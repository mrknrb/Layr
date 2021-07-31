import {Talca} from "../Talca/Talca";
import {NodeDiv} from "../NodeDiv/NodeDiv";
import {ArangoMrkMessageClient} from "../Arangodb/ArangoMrkMessageClient";
import {DocData} from "../NodeDiv/NodeDocData/DocData/DocData";
import {NodeDivAllData} from "../NodeDiv/NodeDivAllData";
import {Events} from "./Events";
import {NodeDivFactory} from "./NodeDivFactory";

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
        MrkLibrary.cssPreventInit()
        this.talca = new Talca(this)
        this.nodeDivMap = new Map<string, NodeDiv>()
        this.events = new Events()
        this.nodeDivFactory = new NodeDivFactory(this)
    }


}