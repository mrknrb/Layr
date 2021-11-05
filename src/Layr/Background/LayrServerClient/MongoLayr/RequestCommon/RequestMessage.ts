import {RequestData} from "./RequestData.js";

export class RequestMessage {


    requestIdentifier
    requestToken
    requestDataArray:RequestData[]
    constructor( requestDataArray:RequestData[]) {

        this.requestDataArray=requestDataArray
    }


}