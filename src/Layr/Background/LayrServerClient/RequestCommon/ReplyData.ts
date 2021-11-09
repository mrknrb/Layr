import {RequestDataBaseClass} from "./RequestDataBaseClass.js";

export class ReplyData {

    constructor(requestData:RequestDataBaseClass, replyBody:any) {
        this.requestId=requestData.requestId
        this.replyBody=replyBody

    }

    requestId: Number
    replyBody: any

}