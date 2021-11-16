import {Layouts} from "./Layouts/Layouts.js";
import {FieldhezElementStyle} from "../../../../../../Background/Data/Connection/NodeStyleData/FieldhezElementStyle.js";


export class GroupData {

    constructor() {

        this.query = {}
        this.fieldekhezElementStyleGroupSzinten = []

    }

    query: {}
    fieldekhezElementStyleGroupSzinten: FieldhezElementStyle[]
    layout: Layouts
}