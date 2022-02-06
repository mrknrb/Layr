import {MessageLayr, MessageType} from "./MessageLayr.js";

export class MessageManager {

    messageWindow: Window
    messageType: MessageType

    constructor(messageWindow: Window, messageType: MessageType) {
        this.messageWindow = messageWindow
        this.messageType = messageType
    }

    sendMassage(messageData: string) {
        let message = new MessageLayr(this.messageType, messageData)
        this.messageWindow.postMessage(message, '*');
        return message
    }

    sendMassageExceptingReply(messageData: string) {
        let message = this.sendMassage(messageData)
        return new Promise((resolve, reject) => {
            this.messageWindow.addEventListener('message', event => {
                let messageReply: MessageLayr = event.data
                if (messageReply.messageId === message.messageId && messageReply.reply) {
                    resolve(messageReply)
                }
            })
        })
    }

    messageReceiverInit(callback: (message: MessageLayr, replyCallback: (replyMessageData: any) => any) => any) {
        this.messageWindow.addEventListener('message', event => {
            let message: MessageLayr = event.data
            if (message.messageType === this.messageType) {
                console.log(event)
                callback(message, (replyMessageData) => {
                    this.replyMessage(replyMessageData, message)
                })
            }
        })
    }

    private replyMessage(replyMessageData: any, message: MessageLayr) {
        let replyMessage = new MessageLayr(message.messageType, replyMessageData, true)
        this.messageWindow.postMessage(replyMessage, '*');
    }


}