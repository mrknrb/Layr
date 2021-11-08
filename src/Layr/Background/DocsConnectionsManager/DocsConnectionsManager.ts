import {layrBackgroundB} from "../LayrBackground.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";
import {RequestType} from "../LayrServerClient/RequestCommon/RequestType.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
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

        let docsData = await layrBackgroundB.layrClient.newRequest(RequestType.getDocs_ByDocsChildConnections, parentDocId)


        return await this.docObjectsSaver(docsData)


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


}