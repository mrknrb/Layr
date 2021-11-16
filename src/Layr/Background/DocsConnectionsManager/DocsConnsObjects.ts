import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";

export class DocsConnsObjects {


    constructor(docObjects: DocObject[], connectionObjects: ConnectionObject[]) {
        this.docObjects = docObjects
        this.connectionObjects = connectionObjects

    }

    docObjects: DocObject[]
    connectionObjects: ConnectionObject[]

}