import {ConnData} from "./Data/Conn/ConnData.js";
import {DocData} from "./Data/Doc/Doc/DocData.js";

export class DocsConnsData {

    constructor(docsData: DocData[], connsData: ConnData[]) {
        this.docsData = docsData
        this.connsData = connsData

    }

    docsData: DocData[]
    connsData: ConnData[]
}