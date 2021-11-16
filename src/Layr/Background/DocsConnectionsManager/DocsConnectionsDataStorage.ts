import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";

export class DocsConnectionsDataStorage {


    docObjectsMap: Map<string, DocObject>

    connectionIdObjectsMap: Map<string, ConnectionObject>
    connectionDocToIdObjectsMap: Map<string, ConnectionObject>
    connectionDocFromIdObjectsMap: Map<string, ConnectionObject>

    constructor() {
        this.docObjectsMap = new Map<string, DocObject>()
        this.connectionIdObjectsMap = new Map<string, ConnectionObject>()

        this.connectionDocToIdObjectsMap = new Map<string, ConnectionObject>()
        this.connectionDocFromIdObjectsMap = new Map<string, ConnectionObject>()
    }







}