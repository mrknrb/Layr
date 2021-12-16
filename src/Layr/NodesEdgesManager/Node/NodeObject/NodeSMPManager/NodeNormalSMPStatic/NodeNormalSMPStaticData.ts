import {SMPSelectorDataStatic} from "../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {NodeNewElementPart} from "../Parts/NodeNewElementPart.js";
import {NodeLayoutAbsolutePart} from "../Parts/NodeLayoutAbsolutePart.js";


//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
const loadedSelectorDataNames = {

    selector: "LoadedSelector",
    states: {
        Loaded: "Loaded",
        NotLoaded: "NotLoaded"

    }

}
const NodeLoadedSelectorData: SMPSelectorDataStatic =
    {
        defaultState: loadedSelectorDataNames.states.Loaded,
        selectorName: loadedSelectorDataNames.selector,
        defaultSelectorActive: true,
        states: [
            {
                stateName: loadedSelectorDataNames.states.Loaded,
                masterObjectPartNames: [
                    NodeNewElementPart.partName,


                ]
            }, {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectPartNames: []
            }
        ]
    }

//yx  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
export const NodeLayoutSelectorDataNames = {

    selector: "NodeLayoutSelector",
    states: {
        Nothing: "Nothing",
        Absolute: "Absolute",
        List: "List"
    }
}
const NodeLayoutSelectorData: SMPSelectorDataStatic =
    {
        defaultState: NodeLayoutSelectorDataNames.states.Nothing,
        selectorName: NodeLayoutSelectorDataNames.selector,
        parentSelectorAndStateName: {
            selectorName: loadedSelectorDataNames.selector,
            stateName: loadedSelectorDataNames.states.Loaded
        },
        defaultSelectorActive: true,
        selectorDontLoadSave: true,
        states: [
            {
                stateName: NodeLayoutSelectorDataNames.states.Nothing,
                masterObjectPartNames: []
            },
            {
                stateName: NodeLayoutSelectorDataNames.states.Absolute,
                masterObjectPartNames: [
                    NodeLayoutAbsolutePart.partName,
                ]
            }
        ]
    }


export const NodeNormalSMPStaticData = [

    NodeLoadedSelectorData,
    NodeLayoutSelectorData
]
