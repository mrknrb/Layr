import {OptionElement} from "./OptionElement.js";
import {ToolGroup} from "./ToolGroup.js";

export abstract class ToolElementBaseClass {
    toolGroup: ToolGroup
    toolHTMLElement: HTMLElement

    constructor(toolGroup: ToolGroup) {
        this.toolGroup = toolGroup
    }
   abstract toolHTMLElementInit()

}