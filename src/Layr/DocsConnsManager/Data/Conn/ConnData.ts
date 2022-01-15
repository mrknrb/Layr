import {MrkLibrary} from "../../../../0Egyebek/MrkLibrary.js";

export class ConnData {

    _id: string
    from: string
    to: string
    type: string
    tags: string[]

    data: {
        nodeCDataParts: any
        edgeCDataParts: any
        elementsCDataParts: any[]
    }

    constructor(from: string, to: string, type: string) {
        //this._id = MrkLibrary.generateUUID()
        // yxmultkor zavart okozott
        this.from = from
        this.to = to
        this.type = type
        this.tags = []
        this.data = {
            nodeCDataParts: {},
            edgeCDataParts: {},
            elementsCDataParts: []
        }
    }
}