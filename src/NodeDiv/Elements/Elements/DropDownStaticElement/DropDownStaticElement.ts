import {ElementBaseClass} from "../../ElementBaseClass";
import {NodeData} from "../../../NodeDocData/NodeData/NodeData";
import {NodeDivAllData} from "../../../NodeDivAllData";
import {ElementTypes} from "../../ElementTypes";
import {GroupElement} from "../GroupElement/GroupElement";

export class DropDownStaticElement extends ElementBaseClass{

    element: any
    nodeData: NodeData

    constructor(nodeDivAllData: NodeDivAllData) {
        super(ElementTypes.DropDownStatic);
        this.nodeData = nodeDivAllData.nodeDocData.nodeData



    }

    deleteData() {



    }





}