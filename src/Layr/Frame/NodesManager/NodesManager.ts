import {NodeObjectRoot} from "./Node/NodeObject/NodeObjectRoot.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";
import {NodeObjectInterface} from "./Node/NodeObject/NodeObjectInterface.js";
import {LayrFind} from "../../Global/LayrFind.js";
import {layrBackgroundF} from "../LayrBackgroundFInitClass.js";



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

        this.setNodeObjectRoot(new NodeObjectRoot(docObject.docData._id))
        return this.getNodeObjectRoot()
    }

    async loadNormalNodesOfGroupNode(parentNodeObject: NodeObjectInterface) {

        let docConnObjects = await layrBackgroundF.docsConnectionsManager.loadDocs_ByDocChildConnections(parentNodeObject.docId)
        let nodeObjectsArray: NodeObjectNormal[] = []
        for await(let connectionObject of docConnObjects.connectionObjects) {
            let docObject = docConnObjects.docObjects.find(function (docObject) {
                return docObject.docData._id == connectionObject.connectionData.to
            })
            let nodeObjectNormal = new NodeObjectNormal(docObject.docData._id, connectionObject.connectionId, parentNodeObject.nodeId)
            this.nodeObjectsMap.set(nodeObjectNormal.nodeId, nodeObjectNormal)
            nodeObjectsArray.push(nodeObjectNormal)
        }
        console.log(nodeObjectsArray)
        return nodeObjectsArray
    }

    async newNodeObjectWithNewDoc(parentNodeObject: NodeObjectInterface) {
        let parentDoc = LayrFind.doc_ByNodeId_InFrame(parentNodeObject.nodeId, window)
        let docConnsObjects = await layrBackgroundF.docsConnectionsManager.insertNewDoc_AsParentDocChild(parentDoc.docData._id)

        let nodeObjectNormal = new NodeObjectNormal(docConnsObjects.docObjects[0].docData._id, docConnsObjects.connectionObjects[0].connectionId, parentNodeObject.nodeId)
        this.nodeObjectsMap.set(nodeObjectNormal.nodeId, nodeObjectNormal)
        return nodeObjectNormal
    }


}
