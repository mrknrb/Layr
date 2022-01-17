import {ToolElementBaseClass} from "../../../../Elements/ToolElementBaseClass.js";
import {ToolGroup} from "../../../../Elements/ToolGroup.js";
import {LayrWindow} from "../../../../Views/LayrWindow.js";

export class ToolElementLogin extends ToolElementBaseClass {

loginWindow:LayrWindow=new LayrWindow()
    constructor(toolGroup: ToolGroup) {
        super(toolGroup);
        this.toolHTMLElementInit()
        this.loginWindowInit()
    }

    toolHTMLElementInit() {
        this.toolHTMLElement = document.createElement("button")
        this.toolHTMLElement.classList.add("toolHTMLElementButton")
        this.toolHTMLElement.innerText = "Login"
        this.toolHTMLElement.addEventListener("click",()=>{
            this.loginWindow.closeOpenWindow(true)

        })
        this.toolGroup.toolGroupDiv.appendChild(this.toolHTMLElement)
    }
    loginWindowInit(){
        let body=this.loginWindow.bodyDiv



    }

}