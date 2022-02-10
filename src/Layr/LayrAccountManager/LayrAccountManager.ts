import {layrFrame, LayrFrame} from "../LayrFrame.js";
import {UserCookie} from "./UserCookie.js";
import {MrkLibrary} from "../../0Egyebek/MrkLibrary.js";
import {TypedEvent} from "../../0Libraries/TypedEvents.js";

export class LayrAccountManager {
    logoutEvent = new TypedEvent()
    loginEvent = new TypedEvent()
    changeLoginInfoEvent = new TypedEvent()

    previousLoginData?: UserCookie

    constructor() {
        this.LoginDataCheckInit()
        this.managerInit()
    }

    managerInit() {

        layrFrame.layrClient.invalidUserEvent.on(() => {
            this.deleteLoginData()
        })
    }

    login() {
        window.open("  http://localhost:8080/loginGoogle", '_blank')?.focus();

    }

    logout() {
        this.logoutEvent.emit(true)
        this.deleteLoginData()
    }

    deleteLoginData() {
        MrkLibrary.deleteAllCookies()
    }

    LoginDataCheckInit() {
        setInterval(() => {
            if (!MrkLibrary.twoObjectsSameCheck2(this.previousLoginData, this.getUserData())) {
                if (this.getUserData()) {
                    layrFrame.layrClient.socketioActivate(true)
                    this.changeLoginInfoEvent.emit(true)
                    if (!this.previousLoginData) this.loginEvent.emit(true)
                } else {
                    layrFrame.layrClient.socketioActivate(false)
                    this.changeLoginInfoEvent.emit(true)
                }
            }
            this.previousLoginData = this.getUserData()
        }, 3000)
    }

    getUserData() {
        let userData: UserCookie = MrkLibrary.getUserDataCookie()

        return userData

    }
}