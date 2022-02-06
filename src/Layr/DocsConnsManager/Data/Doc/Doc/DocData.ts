import {FieldData} from "../Field/FieldData.js";
import {FieldhezElementCData} from "../../Conn/NodeCData/FieldhezElementCData.js";
import {MrkLibrary} from "../../../../../0Egyebek/MrkLibrary.js";

export class DocData {


    _id: string
    collection: string
    type?: string
    fieldsData?: FieldData[]
    tags?: string[]
    partsData?: any
    lastChange?: number

    constructor(collection:string) {
        this._id = MrkLibrary.generateUUID()
        this.collection=collection
       //yx multkor zavart okozott
        this.fieldsData = []
        this.tags = []
        this.partsData = {}

        this.lastChange=Date.now()
    }
}
