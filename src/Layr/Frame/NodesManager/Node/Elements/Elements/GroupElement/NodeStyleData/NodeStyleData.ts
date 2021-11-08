import {Layouts} from "../Layouts/Layouts.js";
import {NodeStyleLayoutsData} from "./NodeStyleLayoutsData.js";
import {FieldhezElementStyle} from "./FieldhezElementStyle.js";


export class NodeStyleData {
    constructor() {
        this.nodeStyleLayoutsData = new NodeStyleLayoutsData()
        this.fieldekhezElementStyleNodeSzinten = []

    }

    connectionId: string
    docId: string
    layout: Layouts
    nodeStyleLayoutsData: NodeStyleLayoutsData
    fieldekhezElementStyleNodeSzinten: FieldhezElementStyle[]
}
