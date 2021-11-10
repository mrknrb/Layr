import {Layouts} from "./Layouts/Layouts.js";
import {FieldhezElementStyle} from "./NodeStyleData/FieldhezElementStyle.js";
import {NodeStyleData} from "./NodeStyleData/NodeStyleData.js";
import {EdgeStyleData} from "./EdgeStyleData/EdgeStyleData.js";


export class GroupData {

    constructor() {

        this.query={}
        this.fieldekhezElementStyleGroupSzinten = []

    }

    query: {  }
    fieldekhezElementStyleGroupSzinten: FieldhezElementStyle[]
    layout: Layouts
}