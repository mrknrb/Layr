import {DocField} from "./DocField.js";
import {DocFieldEvents} from "./DocFieldEvents.js";


export class DocFieldObject {
    docFieldData: DocField
    docFieldEvents:DocFieldEvents
    constructor(docFieldData: DocField) {
        this.docFieldData = docFieldData
        this.docFieldEvents=new DocFieldEvents()
    }

}