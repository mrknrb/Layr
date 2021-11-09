import {NodeObjectRoot} from "./Node/NodeObject/NodeObjectRoot.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";
import {layrBackgroundF} from "../MainFrame.js";
import {NodeObjectInterface} from "./Node/NodeObject/NodeObjectInterface.js";


export class NodesManager {

    nodeObjectsMap: Map<string, NodeObjectInterface>

    constructor() {

        this.nodeObjectsMap = new Map<string, NodeObjectNormal>()
    }

    getNodeObjectRoot() {
        return this.nodeObjectsMap.get("0")
    }

    setNodeObjectRoot(nodeObjectRoot: NodeObjectRoot) {
        return this.nodeObjectsMap.set(nodeObjectRoot.nodeId, nodeObjectRoot)
    }

    async loadRootNode(docId: string) {
        let docObjects = await layrBackgroundF.docsConnectionsManager.loadDocs([docId])
        let docObject = docObjects[0]
        this.getNodeObjectRoot() ? this.getNodeObjectRoot().removeNode() : null

        this.setNodeObjectRoot(new NodeObjectRoot(docObject.docId))
        return this.getNodeObjectRoot()
    }

    async loadNormalNodesOfGroupNode(parentNodeObject: NodeObjectInterface) {
        let docObjects = await layrBackgroundF.docsConnectionsManager.loadDocs_ByDocChildConnections(parentNodeObject.docId)
        let nodeObjectsArray: NodeObjectNormal[] = []
        for await(let docObject of docObjects) {
            let nodeObjectNormal = new NodeObjectNormal(docObject.docId, parentNodeObject.nodeId)
            this.nodeObjectsMap.set(nodeObjectNormal.nodeId, nodeObjectNormal)
            nodeObjectsArray.push(nodeObjectNormal)
        }
        return nodeObjectsArray
    }

    async newNodeObjectWithNewDoc() {


    }


}
