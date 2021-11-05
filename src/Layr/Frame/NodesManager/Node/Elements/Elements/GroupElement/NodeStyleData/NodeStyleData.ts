import {Layouts} from "../Layouts/Layouts.js";
import {NodeStyleLayoutsData} from "./NodeStyleLayoutsData.js";
import {FieldhezElementStyle} from "./FieldhezElementStyle.js";


export class NodeStyleData {
    constructor() {
        this.nodeLayoutsData = new NodeStyleLayoutsData()
        this.fieldekhezElementStyleNodeSzinten = []

    }

    connectionId: string
    docId: string
    layout: Layouts
    nodeLayoutsData: NodeStyleLayoutsData
    fieldekhezElementStyleNodeSzinten: FieldhezElementStyle[]
}
