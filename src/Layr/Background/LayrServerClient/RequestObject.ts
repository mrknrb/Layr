import {RequestType} from "./RequestCommon/RequestType.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {RequestData} from "./RequestCommon/RequestData.js";

export class RequestObject {

    requestData:RequestData
    promise: Promise<any>
    resolve
    reject
    elkuldott:boolean
    constructor(requestType: RequestType, requestBody) {

        this.requestData= new RequestData
        this.requestData. requestType=requestType
        this.requestData.requestBody=requestBody
        this.requestData.requestId=Math.random()
        this.promise = new Promise<DocData[]>((resolve, reject) => {

            this.resolve=resolve
            this.reject=reject

        });

    }


}