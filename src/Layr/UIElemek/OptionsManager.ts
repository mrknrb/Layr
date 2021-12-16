import {LayrUI} from "./LayrUI.js";
import {OptionsElementStaticData} from "./StaticData/OptionsElementStaticData.js";
import {OptionElement} from "./Elements/OptionElement.js";
import {OptionsElementStaticDataType} from "./StaticData/OptionsElementStaticDataType.js";

export class OptionsManager {

    layrUI: LayrUI

    optionsElementObjects: Map<string, OptionElement>

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.optionsElementObjects = new Map<string, OptionElement>()
        this.loadOptions(OptionsElementStaticData)


    }

    loadOptions(optionsElementStaticData: OptionsElementStaticDataType[]) {
        let self=this
        optionsElementStaticData.forEach((optionsElementData) => {
            let optionsElement = new OptionElement(this.layrUI, optionsElementData)
            this.optionsElementObjects.set(optionsElementData.optionName, optionsElement)
            optionsElement.optionActivateEvent.on(optionName => {
                self. optionActivate(optionName)
            })
        })
    }

    optionActivate(optionName: string) {
        this.optionsElementObjects.forEach(option => {
            option.OptionElementActivate(false)
        })
        this.optionsElementObjects.get(optionName).OptionElementActivate(true)
    }
}