import {MessageGroups} from "./AdatTipusok/MessageGroups.js";
import {DocData} from "../NodeDiv/NodeDocData/DocData/DocData.js";
import {MessageMrkS} from "./MessageMrkS.js";
import {MessageTypes} from "./AdatTipusok/MessageTypes.js";


export class ArangoMrkMessageClient {




   async docsDownloader(docURLsArray:string[], callback){
     let messageData=new MessageMrkS()
       messageData.messageGroup=MessageGroups.ArangoMrk
       messageData.messageType=MessageTypes.docsDownloader
       messageData.messageData=docURLsArray

       chrome.runtime.sendMessage(messageData, function (response: DocData[]) {
           callback(response)
       })


    }

}



