import {RequestData} from "./RequestData.js";

export class RequestMessage {


   // userEmail?: string
   // userToken?: string
    userIdCookies?:string

    requestDataArray: RequestData[]

    constructor(requestDataArray: RequestData[]) {


        this.requestDataArray = requestDataArray
    }

    setUserIdentification() {
        this.userIdCookies= document.cookie;

    }

}