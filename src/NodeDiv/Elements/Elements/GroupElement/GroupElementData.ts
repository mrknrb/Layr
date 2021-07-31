import {NodeData} from "../../../NodeDocData/NodeData/NodeData";
import {DocData} from "../../../NodeDocData/DocData/DocData";
import {ElementsDefaultSettings} from "../../ElementsDefaultSettings";
import {Layouts} from "../../Layouts";
import {DocFieldhezElementSettings} from "../../../NodeDocData/NodeData/DocFieldhezElementSettings";

export class GroupElementData {


    nodes: NodeData[]
    localDocs: DocData[]
    elementsDefaultSettings:ElementsDefaultSettings
    docFieldekhezElementSettingsGroupSzinten:DocFieldhezElementSettings[]
    groupDefaultLayout:Layouts
}