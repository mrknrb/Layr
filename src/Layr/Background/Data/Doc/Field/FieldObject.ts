import {FieldData} from "./FieldData.js";
import {FieldEvents} from "./FieldEvents.js";
import {DocObject} from "../Doc/DocObject.js";
import {layrBackgroundB} from "../../../LayrBackground.js";
import {LayrFind} from "../../../../Global/LayrFind.js";
import {PartSyncMessageObject} from "../../../../Frame/NodesEdgesManager/PartsGeneral/PartSyncMessageObject.js";


export class FieldObject {
    fieldData: FieldData
    fieldEvents: FieldEvents
    docObject: DocObject

    constructor(fieldData: FieldData, docObject: DocObject) {
        this.docObject = docObject
        this.fieldData = fieldData
        this.fieldEvents = new FieldEvents()
        this.fieldDataMongoUpdateInit()
        this.fieldDataUpdateNodesSyncInit()
    }


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

    elementPartChangeSync(partSyncMessageObject: PartSyncMessageObject) {
        this.fieldDataMongoUpdate()
        this.elementPartSyncWithOthers(partSyncMessageObject)
    }


    fieldDataMongoUpdate() {
        layrBackgroundB.docsConnectionsManager.updateDoc(this.docObject.docData._id, (docDataOriginal, ModifiedDocFunction) => {
            ModifiedDocFunction(this.docObject.docData)
        })
    }

    elementPartSyncWithOthers(partSyncMessageObject: PartSyncMessageObject) {
            let nodes = LayrFind.nodes_ByDocId_Global(this.docObject.docData._id)
            nodes.forEach((node, index) => {
                node.elementsManager.elements.get(partSyncMessageObject.elementId_nullHaNincsIlyesmi).partsManager.parts.get(partSyncMessageObject.partClassName).loadMain()
            })
    }
}

/*
//teszt alternativ megoldas a masik helyett------------------------------------
async tesztFieldGetAndChange(part: PartBase, firstFunction: (fieldData: FieldData, secondFunction: () => any) => any) {
    let partSyncMessageObject = new PartSyncMessageObject(part.constructor.name, part.elementObject.fieldId)
    let secondFunction = async () => {
        this.fieldDataMongoUpdate()
        this.elementPartSyncWithOthers(partSyncMessageObject)
    }
    firstFunction(this.fieldData, secondFunction)
}

//------------------------------------------------------------------------
*/