import {layrBackgroundB} from "../LayrBackground.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {RequestType} from "../LayrServerClient/RequestCommon/RequestType.js";

export class DocsConnectionsManager {

    docObjectsMap: Map<string, DocObject>
    connectionObjectsMap: Map<string, ConnectionObject>

    constructor() {

        this.docObjectsMap = new Map<string, DocObject>()
        this.connectionObjectsMap = new Map<string, ConnectionObject>()
    }


   async docLoad(docId: string, callback) {
        let self = this


        let docObjectMeglevo = this.docObjectsMap.get(docId)
        if (docObjectMeglevo == undefined) {
         let docObject=  await  this.docDownloadAndLoad(docId)

            let doc2 = self.docObjectsMap.get(docId)

            if (doc2 == undefined) {
                callback(null)
            } else {
                callback(docObject)
            }

        } else {
            callback(docObjectMeglevo)
        }
    }


    private async docDownloadAndLoad(docId: string):Promise<DocObject> {
        let self = this
        let docsData= await layrBackgroundB.layrClient.newRequest(RequestType.getDocs, [docId])

        let docData=docsData[0]
        let docObject = new DocObject(docData._id, docData)
        self.docObjectsMap.set(docData._id, docObject)

        return docObject

    }


}