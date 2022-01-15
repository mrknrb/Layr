import {FieldData} from "../Field/FieldData.js";
import {FieldhezElementCData} from "../../Conn/NodeCData/FieldhezElementCData.js";
import {MrkLibrary} from "../../../../../0Egyebek/MrkLibrary.js";

export class DocData {


    _id: string
    ownElementsCData: FieldhezElementCData[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
    fieldsData: FieldData[]
    tags: string[]
    partsData: any

    constructor() {
       // this._id = MrkLibrary.generateUUID()
       //yx multkor zavart okozott
        this.fieldsData = []
        this.ownElementsCData = []
        this.tags = []
        this.partsData = {}
    }
}
