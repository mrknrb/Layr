import {SMPSelectorDataStatic} from "../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {BrowserMainPart} from "./BrowserParts/BrowserMainPart.js";
import {SMPSavePart_ElementType} from "../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";
import {ElementConfigFile} from "../../ElementObject.js";
import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementManualResizePart} from "../../ElementPartsGeneral/ElementManualResizePart.js";

const loadedSelectorDataNames = {

    selector: "LoadedSelector",
    states: {
        Loaded: "Loaded"
    }

}
const loadedSelectorData: SMPSelectorDataStatic =
    {
        defaultState: loadedSelectorDataNames.states.Loaded,
        selectorName: loadedSelectorDataNames.selector,
        defaultSelectorActive: true,
        states: [
            {
                stateName: loadedSelectorDataNames.states.Loaded,
                masterObjectPartNames: [
                    BrowserMainPart.partName,
                    ElementManualResizePart.partName
                ]
            }
        ]
    }

const BrowserSelectorDataStaticArray = [
    loadedSelectorData
]


const BrowserElementPartsClassArray = [
    SMPSavePart_ElementType,
    BrowserMainPart,
    ElementManualResizePart
]
export const BrowserConfigFile: ElementConfigFile = {
    BaseHTMLElementType: "div",
    elementType: ElementTypes.Browser,
    smpData: {
        partsClassArray: BrowserElementPartsClassArray,
        SMPSelectorDataStaticArray: BrowserSelectorDataStaticArray
    }

}