import {OptionElement} from "./OptionElement.js";
import {ToolGroupStaticDataType} from "../StaticData/OptionsElementStaticDataType.js";
import {ToolElementBaseClass} from "./ToolElementBaseClass.js";
import {HTMLElementResizer} from "../../NodesEdgesManager/Node/Element/ElementResizer/HTMLElementResizer.js";
import {ResizeTypes} from "../../NodesEdgesManager/Node/Element/ElementResizer/ResizeTypes.js";

export class ToolGroup {
    optionElement: OptionElement
    toolGroupData: ToolGroupStaticDataType
    toolElements: Map<string, ToolElementBaseClass>
toolGroupDiv:HTMLDivElement
    toolGroupMainDiv:HTMLDivElement
    constructor(optionElement: OptionElement, toolGroupData: ToolGroupStaticDataType) {
        this.optionElement = optionElement
        this.toolGroupData = toolGroupData
        this.toolElements = new Map<string, ToolElementBaseClass>()
       // this.toolGroupMainDivInit()
        this.toolGroupContentDivInit()
        this.toolGroupInit()
    }
    /*
    toolGroupMainDivInit(){
        this.toolGroupMainDiv=document.createElement("div")
      //  this.toolGroupDiv.classList.add("toolGroupMainDiv")
        this.toolGroupMainDiv.style.height="100%"
       // this.toolGroupMainDiv.style.width="fit-content"
        this.optionElement.toolGroupsContainer.appendChild(this.toolGroupMainDiv)
    }
*/

    toolGroupContentDivInit(){
        this.toolGroupDiv=document.createElement("div")
        this.toolGroupDiv.classList.add("toolGroupContentDiv")
        let htmlElementResizer= new HTMLElementResizer(this.toolGroupDiv)
        htmlElementResizer.resizeActivate(ResizeTypes.autoX)
        this.optionElement.toolGroupsContainer.appendChild(this.toolGroupDiv)
    }




    toolGroupInit() {
        this.toolGroupData.toolElements.forEach((ToolElementClass) => {
            let toolElement2 = new ToolElementClass(this) as ToolElementBaseClass
            this.toolElements.set(ToolElementClass.name, toolElement2)
        })
    }





}