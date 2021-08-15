import {Layouts} from "../../../Frame/Layouts/Layouts.js";
import {NodeLayoutsData} from "./NodeLayoutsData.js";
import {DocFieldhezElementSettings} from "./DocFieldhezElementSettings.js";


export class NodeData {
    constructor() {
        this.layoutsData=new NodeLayoutsData()
       this. docFieldekhezElementSettings=[]

    }

    nodeId: string | undefined
    docRelativeURL: string | undefined
    layout: Layouts | undefined
    layoutsData: NodeLayoutsData
    docFieldekhezElementSettings:DocFieldhezElementSettings[]
}
