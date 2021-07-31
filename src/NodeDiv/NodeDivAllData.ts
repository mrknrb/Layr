import {NodeDocData} from "./NodeDocData/NodeDocData";
import {NodeDivData} from "./NodeDivData";

export class NodeDivAllData{
    constructor() {
       this. nodeDivData=new NodeDivData()
       this. nodeDocData=new NodeDocData()
    }
    nodeDivData:NodeDivData
    nodeDocData:NodeDocData
}