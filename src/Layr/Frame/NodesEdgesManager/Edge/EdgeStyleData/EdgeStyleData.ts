import {Layouts} from "../../Node/Element/Elements/GroupElement/Layouts/Layouts.js";
import {FieldhezElementStyle} from "../../../../Background/Data/Connection/NodeStyleData/FieldhezElementStyle.js";
import {EdgeStyleLayoutsData} from "./EdgeStyleLayoutsData.js";

export class EdgeStyleData {
    constructor() {
        this.edgeStyleLayoutsData = new EdgeStyleLayoutsData()
        this.docFieldekhezElementStyle = []

    }

    connectionHozVezetoConnectionId: string// info ahhoz kell, hogy ha ket connection vezet egy connectionhoz, mert ketszer van megjelenitve egy groupban es ket kapcsolat kell
    connectionId: string
    layout: Layouts
    edgeStyleLayoutsData: EdgeStyleLayoutsData
    docFieldekhezElementStyle: FieldhezElementStyle[]
}
