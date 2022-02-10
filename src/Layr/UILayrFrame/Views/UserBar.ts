import {LayrUI} from "../LayrUI.js";
import {LayrWindow} from "../../UIElemek/LayrWindow.js";
import {MrkLibrary} from "../../../0Egyebek/MrkLibrary.js";
import {UserCookie} from "../../LayrAccountManager/UserCookie.js";
import {layrFrame} from "../../LayrFrame.js";

export class UserBar {
    layrUI: LayrUI
    userBarElement: HTMLDivElement
    loginWindow: LayrWindow = new LayrWindow()
    loginButton = document.createElement("button")

    userInfoDiv = document.createElement("div")
    userInfoPicture = document.createElement("img")
    userInfoName = document.createElement("b")
    userInfoEmail = document.createElement("a")
logoutButton= document.createElement("input")
    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.menuBarInit()
        this.toolHTMLElementInit()
        this.userInfoInit()
    }

    menuBarInit() {
        this.userBarElement = document.createElement("div")
        this.userBarElement.style.flex = "1 1"
        this.userBarElement.style.display = "flex"
        this.userBarElement.style.flexDirection = "row-reverse"
        this.layrUI.topBar.topBarElement.appendChild(this.userBarElement)
    }
    toolHTMLElementInit() {
        this.loginButton.innerText = "Login"
        this.loginButton.addEventListener("click", () => {

            layrFrame.layrAccountManager.login()
        })
        this.userBarElement.appendChild(this.loginButton)
    }

    userDataRefresh(userCookie: UserCookie) {

        if (!userCookie) {
            this.loginButton.style.display = "block"
            this.userInfoDiv.style.display = "none"
        }else {
            this.loginButton.style.display = "none"
            this.userInfoDiv.style.display = "flex"

            userCookie.userPicture ? this.userInfoPicture.src = userCookie.userPicture : this.userInfoPicture.src = ""
            userCookie.userName ? this.userInfoName.innerText = userCookie.userName : this.userInfoName.innerText = ""

          //  userCookie.email ? this.userInfoEmail.innerText = userCookie.email : this.userInfoEmail.innerText = ""
        }
    }

    userInfoInit() {
        this.userInfoDiv.appendChild(this.userInfoPicture)
        this.userInfoDiv.appendChild(this.userInfoName)
        this.userInfoDiv.appendChild(this.userInfoEmail)
        this.userInfoDiv.style.gap="4px"
        this.userInfoDiv.style.flexDirection="row-reverse"
        this.userBarElement.appendChild(this.userInfoDiv)

        this.logoutButton.type="button"
        this.logoutButton.value="logout"
        this.logoutButton.addEventListener("click",ev => {
            layrFrame.layrAccountManager.logout()

        })
        this.userInfoDiv.appendChild( this.logoutButton)
        this.userDataRefresh(  layrFrame.layrAccountManager.getUserData())
        layrFrame.layrAccountManager.logoutEvent.on(event => {
            this.userDataRefresh(  layrFrame.layrAccountManager.getUserData())
        })

        layrFrame.layrAccountManager.   changeLoginInfoEvent.on(event => {
            this.userDataRefresh(  layrFrame.layrAccountManager.getUserData())
        })


    }






}
