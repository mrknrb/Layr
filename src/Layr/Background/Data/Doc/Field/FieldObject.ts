import {FieldData} from "./FieldData.js";
import {FieldEvents} from "./FieldEvents.js";
import {DocObject} from "../Doc/DocObject.js";
import {layrBackgroundB} from "../../../LayrBackground.js";


export class FieldObject {
    fieldData: FieldData
    fieldEvents: FieldEvents
    docObject: DocObject

    constructor(fieldData: FieldData, docObject: DocObject) {
        this.docObject = docObject
        this.fieldData = fieldData
        this.fieldEvents = new FieldEvents()

       // this.fieldEvents.onFieldChange.on(this.fieldDataUpdateMongo)
        console.log(this)
    }

    fieldDataUpdateMongo() {
        console.log(this)
        layrBackgroundB.docsConnectionsManager.updateDoc(this.docObject.docData._id, (docDataOriginal, ModifiedDocFunction) => {
            ModifiedDocFunction(this.docObject.docData)
        })


    }


}