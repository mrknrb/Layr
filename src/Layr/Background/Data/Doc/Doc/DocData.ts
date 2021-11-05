import {FieldData} from "../Field/FieldData.js";
import {FieldhezElementStyle} from "../../../../Frame/NodesManager/Node/Elements/Elements/GroupElement/NodeStyleData/FieldhezElementStyle.js";
import {GroupData} from "../../../../Frame/NodesManager/Node/Elements/Elements/GroupElement/GroupData.js";

export class DocData {


    _id: string
    ownElementsStyle: FieldhezElementStyle[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
    fieldsData: FieldData[]
    tags: string[]

    constructor() {
        this.ownElementsStyle=[]
        this.fieldsData = []
        this.ownElementsStyle = []
        this.tags=[]
    }
}
