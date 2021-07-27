import {MessageGroupEnums} from "./AdatTipusok/MessageGroupEnums";
import {MessageTypeEnums} from "./AdatTipusok/MessageTypeEnums";

export class ArangoMrkMessageBackground {
    arangoMrkBackground

    constructor(arangoMrkBackground2) {
        this.arangoMrkBackground = arangoMrkBackground2
        this._messageInit()
    }

    _messageInit() {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.messageGroup === MessageGroupEnums.ArangoMrk) {
                if (message.messageType === MessageTypeEnums.docsDownloader) {
                    arangoMrkBackground.docsDownloader(message.messageData, function (data) {

                        sendResponse(data)
                    })
                }
            }
            return true
        })

    }

}

