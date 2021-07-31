import {MessageGroups} from "./AdatTipusok/MessageGroups";
import {MessageTypes} from "./AdatTipusok/MessageTypes";
import {MessageMrkS} from "./MessageMrkS";

export class ArangoMrkMessageBackground {
    arangoMrkBackground

    constructor(arangoMrkBackground2) {
        this.arangoMrkBackground = arangoMrkBackground2
        this._messageInit()
    }

    _messageInit() {
        chrome.runtime.onMessage.addListener((message:MessageMrkS, sender, sendResponse) => {
            if (message.messageGroup === MessageGroups.ArangoMrk) {
                if (message.messageType === MessageTypes.docsDownloader) {
                    arangoMrkBackground.docsDownloader(message.messageData, function (data) {

                        sendResponse(data)
                    })
                }
            }
            return true
        })

    }

}

