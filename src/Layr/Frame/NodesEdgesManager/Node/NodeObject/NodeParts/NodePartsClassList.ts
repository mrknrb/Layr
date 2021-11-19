import {NodeObjectBase} from "../NodeObjectBase.js";
import {NodeObjectNormal} from "../NodeObjectNormal.js";
import { NodeSizeChangePart } from "./Parts/NodeSizeChangePart.js";
import { NodeAbsolutePositionChangePart } from "./Parts/NodeAbsolutePositionChangePart.js";
import { NodeNewElementPart } from "./Parts/NodeNewElementPart.js";


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