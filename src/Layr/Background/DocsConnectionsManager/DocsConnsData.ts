import {ConnectionData} from "../Data/Connection/ConnectionData.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";

export class DocsConnsData {

    constructor(docsData: DocData[], connectionsData: ConnectionData[]) {
        this.docsData = docsData
        this.connectionsData = connectionsData

    }

    docsData: DocData[]
    connectionsData: ConnectionData[]
}