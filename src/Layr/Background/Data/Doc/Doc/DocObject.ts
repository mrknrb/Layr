import {DocEvents} from "./DocEvents.js";
import {FieldObject} from "../Field/FieldObject.js";
import {fieldData} from "./DocData.js";
import {FieldData} from "../Field/FieldData.js";
import {ElementTypes} from "../../../../Frame/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {layrBackgroundB} from "../../../LayrBackground.js";

export class DocObject {
    docData: fieldData
    fieldObjects: FieldObject[]
    docEvents: DocEvents

    constructor(docData: fieldData) {
        let self = this
        this.docData = docData
        this.docEvents = new DocEvents()
        this.fieldObjects = []

        docData.fieldsData.forEach((field) => {
            this.createFieldObject(field)
        })
    }

    newField(fieldName: string, elementType: string) {
        console.log("newField")

        let newFieldData = new FieldData()

        newFieldData.fieldName = fieldName
        newFieldData.elementType = elementType as ElementTypes
        this.docData.fieldsData.push(newFieldData)
        let fieldObject = this.createFieldObject(newFieldData)
        layrBackgroundB.docsConnectionsManager.updateDoc(this.docData._id, (docDataOriginal, ModifiedDocFunction) => {
            console.log(this.docData)
            ModifiedDocFunction(this.docData)
        })
        this.docEvents.onDocChange.emit(this)
        return fieldObject
    }

    private createFieldObject(fieldData: FieldData) {
        let fieldObject = new FieldObject(fieldData, this)
        this.fieldObjects.push(fieldObject)
        return fieldObject
    }


}