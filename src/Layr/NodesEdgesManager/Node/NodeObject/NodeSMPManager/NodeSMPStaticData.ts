import {SMPSelectorDataStatic} from "../../../../SMP/SMPLayr/DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPSearchType} from "../../../../SMP/SMPLayr/SMPEnums/SMPSearchType.js";
import {NodeNewElementPart} from "./Parts/NodeNewElementPart.js";
import {SMPSavePart_NodeType} from "../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NodeType.js";


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
        defaultSelectorActive: true,
        states: [
            {
                stateName: loadedSelectorDataNames.states.Loaded,
                masterObjectParts: [
                    {
                        searchType: SMPSearchType.OwnMasterObjectPart,
                        partName: SMPSavePart_NodeType.partName
                    }
                ]
            },  {
                stateName: loadedSelectorDataNames.states.NotLoaded,
                masterObjectParts: [ ]
            }
        ]
    }


export const NodeSMPStaticData = [

   // loadedSelectorData
]
