import {Layouts} from "../../Elements/Layouts.js";
import {NodeLayoutsData} from "./NodeLayoutsData.js";
import {DocFieldhezElementSettings} from "./DocFieldhezElementSettings.js";


export class NodeData {
    constructor() {
        this.layoutsData=new NodeLayoutsData()
       this. docFieldekhezElementSettings=[]

    }

    nodeId:string
    docRelativeURL:string
    layout:Layouts
    layoutsData: NodeLayoutsData
    docFieldekhezElementSettings:DocFieldhezElementSettings[]
}
