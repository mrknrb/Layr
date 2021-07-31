import {NodeLayoutsData} from "./NodeLayoutsData";
import {Layouts} from "../../Elements/Layouts";
import {DocFieldhezElementSettings} from "./DocFieldhezElementSettings";


export class NodeData {
    constructor() {
        this.layoutsData=new NodeLayoutsData()
    }

    nodeId:string
    docRelativeURL:string
    layout:Layouts
    layoutsData: NodeLayoutsData
    docFieldekhezElementSettings:DocFieldhezElementSettings[]
}
