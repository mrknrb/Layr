import {FieldData} from "../Field/FieldData.js";
import {FieldhezElementCData} from "../../Conn/NodeCData/FieldhezElementCData.js";
import {PartData} from "../../../../SMP/PartsGeneral/PartData.js";

export class DocData {


    _id: string
    ownElementsCData: FieldhezElementCData[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
    fieldsData: FieldData[]
    tags: string[]
    partsData: any

    constructor() {

        this.fieldsData = []
        this.ownElementsCData = []
        this.tags = []
        this.partsData = {}
    }
}
