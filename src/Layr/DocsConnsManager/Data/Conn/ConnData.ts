import {MrkLibrary} from "../../../../0Egyebek/MrkLibrary.js";

export class ConnData {

    _id: string

    collection: string
    from: string
    to: string
    elementFrom?: string
    elementTo?: string
    type?: string
    tags?: string[]
    data: {
        nodeCDataParts: any
        edgeCDataParts: any
        elementsCDataParts: any[]
    }
    lastChange?: number

    constructor(from: string, to: string, collection:string,type?: string) {

        this._id = MrkLibrary.generateUUID()
        // yxmultkor zavart okozott
        this.from = from
        this.to = to
        this.type = type
        this.collection=collection
        this.tags = []
        this.data = {
            nodeCDataParts: {},
            edgeCDataParts: {},
            elementsCDataParts: []
        }

        this.lastChange=Date.now()
    }
}



