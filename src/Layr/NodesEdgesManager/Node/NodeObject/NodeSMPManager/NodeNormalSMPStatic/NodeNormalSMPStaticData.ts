import {SMPSelectorDataStatic} from "../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {NodeNewElementPart} from "../Parts/NodeNewElementPart.js";
import {NodeLayoutAbsolutePart} from "../Parts/NodeLayoutAbsolutePart.js";
import {NodeLayoutListPart} from "../Parts/NodeLayoutListPart.js";
import {SMPSavePart_NodeType} from "../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NodeType.js";
import {NodeDeletePart} from "../Parts/NodeDeletePart.js";


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
        selectorHeadInvisible:true,
        states: [
            {
                stateName: loadedSelectorDataNames.states.Loaded,
                masterObjectPartNames: [
                    NodeNewElementPart.partName,
                    NodeDeletePart.partName

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
        Nothing:"Nothing",
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
        defaultSelectorActive: false,
        selectorDontLoadSave:true,
        selectorHeadInvisible:true,
        states: [
            {
                stateName: NodeLayoutSelectorDataNames.states.Nothing,//yx kell, hogy a deaktivalasnal lehessen hova kapcsolni
                masterObjectPartNames: [
                ]
            },
            {
                stateName: NodeLayoutSelectorDataNames.states.Absolute,
                masterObjectPartNames: [
                    NodeLayoutAbsolutePart.partName,
                ]
            },
            {
                stateName: NodeLayoutSelectorDataNames.states.List,
                masterObjectPartNames: [
                    NodeLayoutListPart.partName,
                ]
            }
        ]
    }


export const NodeNormalSMPStaticData = [

    NodeLoadedSelectorData,
    NodeLayoutSelectorData
]

export const NodeNormalPartsClassList =
    [
        SMPSavePart_NodeType,
        NodeNewElementPart,
        NodeLayoutAbsolutePart,
        NodeLayoutListPart,
        NodeDeletePart
        //NodeFullScreenElementPart

        // NodeSizeChangePart

    ]
