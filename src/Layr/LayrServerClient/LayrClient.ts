import {RequestType} from "./RequestCommon/RequestType.js";
import {RequestObject} from "./RequestObject.js";
import {RequestMessage} from "./RequestCommon/RequestMessage.js";
import {ReplyData} from "./RequestCommon/ReplyData.js";
import {RequestData} from "./RequestCommon/RequestData.js";


export class LayrClient {
    private socketio!: any
    private requestMap: Map<Number, RequestObject>
    private lekerdezesSzamlalomegy: boolean = false

    constructor() {

        this.requestMap = new Map<Number, RequestObject>()

        this.socketioInit()
        this.replyInit()

    }

    async newRequest(requestType: RequestType, requestBody: any) {


        let request = new RequestObject(requestType, requestBody)
        this.requestMap.set(request.requestData.requestId, request)
        this.lekerdezesSzamlaloStart()
        return request.promise
    }

    private socketioInit() {
        //@ts-ignore
        this.socketio = io("http://127.0.0.1:4562")
        this.socketio.on("message", (message: string) => {
            console.log("Server Message:", message)
        });
        this.socketio.on("connect", () => {
            this.socketio.send("Connection Message From Client");
        });


        //@ts-ignore
        window.socketio = this.socketio
    }


    private async lekerdezesSzamlaloStart() {
        let self = this
        if (!this.lekerdezesSzamlalomegy) {
            this.lekerdezesSzamlalomegy = true
            setTimeout(function () {
                self.lekerdezesSzamlalomegy = false


                let elkuldendoRequestsArray: RequestData[] = []

                self.requestMap.forEach(function (value, key) {
                    if (!value.elkuldott) {
                        elkuldendoRequestsArray.push(value.requestData)
                        value.elkuldott = true
                    }
                })

                self.requestsSend(elkuldendoRequestsArray)

            }, 20)
        }
    }

    private async requestsSend(elkuldendoRequestsArray: RequestData[]) {

        let requestMessage = new RequestMessage(elkuldendoRequestsArray)

        this.socketio.emit("request", requestMessage);


    }

    private replyInit() {

        this.socketio.on("requestReply", (replyDataArray: ReplyData[]) => {

            console.log("replyDataArray: ", replyDataArray);
            replyDataArray.forEach((replyData) => {
                let request = this.requestMap.get(replyData.requestId)
                if (request === undefined) {
                    console.error("Mrk: cant find request of requestid: ", replyData.requestId);
                } else {
                    request.resolve(replyData.replyBody)
                    this.requestMap.delete(replyData.requestId)
                }


            })


        });
    }

}