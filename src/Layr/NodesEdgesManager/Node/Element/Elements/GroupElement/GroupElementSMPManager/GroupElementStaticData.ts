import {SMPSelectorDataStatic} from "../../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {ElementBackgroundPart} from "../../../ElementPartsGeneral/ElementBackgroundPart.js";
import {GroupElementNodesLoader} from "./GroupElementParts/GroupElementNodesLoader.js";
import {GroupElementMainPart} from "./GroupElementParts/GroupElementMainPart.js";
import {SMPSavePart_ElementType} from "../../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";
import {ElementConfigFile} from "../../../ElementObject.js";
import {ElementTypes} from "../../../Adatok/ElementTypes.js";
import {ElementManualResizePart} from "../../../ElementPartsGeneral/ElementManualResizePart.js";
import {GroupElementPartAbsoluteLayout} from "./GroupElementParts/GroupElementPartAbsoluteLayout.js";
import {GroupElementListLayoutPart} from "./GroupElementParts/GroupElementListLayoutPart.js";
import {GroupElementNewNodePart} from "./GroupElementParts/GroupElementNewNodePart.js";

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

const initSelectorDataNames = {

    selector: "InitSelector",
    states: {
        Initialised: "Initialised"

    }

}
const initSelectorData: SMPSelectorDataStatic =
    {
        defaultState: initSelectorDataNames.states.Initialised,
        selectorName: initSelectorDataNames.selector,
        defaultSelectorActive: true,
        selectorHeadInvisible:true,
        selectorNotDeactivatable:true,
        states: [
            {
                stateName: initSelectorDataNames.states.Initialised,
                masterObjectPartNames: [
                    GroupElementMainPart.partName,
                    ElementBackgroundPart.partName,
                    ElementManualResizePart.partName

                ]
            }
        ]
    }

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
export const loadingSelectorDataNames = {

    selector: "LoadingSelector",
    states: {
       Loaded:"Loaded"
    }
}
const loadingSelectorData: SMPSelectorDataStatic =
    {
        selectorName: "LoadingSelector",
        defaultState: loadingSelectorDataNames.states.Loaded,
        defaultSelectorActive: false,
        selectorDontLoadSave:true,

        parentSelectorAndStateName:
            {
                selectorName: initSelectorDataNames.selector,
                stateName: initSelectorDataNames.states.Initialised
            }
        ,
        states: [
            {
                stateName: loadingSelectorDataNames.states.Loaded,
                masterObjectPartNames: [
                    GroupElementNodesLoader.partName,
                    GroupElementNewNodePart.partName

                ]
            }

        ]
    }


//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
export const layoutSelectorDataNames = {

    selector: "LayoutSelector",
    states: {
        Nothing: "Nothing",
        Absolute: "Absolute",
        List: "List",
        Tree: "Tree",
        Pages:"Pages"
    }
}
const layoutSelectorData: SMPSelectorDataStatic =
    {
        selectorName:layoutSelectorDataNames.selector,
        defaultState: layoutSelectorDataNames.states.Absolute,
        defaultSelectorActive: true,
        selectorNotDeactivatable:true,
        parentSelectorAndStateName:
            {
                selectorName: loadingSelectorDataNames.selector,
                stateName: loadingSelectorDataNames.states.Loaded
            }
        ,
        states: [
            {
                stateName: layoutSelectorDataNames.states.Nothing,
                masterObjectPartNames: []
            },
            {
                stateName: layoutSelectorDataNames.states.Absolute,
                masterObjectPartNames: [
                    GroupElementPartAbsoluteLayout.partName
                ]
            }, {
                stateName: layoutSelectorDataNames.states.List,
                masterObjectPartNames: [
                    GroupElementListLayoutPart.partName,

                ]
            }

        ]
    }

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

const GroupElementSelectorDataStaticArray = [
    loadingSelectorData,
    layoutSelectorData,
    initSelectorData
]

const GroupElementPartsClassArray = [
    SMPSavePart_ElementType,
    GroupElementMainPart,
    ElementBackgroundPart,
    GroupElementNodesLoader,
    GroupElementPartAbsoluteLayout,
    ElementManualResizePart,
    GroupElementNewNodePart,
    GroupElementListLayoutPart
]

export const GroupElementConfigFile: ElementConfigFile = {
    BaseHTMLElementType: "div",
    elementType: ElementTypes.Group,
    smpData: {
        partsClassArray: GroupElementPartsClassArray,
        SMPSelectorDataStaticArray: GroupElementSelectorDataStaticArray
    }

}
