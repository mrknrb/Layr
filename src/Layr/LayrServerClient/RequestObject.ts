import {DocData} from "../DocsConnsManager/Data/Doc/Doc/DocData.js";
import {RequestData} from "./RequestCommon/RequestData.js";
import {RequestType} from "./RequestCommon/RequestType.js";

export class RequestObject {

    requestData: RequestData
    promise: Promise<any>
    resolve!:(value?:DocData[]|PromiseLike<DocData[]>|undefined)=>void
    reject!:(reason?:any)=>void
    elkuldott: boolean=false

    constructor(requestType: RequestType, requestBody: any) {

        this.requestData = new RequestData()
        this.requestData.requestId = Math.random()
        this.requestData.requestType = requestType
        this.requestData.requestBody = requestBody
        this.promise = new Promise<DocData[]>((resolve, reject) => {

            this.resolve = resolve
            this.reject = reject

        });

    }


}