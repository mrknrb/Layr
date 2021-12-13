import {ConnObject} from "./Data/Conn/ConnObject.js";
import {DocObject} from "./Data/Doc/Doc/DocObject.js";

export class DocsConnsObjects {


    constructor(docObjects: DocObject[], connObjects: ConnObject[]) {
        this.docObjects = docObjects
        this.connObjects = connObjects

    }

    docObjects: DocObject[]
    connObjects: ConnObject[]

}