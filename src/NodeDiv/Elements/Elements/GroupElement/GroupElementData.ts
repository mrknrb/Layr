import {NodeData} from "../../../NodeDocData/NodeData/NodeData";
import {DocData} from "../../../NodeDocData/DocData/DocData";
import {ElementsDefaultSettings} from "../../ElementsDefaultSettings";
import {Layouts} from "../../Layouts";

export interface GroupElementData {
    nodes: NodeData[]
    localDocs: DocData[]
    elementsDefaultSettings:ElementsDefaultSettings
    groupDefaultLayout:Layouts
}