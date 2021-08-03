import {NodeDivData} from "./NodeDivData.js";
import {NodeDocData} from "./NodeDocData/NodeDocData.js";

export class NodeDivAllData{
    constructor() {
       this. nodeDivData=new NodeDivData()
       this. nodeDocData=new NodeDocData()
    }
    nodeDivData:NodeDivData
    nodeDocData:NodeDocData
}