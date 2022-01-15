import {SMPSelectorDataStatic} from "../../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {TextAreaContentPart} from "./TextAreaParts/TextAreaContentPart.js";
import {ElementBackgroundPart} from "../../../ElementPartsGeneral/ElementBackgroundPart.js";
import {TextAreaMainPart} from "./TextAreaParts/TextAreaMainPart.js";
import {ElementConfigFile} from "../../../ElementObject.js";
import {ElementTypes} from "../../../Adatok/ElementTypes.js";
import {SMPSavePart_ElementType} from "../../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";
import {TextAreaAutoResize} from "./TextAreaParts/TextAreaResizeSelectorParts/TextAreaAutoResize.js";
import {TextAreaTextColorPart} from "./TextAreaParts/TextAreaTextColorPart.js";
import {ElementManualResizePart} from "../../../ElementPartsGeneral/ElementManualResizePart.js";


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
                    TextAreaMainPart.partName,
                    TextAreaContentPart.partName,
                    ElementBackgroundPart.partName,
                    TextAreaTextColorPart.partName
                ]
            }
        ]
    }

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const testSelectorDataNames = {

    selector: "ResizeSelector",
    states: {
        auto: "auto",
        manual: "manual"
    }

}
const resizeSelectorData: SMPSelectorDataStatic =
    {
        defaultState: testSelectorDataNames.states.auto,
        selectorName: testSelectorDataNames.selector,
        defaultSelectorActive: true,
        parentSelectorAndStateName: {
            selectorName: loadedSelectorDataNames.selector,
            stateName: loadedSelectorDataNames.states.Loaded
        },
        states: [
            {
                stateName: testSelectorDataNames.states.manual,
                masterObjectPartNames: [
                    ElementManualResizePart.partName

                ]
            }, {
                stateName: testSelectorDataNames.states.auto,
                masterObjectPartNames: [
                    TextAreaAutoResize.partName

                ]
            }
        ]
    }

const TextAreaSelectorDataStaticArray = [
    // layoutSelectorData,
    loadedSelectorData,
    resizeSelectorData
]


const TextAreaElementPartsClassArray = [
    SMPSavePart_ElementType,
    TextAreaMainPart,
    TextAreaContentPart,
    ElementBackgroundPart,
    ElementManualResizePart,
    TextAreaAutoResize,
    TextAreaTextColorPart
]
export const TextAreaConfigFile: ElementConfigFile = {
    BaseHTMLElementType: "textarea",
    elementType: ElementTypes.TextArea,
    smpData: {
        partsClassArray: TextAreaElementPartsClassArray,
        SMPSelectorDataStaticArray: TextAreaSelectorDataStaticArray
    }

}