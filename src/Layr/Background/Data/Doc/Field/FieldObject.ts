import {FieldData} from "./FieldData.js";
import {FieldEvents} from "./FieldEvents.js";
import {DocObject} from "../Doc/DocObject.js";
import {layrBackgroundB} from "../../../LayrBackground.js";
import {LayrFind} from "../../../../Global/LayrFind.js";


export class FieldObject {
    fieldData: FieldData
    fieldEvents: FieldEvents
    docObject: DocObject

    constructor(fieldData: FieldData, docObject: DocObject) {
        this.docObject = docObject
        this.fieldData = fieldData
        this.fieldEvents = new FieldEvents()
        this.fieldDataUpdateMongoInit()
        this.fieldDataUpdateNodesSyncInit()
    }

    fieldDataUpdateMongoInit() {
        let self = this
        this.fieldEvents.onFieldChange.on(() => {
            layrBackgroundB.docsConnectionsManager.updateDoc(self.docObject.docData._id, (docDataOriginal, ModifiedDocFunction) => {
                ModifiedDocFunction(self.docObject.docData)
            })
        })
    }

    fieldDataUpdateNodesSyncInit(){
        let self = this
        this.fieldEvents.onFieldChange.on((partSyncMessageObject) => {
           let nodes= LayrFind.nodes_ByDocId_Global(this.docObject.docData._id)
            nodes.forEach((node, index) => {
                node.elementsManager.elements.get(partSyncMessageObject.elementId_nullHaNincsIlyesmi).partsManager.parts.get(partSyncMessageObject.partClassName).loadData()
            })
        })


    }

}