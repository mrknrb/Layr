import {SMPSelectorDataStatic} from "../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {NodeNewElementPart} from "../Parts/NodeNewElementPart.js";
import {NodeLayoutAbsolutePart} from "../Parts/NodeLayoutAbsolutePart.js";
import {NodeLayoutListPart} from "../Parts/NodeLayoutListPart.js";
import {NodeDeletePart} from "../Parts/NodeDeletePart.js";
import {NodeOpenInNewPagePart} from "../Parts/NodeOpenInNewPagePart.js";
import {SMPSavePart_NormalNodeConnType} from "../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NormalNodeConnType.js";


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
                    NodeDeletePart.partName,
                    NodeOpenInNewPagePart.partName

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
        defaultSelectorActive: true,
        selectorDontLoadSave:false,
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
        SMPSavePart_NormalNodeConnType,
        NodeNewElementPart,
        NodeLayoutAbsolutePart,
        NodeLayoutListPart,
        NodeDeletePart,

        NodeOpenInNewPagePart
        //NodeFullScreenElementPart

        // NodeSizeChangePart

    ]
