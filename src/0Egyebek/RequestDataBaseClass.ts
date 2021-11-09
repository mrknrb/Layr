import {RequestType} from "../Layr/Background/LayrServerClient/RequestCommon/RequestType.js";

export abstract class RequestDataBaseClass {

    requestId:Number
    requestType: string
    requestBody: any
    protected constructor() {
        this.requestId=Math.random()
    }


}