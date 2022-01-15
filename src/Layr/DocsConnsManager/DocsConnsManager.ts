import {DocObject} from "./Data/Doc/Doc/DocObject.js";
import {ConnObject} from "./Data/Conn/ConnObject.js";
import {RequestType} from "../LayrServerClient/RequestCommon/RequestType.js";
import {DocData} from "./Data/Doc/Doc/DocData.js";
import {ConnData} from "./Data/Conn/ConnData.js";
import {DocsConnsData} from "./DocsConnsData.js";
import {DocsConnsObjects} from "./DocsConnsObjects.js";
import {LayrFind} from "../../0Egyebek/LayrFind.js";
import {layrFrame} from "../LayrFrame.js";

export class DocsConnsManager {

    docObjectsMap: Map<string, DocObject>
    connObjectsMap: Map<string, ConnObject>

    constructor() {

        this.docObjectsMap = new Map<string, DocObject>()
        this.connObjectsMap = new Map<string, ConnObject>()
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

    async loadDocs_ByDocChildConns(parentDocId: string) {

        let docsConnsData: DocsConnsData = await layrFrame.layrClient.newRequest(RequestType.getDocs_ByDocsChildConns, parentDocId)
        console.log("faszaaaaaaaaaaaaa")
        console.log(docsConnsData)
        return this.docsConnsData_TO_DocsConnsObjects_AndSave(docsConnsData)

    }

    async insertNewDoc_AsParentDocChild(parentDocId: string) {

        let newDoc = new DocData()

        return await this.insertDocs_AsParentDocChildren(parentDocId, [newDoc])
    }

    async insertDocs_AsParentDocChildren(parentDocId: string, docDataArray: DocData[]) {
        let docsConnsData: DocsConnsData = await layrFrame.layrClient.newRequest(RequestType.insertDocs_AsParentDocChildren, {
            parentDocId: parentDocId,
            docDataArray: docDataArray
        })
        return this.docsConnsData_TO_DocsConnsObjects_AndSave(docsConnsData)
    }

    async updateDoc(docId: string, OriginalDocFunction: (docDataOffline: DocData, ModifiedDocFunction: (docDataModified: DocData) => any) => any) {

        let mentettDoc = await LayrFind.doc(docId)
        if (mentettDoc === undefined) return undefined
        let modifiedDocFunction = async (docDataModified: DocData) => {
            return await layrFrame.layrClient.newRequest(RequestType.updateDocs, [docDataModified])
        }
        OriginalDocFunction(mentettDoc.docData, modifiedDocFunction)
        return true
    }

    async updateConn(conId: string, OriginalConFunction: (conDataOffline: ConnData, ModifiedDocFunction: (conDataModified: ConnData) => any) => any) {

        let mentettCon = await LayrFind.conn(conId)
        if (mentettCon === undefined) return undefined
        let modifiedConFunction = async (conDataModified: ConnData) => {
            return await layrFrame.layrClient.newRequest(RequestType.updateCons, [conDataModified])
        }
        OriginalConFunction(mentettCon.connData, modifiedConFunction)
        return true
    }

    private async docsDownloadAndLoad(docIds: string[]) {

        let docsData = await layrFrame.layrClient.newRequest(RequestType.getDocs, docIds)
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

    private async connObjectsSaver(connectionsData: ConnData[]) {
        let betoltottConnectionObjects: ConnObject[] = []
        for await (const connectionData of connectionsData) {
            let connectionObject = new ConnObject(connectionData)
            this.connObjectsMap.set(connectionData._id, connectionObject)
            betoltottConnectionObjects.push(connectionObject)
        }
        return betoltottConnectionObjects
    }

    private async docsConnsData_TO_DocsConnsObjects_AndSave(docsConnsData: DocsConnsData) {
        let docObjects = await this.docObjectsSaver(docsConnsData.docsData)
        let connectionObjects = await this.connObjectsSaver(docsConnsData.connsData)

        return new DocsConnsObjects(docObjects, connectionObjects)
    }


}