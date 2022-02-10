import {LayrUI} from "../LayrUI.js";
import {MenuElement} from "./MenuElement.js";
import {OptionsElementStaticDataType} from "../StaticData/OptionsElementStaticDataType.js";
import {ToolGroup} from "./ToolGroup.js";
import {TypedEvent} from "../../../0Libraries/TypedEvents.js";

export class OptionElement {
    layrUI: LayrUI
    menuElement: MenuElement
    optionsElementData: OptionsElementStaticDataType
    toolGroupObjects: Map<string, ToolGroup>
    optionActivateEvent: TypedEvent<string>
    toolGroupsContainer: HTMLDivElement

    constructor(layrUI: LayrUI, optionsElementData: OptionsElementStaticDataType) {
        this.layrUI = layrUI
        this.optionsElementData = optionsElementData
        this.optionActivateEvent = new TypedEvent()
        this.toolGroupObjects = new Map<string, ToolGroup>()
        this.toolGroupsContainerInit()
        this.optionElementInit()
    }

    toolGroupsContainerInit() {
        this.toolGroupsContainer = document.createElement("div")
        this.toolGroupsContainer.classList.add("toolGroupsContainer")
        // this.toolGroupsContainer.style.height = "100%"
        //  this.toolGroupsContainer.style.width = "100%"
        // this.toolGroupsContainer.style.overflow="auto"
        this.toolGroupsContainer.style.display = "none"
        // this.toolGroupsContainer.style.flexDirection = "row"
        this.toolGroupsContainer.style.backgroundColor = "#404040"
        this.layrUI.toolbar.toolBarElement.appendChild(this.toolGroupsContainer)
    }


    optionElementInit() {
        this.menuElement = new MenuElement(this)

        this.optionsElementData.toolGroupElements.forEach(toolGroupData => {
            let toolGroup = new ToolGroup(this, toolGroupData)
            this.toolGroupObjects.set(toolGroupData.toolGroupName, toolGroup)
        })


    }

    OptionElementActivate(activate: boolean) {
        if (activate) {
            this.menuElement.MenuElementActivateColor(activate)
            this.toolGroupsContainer.style.display = "flex"
        } else {
            this.menuElement.MenuElementActivateColor(activate)
            this.toolGroupsContainer.style.display = "none"
        }

    }


}