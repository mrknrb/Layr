import {SMPSelectorDataStatic} from "../../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {ElementBackgroundPart} from "../../../ElementPartsGeneral/ElementBackgroundPart.js";
import {GroupElementNodesLoader} from "./GroupElementParts/GroupElementNodesLoader.js";
import {GroupElementPartAbsoluteLayout} from "./GroupElementParts/GroupElementPartAbsoluteLayout.js";

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

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
        selectorDontLoadSave:true,
        states: [
            {
                stateName: loadedSelectorDataNames.states.Loaded,
                masterObjectPartNames: [
                    ElementBackgroundPart.partName,
                    GroupElementNodesLoader.partName

                ]
            }, {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectPartNames: [

                ]
            }
        ]
    }


//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const layoutSelectorDataNames = {

    selector: "LayoutSelector",
    states: {
        Nothing: "Nothing",
        Absolute: "Absolute",
        List: "List",
        Tree: "Tree"
    }
}
const layoutSelectorData: SMPSelectorDataStatic =
    {
        selectorName: "LayoutSelector",
        defaultState: layoutSelectorDataNames.states.Nothing,
        defaultSelectorActive: true,
        parentSelectorAndStateName:
            {
                selectorName: loadedSelectorDataNames.selector,
                stateName: loadedSelectorDataNames.states.Loaded
            }
        ,
        states: [  {
            stateName: layoutSelectorDataNames.states.Nothing,
            masterObjectPartNames: [
            ]
        },
            {
                stateName: layoutSelectorDataNames.states.Absolute,
                masterObjectPartNames: [
                    GroupElementPartAbsoluteLayout.partName
                ]
            }, {
                stateName: layoutSelectorDataNames.states.List,
                masterObjectPartNames: [

                ]
            }

        ]
    }

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

export const GroupElementStaticData = [
    layoutSelectorData,
    loadedSelectorData
]


