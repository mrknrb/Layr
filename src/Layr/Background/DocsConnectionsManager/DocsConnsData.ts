import {ConnectionData} from "../Data/Connection/ConnectionData.js";
import {fieldData} from "../Data/Doc/Doc/DocData.js";

export class DocsConnsData {

    constructor(docsData: fieldData[], connectionsData: ConnectionData[]) {
        this.docsData = docsData
        this.connectionsData = connectionsData

    }

    docsData: fieldData[]
    connectionsData: ConnectionData[]
}