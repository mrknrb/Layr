import {NodeNewElementPart} from "./NodeNewElementPart.js";
import {NodeObjectBase} from "../NodeObjectBase.js";
import {NodeAbsolutePositionChangePart} from "./NodeAbsolutePositionChangePart.js";
import {NodeObjectNormal} from "../NodeObjectNormal.js";
import {NodeSizeChangePart} from "./NodeSizeChangePart.js";


export class NodePartsClassList {


    NodeNewElementPart: NodeNewElementPart
    NodeAbsolutePositionChangePart: NodeAbsolutePositionChangePart
    NodeSizeChangePart:NodeSizeChangePart
    constructor(nodeObject: NodeObjectBase) {


        this.NodeNewElementPart = new NodeNewElementPart(nodeObject)

        if (nodeObject.constructor.name == NodeObjectNormal.name) {

            this.NodeAbsolutePositionChangePart = new NodeAbsolutePositionChangePart(nodeObject as NodeObjectNormal)
            this.NodeSizeChangePart = new NodeSizeChangePart(nodeObject as NodeObjectNormal)

        }


    }


}