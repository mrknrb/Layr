import {RequestType} from "./RequestCommon/RequestType.js";
import {RequestObject} from "./RequestObject.js";
import {DocData} from "../../Data/Doc/Doc/DocData.js";
import {RequestMessage} from "./RequestCommon/RequestMessage.js";

export class MongoLayrClient {
    axiosClient
    requestMap: Map<Number, RequestObject>
    lekerdezesSzamlalomegy: boolean
    constructor() {
        //@ts-ignore
        this.axiosClient = axios
        this.requestMap = new Map<Number, RequestObject>()

    }


    async newRequest(requestType: RequestType, requestData) {
        let request = new RequestObject(requestType, requestData)
        this.requestMap.set(request.requestData.requestId, request)
        this.lekerdezesSzamlaloStart()
        return request.promise
    }
    private async lekerdezesSzamlaloStart() {
        let self = this
        if (!this.lekerdezesSzamlalomegy) {
            this.lekerdezesSzamlalomegy = true
            setTimeout(function () {
                self.lekerdezesSzamlalomegy = false


                let elkuldendoRequestsArray = []

                self.requestMap.forEach(function (value, key) {
                  if (! value.elkuldott) {
                      elkuldendoRequestsArray.push(value.requestData)
                  }
                })

                self.requestsSend(elkuldendoRequestsArray)

            }, 20)
        }
    }

    private async requestsSend(elkuldendoRequestsArray) {
        let self = this
        let requestMessage =new RequestMessage(elkuldendoRequestsArray)

        let docs = await this.requestCreator( elkuldendoRequestsArray)

        docs.forEach(function (doc) {
            let lekerdezes = self.requestMap.get(doc._id)

            lekerdezes.promise(doc)
            self.requestMap.delete(doc._id)
        })
    }
    private async requestCreator( requestBody): Promise<DocData[]> {
        let docs = await this.axiosClient.post(`http://localhost:8080/api/request`, requestBody)
        return docs.data
    }

}