import {Talca} from "../Frame/Talca/Talca.js";
import {Events} from "../Events.js";
import {RootNodeDivManager} from "../Frame/RootNodeDivManager.js";
import {MrkLibrary} from "../../MrkLibrary.js";
import {ArangoMrk} from "./Arangodb/ArangoMrk.js";
import {DocsManager} from "./DocsManager.js";


export class LayrBackground {
	pouchDB
	arangoMrk: ArangoMrk
	talca: Talca
	events: Events
	docsManager:DocsManager



	constructor() {
		// @ts-ignore
		this.pouchDB = new PouchDB("MrkSUserData", {
			revs_limit: 50,
			auto_compaction: true
		})

		this.arangoMrk = new ArangoMrk()
		this.events = new Events()
		this.docsManager=new DocsManager(this)

	}
}