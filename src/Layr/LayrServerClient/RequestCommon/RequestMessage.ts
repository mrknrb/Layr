import {RequestData} from "./RequestData.js";
import {MrkLibrary} from "../../../0Egyebek/MrkLibrary.js";
import {UserCookie} from "../../LayrAccountManager/UserCookie.js";

export class RequestMessage {


   // userEmail?: string
   // userToken?: string
    userIdCookies?:UserCookie

    requestDataArray: RequestData[]

    constructor(requestDataArray: RequestData[]) {
        this.requestDataArray = requestDataArray
    }

    setUserIdentification() {
        this.userIdCookies= MrkLibrary.getUserDataCookie()
    }
}