import {NodeLayoutsData} from "./NodeLayoutsData";
import {Layouts} from "../../Elements/Layouts";
import {ElementsDefaultSettings} from "../../Elements/ElementsDefaultSettings";
import {DocFieldElementSettings} from "./DocFieldElementSettings";


export interface NodeData {
    nodeId:string
    docRelativeURL:string
    layout:Layouts
    layoutsData: NodeLayoutsData
    docFieldsElementSettings:DocFieldElementSettings[]
}
