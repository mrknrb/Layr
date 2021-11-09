import {DocData} from "../Data/Doc/Doc/DocData.js";
import {RequestDataBaseClass} from "./RequestCommon/RequestDataBaseClass.js";
import {RequestData} from "./RequestCommon/RequestData.js";
import {RequestType} from "./RequestCommon/RequestType.js";

export class RequestObject {

    requestData: RequestData
    promise: Promise<any>
    resolve
    reject
    elkuldott: boolean

    constructor(requestType:RequestType,requestBody:any) {

        this.requestData = new RequestData()
        this.  requestData.requestId=Math.random()
        this.  requestData.requestType=requestType
        this.  requestData.requestBody=requestBody
        this.promise = new Promise<DocData[]>((resolve, reject) => {

            this.resolve = resolve
            this.reject = reject

        });

    }


}