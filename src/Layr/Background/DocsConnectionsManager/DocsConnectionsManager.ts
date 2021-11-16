import {layrBackgroundB} from "../LayrBackground.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";
import {RequestType} from "../LayrServerClient/RequestCommon/RequestType.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {ConnectionData} from "../Data/Connection/ConnectionData.js";
import {DocsConnsData} from "./DocsConnsData.js";
import {DocsConnsObjects} from "./DocsConnsObjects.js";
import {LayrFind} from "../../Global/LayrFind.js";

export class DocsConnectionsManager {

    docObjectsMap: Map<string, DocObject>
    connectionObjectsMap: Map<string, ConnectionObject>

    constructor() {

        this.docObjectsMap = new Map<string, DocObject>()
        this.connectionObjectsMap = new Map<string, ConnectionObject>()
    }


    async loadDocs(docIds: string[]) {
        let letoltendoDocIds: string[] = []
        let betoltottDocObjects: DocObject[] = []
        for await (const docId of docIds) {
            let docObjectMeglevo = this.docObjectsMap.get(docId)
            if (docObjectMeglevo == undefined) {
                letoltendoDocIds.push(docId)
            } else {
                betoltottDocObjects.push(docObjectMeglevo)
            }
        }
        let mostBetoltottDocObjects = await this.docsDownloadAndLoad(letoltendoDocIds)
        return betoltottDocObjects.concat(mostBetoltottDocObjects)
    }

    async loadDocs_ByDocChildConnections(parentDocId: string) {

        let docsConnsData: DocsConnsData = await layrBackgroundB.layrClient.newRequest(RequestType.getDocs_ByDocsChildConnections, parentDocId)

        return this.docsConnsData_TO_DocsConnsObjects_AndSave(docsConnsData)

    }

    async insertNewDoc_AsParentDocChild(parentDocId: string) {

        let newDoc = new DocData()
        let docsConnsObjects = await this.insertDocs_AsParentDocChildren(parentDocId, [newDoc])
        return docsConnsObjects
    }

    async insertDocs_AsParentDocChildren(parentDocId: string, docDataArray: DocData[]) {
        let docsConnsData: DocsConnsData = await layrBackgroundB.layrClient.newRequest(RequestType.insertDocs_AsParentDocChildren, {
            parentDocId: parentDocId,
            docDataArray: docDataArray
        })

        return this.docsConnsData_TO_DocsConnsObjects_AndSave(docsConnsData)


    }

    async updateDoc(docId: string, OriginalDocFunction: (docDataOffline: DocData, ModifiedDocFunction: (docDataModified: DocData) => any) => any) {

        let mentettDoc = await LayrFind.doc(docId)

        let modifiedDocFunction = async (docDataModified: DocData) => {
            let sikerultBool = await layrBackgroundB.layrClient.newRequest(RequestType.updateDocs, [docDataModified])
            return sikerultBool
        }
        OriginalDocFunction(mentettDoc.docData, modifiedDocFunction)
    }


    private async docsDownloadAndLoad(docIds: string[]): Promise<DocObject[]> {

        let docsData = await layrBackgroundB.layrClient.newRequest(RequestType.getDocs, docIds)
        return await this.docObjectsSaver(docsData)

    }

    private async docObjectsSaver(docsData: DocData[]) {
        let betoltottDocObjects: DocObject[] = []
        for await (const docData of docsData) {
            let docObject = new DocObject(docData)
            this.docObjectsMap.set(docData._id, docObject)
            betoltottDocObjects.push(docObject)
        }
        return betoltottDocObjects
    }

    private async connectionObjectsSaver(connectionsData: ConnectionData[]) {
        let betoltottConnectionObjects: ConnectionObject[] = []
        for await (const connectionData of connectionsData) {
            let connectionObject = new ConnectionObject(connectionData)
            this.connectionObjectsMap.set(connectionData._id, connectionObject)
            betoltottConnectionObjects.push(connectionObject)
        }
        return betoltottConnectionObjects
    }

    private async docsConnsData_TO_DocsConnsObjects_AndSave(docsConnsData: DocsConnsData) {
        let docObjects = await this.docObjectsSaver(docsConnsData.docsData)
        let connectionObjects = await this.connectionObjectsSaver(docsConnsData.connectionsData)

        return new DocsConnsObjects(docObjects, connectionObjects)
    }


}