import {FieldData} from "../Field/FieldData.js";
import {FieldhezElementCData} from "../../Conn/NodeCData/FieldhezElementCData.js";

export class DocData {


    _id: string
    ownElementsCData: FieldhezElementCData[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
    fieldsData: FieldData[]
    tags: string[]
    partsData: Object
    constructor() {
        this.fieldsData = []
        this.ownElementsCData = []
        this.tags = []
    }
}
