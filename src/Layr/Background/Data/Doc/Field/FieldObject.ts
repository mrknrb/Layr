import {FieldData} from "./FieldData.js";
import {FieldEvents} from "./FieldEvents.js";


export class FieldObject {
    fieldData: FieldData
    fieldEvents:FieldEvents
    constructor(docFieldData: FieldData) {
        this.fieldData = docFieldData
        this.fieldEvents=new FieldEvents()
    }

}