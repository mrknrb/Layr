import {MessageGroups} from "./AdatTipusok/MessageGroups.js";
import {MessageMrkS} from "./MessageMrkS.js";
import {MessageTypes} from "./AdatTipusok/MessageTypes.js";


export class ArangoMrkMessageBackground {
	arangoMrkBackground

	constructor(arangoMrkBackground2) {
		this.arangoMrkBackground = arangoMrkBackground2
		this._messageInit()
	}

	_messageInit() {
		chrome.runtime.onMessage.addListener((message: MessageMrkS, sender, sendResponse) => {
			console.log(message)
			if (message.messageGroup === MessageGroups.ArangoMrk) {
				if (message.messageType === MessageTypes.docsDownloader) {

					console.log("message")
					this.arangoMrkBackground.docsDownloader(message.messageData, function (data) {

						sendResponse(data)
					})
				}
			}
			return true
		})

	}

}
