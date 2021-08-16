import {Layouts} from "../../../Frame/Layouts/Layouts.js";
import {NodeLayoutsData} from "./NodeLayoutsData.js";
import {DocFieldhezElementSettings} from "./DocFieldhezElementSettings.js";


export class NodeData {
    constructor() {
        this.nodeLayoutsData=new NodeLayoutsData()
       this. docFieldekhezElementSettings=[]

    }

    nodeId: string | undefined
    docRelativeURL: string | undefined
    layout: Layouts | undefined
    nodeLayoutsData: NodeLayoutsData
    docFieldekhezElementSettings:DocFieldhezElementSettings[]
}
