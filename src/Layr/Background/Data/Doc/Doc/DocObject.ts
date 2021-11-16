import {DocEvents} from "./DocEvents.js";
import {FieldObject} from "../Field/FieldObject.js";
import {DocData} from "./DocData.js";

export class DocObject {
    docData: DocData
    fieldObjects: FieldObject[]
    docEvents: DocEvents

    constructor(docData: DocData) {
        let self = this
        this.docData = docData
        this.docEvents = new DocEvents()
        this.fieldObjects = []
        docData.fieldsData.forEach((field) => {
            self.fieldObjects.push(new FieldObject(field, this))
        })
    }

    newField(){
       // fieldObjects(new FieldObject(field, this))


    }



}