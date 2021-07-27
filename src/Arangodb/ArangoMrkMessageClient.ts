import {MessageBase} from "./AdatTipusok/MessageBase";
import {MessageGroupEnums} from "./AdatTipusok/MessageGroupEnums";
import {MessageTypeEnums} from "./AdatTipusok/MessageTypeEnums";
import {URL_Object} from "./AdatTipusok/URL_Object";

export class ArangoMrkMessageClient {




   async docsDownloader(docURLsArray:string[], callback){
     let messageData=new MessageBase()
       messageData.messageGroup=MessageGroupEnums.ArangoMrk
       messageData.messageType=MessageTypeEnums.docsDownloader
       messageData.messageData=docURLsArray
       chrome.runtime.sendMessage(messageData, function (response) {
            callback(response)
        })


    }

}



