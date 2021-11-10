import {NodeStyleLayoutsData} from "./NodeStyleLayoutsData.js";
import {FieldhezElementStyle} from "./FieldhezElementStyle.js";


export class NodeStyleData {
    constructor() {
        this.nodeStyleLayoutsData = new NodeStyleLayoutsData()
        this.fieldekhezElementStyleNodeSzinten = []

    }

    nodeStyleLayoutsData: NodeStyleLayoutsData
    fieldekhezElementStyleNodeSzinten: FieldhezElementStyle[]
}
