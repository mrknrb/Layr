import {SMPSelectorDataStatic} from "../../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {TextAreaContentPart} from "./TextAreaParts/TextAreaContentPart.js";
import {TextAreaTestPartRed} from "./TextAreaParts/TextAreaTestPartRed.js";
import {TextAreaTestPartBoldFonts} from "./TextAreaParts/TextAreaTestPartBoldFonts.js";
import {TextAreaTestPartBlue} from "./TextAreaParts/TextAreaTestPartBlue.js";
import {ElementBackgroundPart} from "../../../ElementPartsGeneral/ElementBackgroundPart.js";
import {TextAreaMainPart} from "./TextAreaParts/TextAreaMainPart.js";
import {ElementConfigFile} from "../../../ElementObject.js";
import {ElementTypes} from "../../../Adatok/ElementTypes.js";
import {SMPSavePart_ElementType} from "../../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";


const loadedSelectorDataNames = {

    selector: "LoadedSelector",
    states: {
        Loaded: "Loaded",
        NotLoaded: "NotLoaded"

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
                    TextAreaTestPartBoldFonts.partName,
                    ElementBackgroundPart.partName
                ]
            }, {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectPartNames: []
            }
        ]
    }

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const testSelectorDataNames = {

    selector: "Colorselector",
    states: {
        red: "red",
        blue: "blue"
    }

}
const testSelectorData: SMPSelectorDataStatic =
    {
        defaultState: testSelectorDataNames.states.red,
        selectorName: testSelectorDataNames.selector,
        defaultSelectorActive: true,
        parentSelectorAndStateName: {
            selectorName: loadedSelectorDataNames.selector,
            stateName: loadedSelectorDataNames.states.Loaded
        },
        states: [
            {
                stateName: testSelectorDataNames.states.red,
                masterObjectPartNames: [
                    TextAreaTestPartRed.partName

                ]
            }, {
                stateName: testSelectorDataNames.states.blue,
                masterObjectPartNames: [
                    TextAreaTestPartBlue.partName

                ]
            }
        ]
    }
//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const testSelectorDataNames2 = {
    selector: "Testselector",
    states: {
        test1: "test1",
        test2: "test2"
    }
}
const testSelectorData2: SMPSelectorDataStatic =
    {
        defaultState: testSelectorDataNames2.states.test1,
        selectorName: testSelectorDataNames2.selector,
        defaultSelectorActive: true,
        parentSelectorAndStateName: {
            selectorName: loadedSelectorDataNames.selector,
            stateName: loadedSelectorDataNames.states.Loaded
        },
        states: [
            {
                stateName: testSelectorDataNames2.states.test1,
                masterObjectPartNames: []
            }, {
                stateName: testSelectorDataNames2.states.test2,
                masterObjectPartNames: []
            }
        ]
    }
/*
const layoutSelectorDataNames = {

    selector: "LayoutSelector",
    states: {
        Absolute: "Absolute",
        List: "List",
        Tree: "Tree"

    }

}
const layoutSelectorData: SMPSelectorDataStatic =
    {
        selectorName: "LayoutSelector",
        defaultState: "Absolute",
        defaultSelectorActive: true,
        parentSelectorAndStateName:
            {
                selectorName: loadedSelectorDataNames.selector,
                stateName: loadedSelectorDataNames.states.Loaded
            }
        ,
        states: [
            {
                stateName: layoutSelectorDataNames.states.Absolute,
                masterObjectPartNames: [
                    {
                        searchType: SMPSearchType.ChildNodePart,
                        partName: NodeLayoutAbsolutePart.name
                    }
                ]
            }, {
                stateName: layoutSelectorDataNames.states.List,
                masterObjectPartNames: [
                    {
                        searchType: SMPSearchType.ChildNodePart,
                        partName: NodeLayoutListPart.name
                    }
                ]
            }

        ]
    }
*/

const TextAreaSelectorDataStaticArray = [
    // layoutSelectorData,
    loadedSelectorData,
    testSelectorData,
    testSelectorData2
]


const TextAreaElementPartsClassArray = [
    SMPSavePart_ElementType,
    TextAreaMainPart,
    TextAreaContentPart,
    TextAreaTestPartRed,
    TextAreaTestPartBlue,
    TextAreaTestPartBoldFonts,
    ElementBackgroundPart
]
export const TextAreaConfigFile: ElementConfigFile = {
    BaseHTMLElementType: "textarea",
    elementType: ElementTypes.TextArea,
    smpData: {
        partsClassArray: TextAreaElementPartsClassArray,
        SMPSelectorDataStaticArray: TextAreaSelectorDataStaticArray
    }

}