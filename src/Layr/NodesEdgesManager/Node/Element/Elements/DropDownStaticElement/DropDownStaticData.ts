import {SMPSelectorDataStatic} from "../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPSavePart_ElementType} from "../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";
import {ElementConfigFile} from "../../ElementObject.js";
import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {DropDownStaticMainPart} from "./DropDownStaticParts/DropDownStaticMainPart.js";

const loadedSelectorDataNames = {

    selector: "LoadedSelector",
    states: {
        Loaded: "Loaded",
        NotLoaded: "NotLoaded"

    }

}
const loadedSelectorData: SMPSelectorDataStatic =
    {
        defaultState: loadedSelectorDataNames.states.NotLoaded,
        selectorName: loadedSelectorDataNames.selector,
        defaultSelectorActive: false,
        states: [
            {
                stateName: loadedSelectorDataNames.states.Loaded,
                masterObjectPartNames: [
                    DropDownStaticMainPart.partName

                ]
            }, {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectPartNames: []
            }
        ]
    }


//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

const DropDownStaticSelectorDataStaticArray = [

    loadedSelectorData
]

const DropDownStaticPartsClassArray = [
    SMPSavePart_ElementType,
    DropDownStaticMainPart
]

export const DropDownStaticConfigFile: ElementConfigFile = {
    BaseHTMLElementType: "select",
    elementType: ElementTypes.DropDownStatic,
    smpData: {
        partsClassArray: DropDownStaticPartsClassArray,
        SMPSelectorDataStaticArray: DropDownStaticSelectorDataStaticArray
    }

}
