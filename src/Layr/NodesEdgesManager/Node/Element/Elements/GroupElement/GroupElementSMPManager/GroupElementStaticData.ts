import {SMPSelectorDataStatic} from "../../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPSearchType} from "../../../../../../SMP/SMPLayr/SMPEnums/SMPSearchType.js";
import {NodeLayoutAbsolutePart} from "../../../../NodeObject/NodeSMPManager/Parts/NodeLayoutAbsolutePart.js";
import {NodeLayoutListPart} from "../../../../NodeObject/NodeSMPManager/Parts/NodeLayoutListPart.js";


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
                    // {
                    //     searchType: SMPSearchType.ChildNodePart,
                    //     partName: NodeLayoutAbsolutePart.partName
                    // }
                ]
            }, {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectParts: [
                    // {
                    //     searchType: SMPSearchType.ChildNodePart,
                    //     partName: NodeLayoutAbsolutePart.partName
                    // }
                ]
            }
        ]
    }


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
        defaultState: layoutSelectorDataNames.states.Absolute,
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
                    // {
                    //     searchType: SMPSearchType.ChildNodePart,
                    //     partName: NodeLayoutAbsolutePart.partName
                    // }
                ]
            }, {
                stateName: layoutSelectorDataNames.states.List,
                masterObjectParts: [
                    // {
                    //     searchType: SMPSearchType.ChildNodePart,
                    //     partName: NodeLayoutListPart.partName
                    // }
                ]
            }

        ]
    }


export const GroupElementStaticData = [
    layoutSelectorData,
    loadedSelectorData
]


