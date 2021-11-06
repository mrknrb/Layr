import {LayrBackground, layrBackgroundB} from "../LayrBackground.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {ConnectionObject} from "../Data/Connection/ConnectionObject.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {layrBackgroundF} from "../../Frame/MainFrame.js";

export class DocsConnectionsManager {

    docObjectsMap: Map<string, DocObject>
    connectionObjectsMap: Map<string, ConnectionObject>

    constructor() {

        this.docObjectsMap = new Map<string, DocObject>()
        this.connectionObjectsMap = new Map<string, ConnectionObject>()
    }


    docLoad(docId: string, callback) {
        let self = this

        let docObjectMeglevo = this.docObjectsMap.get(docId)


        if (docObjectMeglevo == undefined) {
            this.docDownloadAndLoad(docId, function (docObject) {

                let doc2 = self.docObjectsMap.get(docId)

                if (doc2 == undefined) {
                    callback(null)
                } else {
                    callback(docObject)
                }
            })
        } else {
            callback(docObjectMeglevo)
        }
    }


    private docDownloadAndLoad(docId: string, callback) {
        let self = this
        layrBackgroundB.layrClient.getOneDoc(docId, function (docData:DocData) {
            console.log(docData)
            let docObject = new DocObject(docData._id, docData)
            self.docObjectsMap.set(docData._id, docObject)

            callback(docObject)
        })
    }


}