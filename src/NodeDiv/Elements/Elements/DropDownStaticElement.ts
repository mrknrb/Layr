import {ElementBaseClass} from "../ElementBaseClass";
import {NodeData} from "../../NodeDocData/NodeData/NodeData";
import {NodeDivAllData} from "../../NodeDivAllData";
import {DataTypeElementTypeData} from "../DataTypeElementTypeData";

export class DropDownStaticElement extends ElementBaseClass{

    element: any
    nodeData: NodeData

    constructor(nodeDivAllData: NodeDivAllData) {
        super()
        this.nodeData = nodeDivAllData.nodeDocData.nodeData

        this.elementInit()


    }





}