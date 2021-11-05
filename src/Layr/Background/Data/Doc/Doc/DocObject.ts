import {DocEvents} from "./DocEvents.js";
import {FieldObject} from "../Field/FieldObject.js";
import {DocData} from "./DocData.js";

export class DocObject {
    docId: string  //utolag, a parent alapjan le kell generalni, mert a kovetkezonel kelleni fog, hogy kitalald ezen absolut es a child relativ alapjan a child absolutjat
    docData: DocData
    fieldObjects: FieldObject[]
    docEvents: DocEvents

    constructor(docId: string, docData: DocData) {
        let self = this
        this.docId = docId
        this.docData = docData
        this.docEvents = new DocEvents()
        this.fieldObjects = []
        docData.fieldsData.forEach(function (field) {
            self.fieldObjects.push(new FieldObject(field))
        })
    }

}