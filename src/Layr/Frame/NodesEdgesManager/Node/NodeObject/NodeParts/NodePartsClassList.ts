import {NodeNewElementPart} from "./NodeNewElementPart.js";
import {NodeObjectBase} from "../NodeObjectBase.js";


export class NodePartsClassList  {


    NodeNewElementPart:NodeNewElementPart
    constructor(nodeObject:NodeObjectBase) {


        this.NodeNewElementPart=new NodeNewElementPart(nodeObject)



    }


}