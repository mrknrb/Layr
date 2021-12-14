import {SMPSelectorDataStatic} from "../../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPSearchType} from "../../../../../../SMP/SMPLayr/SMPEnums/SMPSearchType.js";
import {NodeLayoutAbsolutePart} from "../../../../NodeObject/NodeSMPManager/Parts/NodeLayoutAbsolutePart.js";
import {NodeLayoutListPart} from "../../../../NodeObject/NodeSMPManager/Parts/NodeLayoutListPart.js";
import {TextAreaContentPart} from "./TextAreaParts/TextAreaContentPart.js";
import {TextAreaTestPartRed} from "./TextAreaParts/TextAreaTestPartRed.js";
import {TextAreaTestPartBoldFonts} from "./TextAreaParts/TextAreaTestPartBoldFonts.js";
import {TextAreaTestPartBlue} from "./TextAreaParts/TextAreaTestPartBlue.js";


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
                masterObjectParts: [
                    {
                        searchType: SMPSearchType.OwnMasterObjectPart,
                        partName: TextAreaContentPart.partName
                    },  {
                        searchType: SMPSearchType.OwnMasterObjectPart,
                        partName: TextAreaTestPartBoldFonts.partName
                    }
                ]
            },  {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectParts: [
                ]
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
        parentSelectorAndStateName: {selectorName:loadedSelectorDataNames.selector,stateName:loadedSelectorDataNames.states.Loaded},
        states: [
            {
                stateName: testSelectorDataNames.states.red,
                masterObjectParts: [
                    {
                        searchType: SMPSearchType.OwnMasterObjectPart,
                        partName: TextAreaTestPartRed.partName
                    }
                ]
            },  {
                stateName: testSelectorDataNames.states.blue,
                masterObjectParts: [
                    {
                        searchType: SMPSearchType.OwnMasterObjectPart,
                        partName: TextAreaTestPartBlue.partName
                    }
                ]
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
                masterObjectParts: [
                    {
                        searchType: SMPSearchType.ChildNodePart,
                        partName: NodeLayoutAbsolutePart.name
                    }
                ]
            }, {
                stateName: layoutSelectorDataNames.states.List,
                masterObjectParts: [
                    {
                        searchType: SMPSearchType.ChildNodePart,
                        partName: NodeLayoutListPart.name
                    }
                ]
            }

        ]
    }
*/

export const TextAreaStaticData = [
   // layoutSelectorData,
    loadedSelectorData,
    testSelectorData
]


