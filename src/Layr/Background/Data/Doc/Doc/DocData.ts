import {FieldData} from "../Field/FieldData.js";
import {FieldhezElementStyle} from "../../Connection/NodeStyleData/FieldhezElementStyle.js";

export class fieldData {


    _id: string
    ownElementsStyle: FieldhezElementStyle[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
    fieldsData: FieldData[]
    tags: string[]

    constructor() {
        this.fieldsData = []
        this.ownElementsStyle = []
        this.tags = []
    }
}
