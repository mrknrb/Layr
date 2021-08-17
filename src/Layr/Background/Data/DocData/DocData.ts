import {DocField} from "./DocField.js";
import {DocFieldhezElementSettings} from "../NodeData/DocFieldhezElementSettings.js";

export class DocData {


	_key: string
	ownDefaultDocFieldElementSettings: DocFieldhezElementSettings[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
	docFields: DocField[]



	constructor() {
		this.docFields = []
		this.ownDefaultDocFieldElementSettings = []
	}
}
