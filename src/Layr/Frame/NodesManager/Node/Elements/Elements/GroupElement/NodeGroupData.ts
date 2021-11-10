import {NodeStyleData} from "./NodeStyleData/NodeStyleData.js";
import {EdgeStyleData} from "./EdgeStyleData/EdgeStyleData.js";

export class NodeGroupData {


    constructor() {
        this.nodeStyle=new NodeStyleData()
        this.edgeStyle=new EdgeStyleData()
    }

    nodeStyle: NodeStyleData
    edgeStyle: EdgeStyleData



}