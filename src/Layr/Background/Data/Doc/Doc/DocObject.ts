import {DocEvents} from "./DocEvents.js";
import {FieldObject} from "../Field/FieldObject.js";
import {DocData} from "./DocData.js";
import {FieldData} from "../Field/FieldData.js";
import {ElementTypes} from "../../../../Frame/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {layrBackgroundB} from "../../../LayrBackground.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {SyncObjectNode_Doc} from "./SyncObjectNode_Doc.js";

export class DocObject {
    docData: DocData
    fieldObjects: FieldObject[]
    docEvents: DocEvents
    syncObjectNode_Doc:SyncObjectNode_Doc
    constructor(docData: DocData) {
        let self = this
        this.docData = docData
        this.docEvents = new DocEvents()
        this.fieldObjects = []
        this.syncObjectNode_Doc=new SyncObjectNode_Doc(this)
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
        this.docDataMongoUpdate()
        this.docEvents.onDocChange.emit(this)
        return fieldObject
    }

    private createFieldObject(fieldData: FieldData) {
        let fieldObject = new FieldObject(fieldData, this)
        this.fieldObjects.push(fieldObject)
        return fieldObject
    }

    docDataMongoUpdate() {
        layrBackgroundB.docsConnectionsManager.updateDoc(this.docData._id, (docDataOriginal, ModifiedDocFunction) => {
            ModifiedDocFunction(this.docData)
        })
    }

}