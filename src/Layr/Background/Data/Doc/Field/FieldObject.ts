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
        this.fieldDataUpdateMongo()
    }

    fieldDataUpdateMongo() {
        let self = this
        this.fieldEvents.onFieldChange.on(() => {
            layrBackgroundB.docsConnectionsManager.updateDoc(self.docObject.docData._id, (docDataOriginal, ModifiedDocFunction) => {
                ModifiedDocFunction(self.docObject.docData)
            })
        })
    }
}