import {ToolElementBaseClass} from "../../../../Elements/ToolElementBaseClass.js";
import {ToolGroup} from "../../../../Elements/ToolGroup.js";
import {LayrWindow} from "../../../../Views/LayrWindow.js";

export class DocExplorer extends ToolElementBaseClass {

    loginWindow: LayrWindow = new LayrWindow()

    constructor(toolGroup: ToolGroup) {
        super(toolGroup);
        this.toolHTMLElementInit()
        this.docExplorerWindowInit()
    }

    toolHTMLElementInit() {
        this.toolHTMLElement = document.createElement("button")
        this.toolHTMLElement.classList.add("toolHTMLElementButton")
        this.toolHTMLElement.innerText = "Doc Explorer"
        this.toolHTMLElement.addEventListener("click", () => {
            this.loginWindow.closeOpenWindow(true)


        })
        this.toolGroup.toolGroupDiv.appendChild(this.toolHTMLElement)
    }

    docExplorerWindowInit() {
        let body = this.loginWindow.bodyDiv
        body.style.display = "flex"
        body.style.flexDirection = "column"
        let headerContainer = document.createElement("div")
        headerContainer.style.height = "50px"
        headerContainer.style.backgroundColor="#8d8d8d"
        body.appendChild(headerContainer)
        let tablecontainer = document.createElement("div")
        tablecontainer.style.flex = "1 1"
        tablecontainer.style.backgroundColor="#727272"
        body.appendChild(tablecontainer)
    }


}