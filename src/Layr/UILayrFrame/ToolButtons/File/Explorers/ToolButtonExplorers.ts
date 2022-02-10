import {ToolElementBaseClass} from "../../../../UILayrFrame/Elements/ToolElementBaseClass.js";
import {ToolGroup} from "../../../../UILayrFrame/Elements/ToolGroup.js";
import {DocExplorer} from "../../../../LayrTools/File/Explorers/DocExplorer/DocExplorer.js";
import {CollectionExplorer} from "../../../../LayrTools/File/Explorers/DocExplorer/CollectionExplorer.js";

export class ToolButtonExplorers extends ToolElementBaseClass {

    docExplorer = new DocExplorer()
    collectionExplorer = new CollectionExplorer()

    constructor(toolGroup: ToolGroup) {
        super(toolGroup);
        this.docToolHTMLElementInit()
        this.collectiontoolHTMLElementInit()
    }

    docToolHTMLElementInit() {
        this.toolHTMLElement = document.createElement("button")
        this.toolHTMLElement.classList.add("toolHTMLElementButton")
        this.toolHTMLElement.innerText = "Doc Explorer"
        this.toolHTMLElement.addEventListener("click", () => {
            this.docExplorer.window.closeOpenWindow(true)
        })
        this.toolGroup.toolGroupDiv.appendChild(this.toolHTMLElement)
    }

    collectiontoolHTMLElementInit() {
        this.toolHTMLElement = document.createElement("button")
        this.toolHTMLElement.classList.add("toolHTMLElementButton")
        this.toolHTMLElement.innerText = "Collection Explorer"
        this.toolHTMLElement.addEventListener("click", () => {
            this.collectionExplorer.window.closeOpenWindow(true)


        })
        this.toolGroup.toolGroupDiv.appendChild(this.toolHTMLElement)
    }


}