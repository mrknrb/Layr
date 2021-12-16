import {SMPSelectorDataStatic} from "../../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {NodeNewElementPart} from "../Parts/NodeNewElementPart.js";
import {NodeFullScreenElementPart} from "../Parts/NodeFullScreenElementPart.js";


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
                    NodeNewElementPart.partName,
                    NodeFullScreenElementPart.partName

                ]
            }, {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectPartNames: []
            }
        ]
    }


export const NodeRootSMPStaticData = [

    loadedSelectorData
]
