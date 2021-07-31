import {MessageBase} from "./AdatTipusok/MessageBase";
import {MessageGroups} from "./AdatTipusok/MessageGroups";
import {MessageTypes} from "./AdatTipusok/MessageTypes";
import {URL_Object} from "./AdatTipusok/URL_Object";

export class ArangoMrkMessageClient {




   async docsDownloader(docURLsArray:string[], callback){
     let messageData=new MessageBase()
       messageData.messageGroup=MessageGroups.ArangoMrk
       messageData.messageType=MessageTypes.docsDownloader
       messageData.messageData=docURLsArray
       chrome.runtime.sendMessage(messageData, function (response) {
            callback(response)
        })


    }

}



