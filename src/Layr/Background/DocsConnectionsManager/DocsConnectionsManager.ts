import {layrBackgroundB} from "../LayrBackground.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";
import {RequestType} from "../LayrServerClient/RequestCommon/RequestType.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {RequestData_getDocs} from "../../../0Egyebek/RequestDataTypes.js";
import {ConnectionData} from "../Data/Connection/ConnectionData.js";

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

        let docsData = await layrBackgroundB.layrClient.newRequest(RequestType.getDocs_ByDocsChildConnections, parentDocId)
        return await this.docObjectsSaver(docsData)
    }

    async insertNewDoc_AsParentDocChild(parentDocId: string) {
        console.log(parentDocId)
        let newDoc = new DocData()
      let docs= await this.insertDocs_AsParentDocChildren(parentDocId, [newDoc])
        return  docs[0]
    }

    async insertDocs_AsParentDocChildren(parentDocId: string, docDataArray: DocData[]) {
        let docsConnsData:{docs: DocData[], connections: ConnectionData[]} = await layrBackgroundB.layrClient.newRequest(RequestType.insertDocs_AsParentDocChildren, {parentDocId:parentDocId,docDataArray:docDataArray})
        await this.connectionObjectsSaver(docsConnsData.connections)
        return await this.docObjectsSaver(docsConnsData.docs)
    }

    private async docsDownloadAndLoad(docIds: string[]): Promise<DocObject[]> {

        let docsData = await layrBackgroundB.layrClient.newRequest(RequestType.getDocs, docIds)
        return await this.docObjectsSaver(docsData)

    }

    private async docObjectsSaver(docsData: DocData[]) {
        let betoltottDocObjects: DocObject[] = []
        for await (const docData of docsData) {
            let docObject = new DocObject(docData._id, docData)
            this.docObjectsMap.set(docData._id, docObject)
            betoltottDocObjects.push(docObject)
        }
        return betoltottDocObjects
    }
    private async connectionObjectsSaver(connectionsData: ConnectionData[]) {
        let betoltottConnectionObjects: ConnectionObject[] = []
        for await (const connectionData of connectionsData) {
            let connectionObject = new ConnectionObject(connectionData._id, connectionData)
            this.connectionObjectsMap.set(connectionData._id, connectionObject)
            betoltottConnectionObjects.push(connectionObject)
        }
        return betoltottConnectionObjects
    }

}