import {ToolElementBaseClass} from "../../../../Elements/ToolElementBaseClass.js";
import {OptionElement} from "../../../../Elements/OptionElement.js";
import {ToolGroup} from "../../../../Elements/ToolGroup.js";

export class ToolElementLogin extends ToolElementBaseClass {


    constructor(toolGroup: ToolGroup) {
        super(toolGroup);
        this.toolHTMLElementInit()
    }

    toolHTMLElementInit() {
        this.toolHTMLElement=document.createElement("button")
        this.toolHTMLElement.classList.add("toolHTMLElementButton")
        this.toolHTMLElement.innerText="Login"

        this.toolGroup.toolGroupDiv.appendChild(this.toolHTMLElement)
    }


}