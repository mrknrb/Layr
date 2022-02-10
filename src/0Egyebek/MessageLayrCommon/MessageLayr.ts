export class MessageLayr {
    messageId:number
    messageType:MessageType
    reply:boolean
    data:any
    constructor(messageType:MessageType,data:any,reply:boolean=false) {
        this.messageId=Math.random()
        this.messageType=messageType
        this.reply=reply
        this.data=data
    }
}



export enum MessageType{
    ToContent_Refresh="ToContent_Refresh",
    ToContent_Back="ToContent_Back",
    ToContent_Forward="ToContent_Forward",
    ToFrame_UrlChanged="ToFrame_UrlChanged",
    FromServer_ToSocketIOClient_InvalidUser="FromServer_ToSocketIOClient_InvalidUser"
}
