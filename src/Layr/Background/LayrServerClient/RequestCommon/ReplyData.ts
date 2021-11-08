import {RequestData} from "./RequestData.js";

export class ReplyData {

    constructor(requestData:RequestData,replyBody:any) {
        this.requestId=requestData.requestId
        this.replyBody=replyBody

    }

    requestId: Number
    replyBody: any

}