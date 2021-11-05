import {RequestType} from "./MongoLayr/RequestCommon/RequestType.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {Lekerdezes} from "./MongoAdatok/Lekerdezes.js";
import {MongoMrk} from "./MongoMrk.js";

export class MongoMrkSeged {

    mongoMrk

    lekerdezesMap: Map<string, Lekerdezes>
    lekerdezesSzamlalomegy: boolean
    constructor(mongoMrk: MongoMrk) {
        this.mongoMrk = mongoMrk

        this.lekerdezesMap = new Map<string, Lekerdezes>()
    }



    public async lekerdezesSzamlaloStart() {
        let self = this
        if (!this.lekerdezesSzamlalomegy) {
            this.lekerdezesSzamlalomegy = true
            setTimeout(function () {
                self.lekerdezesSzamlalomegy = false
                let docURLsArray = []

                self.lekerdezesMap.forEach(function (value, key) {
                    docURLsArray.push(key)
                })
                self.getOneDoc_OsszessitettLetoltes(docURLsArray)

            }, 20)
        }
    }



    private async getOneDoc_OsszessitettLetoltes(docIdArray) {
        let self = this

        let docs = await this.requestCreator(RequestType.getDocs, docIdArray)

        docs.forEach(function (doc) {
            let lekerdezes = self.lekerdezesMap.get(doc._id)

            lekerdezes.promise(doc)
            self.lekerdezesMap.delete(doc._id)
        })
    }
    public async requestCreator(requestType: RequestType, requestBody): Promise<DocData[]> {
        let docs = await this.mongoMrk.axiosClient.post(`http://localhost:8080/api/${requestType}`, requestBody)
        return docs.data
    }
}