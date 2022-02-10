import {RequestType} from "./RequestCommon/RequestType.js";
import {RequestObject} from "./RequestObject.js";
import {RequestMessage} from "./RequestCommon/RequestMessage.js";
import {ReplyData} from "./RequestCommon/ReplyData.js";
import {RequestData} from "./RequestCommon/RequestData.js";
import {TypedEvent} from "../../0Libraries/TypedEvents.js";
import {SocketIOMessageTypes} from "./SocketIOMessageTypes.js";
import {MrkLibrary} from "../../0Egyebek/MrkLibrary.js";

export class LayrClient {
    private socketio!: Socket
    private requestMap: Map<Number, RequestObject>
    private lekerdezesSzamlalomegy: boolean = false
    invalidUserEvent = new TypedEvent()
    socketioActivateEvent = new TypedEvent<boolean>()

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
        let userCookie = MrkLibrary.getUserDataCookie()

        const connectionObject = {
            auth: {
                token:`${JSON.stringify(userCookie)}`,
            }
        }


        this.socketio = io("localhost:4562" || "", connectionObject)
        // this.socketio = io("http://127.0.0.1:4562"||"",connectionObject)
        //yx valamiert nem mukodott ip címmel, csak localhosttal, nem kuldte el a cookiet https://stackoverflow.com/questions/8030199/node-js-express-js-socket-io-authorization-no-cookie
        this.socketio.on("message", (message: string) => {
            console.log("Server Message:", message)
        });
        this.socketio.on(SocketIOMessageTypes.invalidUser, () => {
            this.invalidUserEvent.emit(true)
            this.socketioActivate(false)
        });


        this.socketio.on("connect", () => {
            this.socketio.send("Connection Message From Client");
        });


        //@ts-ignore
        window.socketio = this.socketio
    }

    socketioActivate(active: boolean) {
        if (this.socketio.active != active) {
            active ? this.socketio.connect() : this.socketio.disconnect()
            this.socketioActivateEvent.emit(active)
        }
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
        console.error(requestMessage)
        requestMessage.setUserIdentification()
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