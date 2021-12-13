import {FieldData} from "./FieldData.js";
import {FieldEvents} from "./FieldEvents.js";
import {DocObject} from "../Doc/DocObject.js";
import {LayrFind} from "../../../../../0Egyebek/LayrFind.js";
import {SyncObjectElement_Field} from "./SyncObjectElement_Field.js";
import {layrFrame} from "../../../../LayrFrame.js";


export class FieldObject {
    fieldData: FieldData
    fieldEvents: FieldEvents
    docObject: DocObject
    syncObjectElement_Field: SyncObjectElement_Field

    constructor(fieldData: FieldData, docObject: DocObject) {
        this.docObject = docObject
        this.fieldData = fieldData
        this.fieldEvents = new FieldEvents()
        this.syncObjectElement_Field = new SyncObjectElement_Field(this)
        // this.fieldDataMongoUpdateInit()
        // this.fieldDataUpdateNodesSyncInit()
    }

    /*
        private fieldDataMongoUpdateInit() {
            let self = this
            this.fieldEvents.onFieldChange.on(() => {
                this.fieldDataMongoUpdate()
            })
        }

        private fieldDataUpdateNodesSyncInit() {
            this.fieldEvents.onFieldChange.on((partSyncMessageObject) => {
                this.elementPartSyncWithOthers(partSyncMessageObject)
            })
        }
    */
    elementPartChangeSync(elementId: string, partClassName: string, loadData) {
        this.fieldDataMongoUpdate()
        this.elementPartSyncWithOthers(elementId, partClassName, loadData)
    }


    fieldDataMongoUpdate() {
        layrFrame.docsConnsManager.updateDoc(this.docObject.docData._id, (docDataOriginal, ModifiedDocFunction) => {
            ModifiedDocFunction(this.docObject.docData)
        })
    }

    elementPartSyncWithOthers(elementId: string, partClassName: string, loadData?: any) {
        let nodes = LayrFind.nodes_ByDocId_Global(this.docObject.docData._id)
        nodes.forEach((node, index) => {
            node.elementsManager.elements.get(elementId).smpManager.masterObjectParts.getObject(partClassName).loadData(loadData)
        })
    }
}

/*
//teszt alternativ megoldas a masik helyett------------------------------------
async tesztFieldGetAndChange(part: PartBase, firstFunction: (DocData: FieldData, secondFunction: () => any) => any) {
    let partSyncMessageObject = new SyncDataObject(part.constructor.name, part.object.fieldId)
    let secondFunction = async () => {
        this.fieldDataMongoUpdate()
        this.elementPartSyncWithOthers(partSyncMessageObject)
    }
    firstFunction(this.DocData, secondFunction)
}

//------------------------------------------------------------------------
*/