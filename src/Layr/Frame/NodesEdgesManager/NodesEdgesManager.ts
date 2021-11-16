import {NodeObjectRoot} from "./Node/NodeObject/NodeObjectRoot.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";
import {NodeObjectBase} from "./Node/NodeObject/NodeObjectBase.js";
import {LayrFind} from "../../Global/LayrFind.js";
import {layrBackgroundF} from "../../../0Egyebek/LayrBackgroundFInitClass.js";
import {NodesEdgesDataStorage} from "./NodesEdgesDataStorage.js";


export class NodesEdgesManager {

    nodeObjectsMap: Map<string, NodeObjectBase>
    nodesEdgesDataStorage: NodesEdgesDataStorage


    constructor() {

        this.nodesEdgesDataStorage = new NodesEdgesDataStorage()

        this.nodeObjectsMap = new Map<string, NodeObjectBase>()
    }

    getNodeObjectRoot() {
        return this.nodesEdgesDataStorage.nodeNodeIdMap.get("0")
    }

    setNodeObjectRoot(nodeObjectRoot: NodeObjectRoot) {
        this.nodesEdgesDataStorage.insertNode(nodeObjectRoot)
    }

    async loadRootNode(docId: string) {
        let docObjects = await layrBackgroundF.docsConnectionsManager.loadDocs([docId])
        let docObject = docObjects[0]
        this.getNodeObjectRoot() ? this.getNodeObjectRoot().removeNode() : null

        this.setNodeObjectRoot(new NodeObjectRoot(docObject.docData._id))
        return this.getNodeObjectRoot()
    }

    async loadNormalNodesOfGroupNode(parentNodeObject: NodeObjectBase) {

        let docConnObjects = await layrBackgroundF.docsConnectionsManager.loadDocs_ByDocChildConnections(parentNodeObject.docId)
        let nodeObjectsArray: NodeObjectNormal[] = []
        for await(let connectionObject of docConnObjects.connectionObjects) {
            let docObject = docConnObjects.docObjects.find(function (docObject) {
                return docObject.docData._id == connectionObject.connectionData.to
            })
            let nodeObjectNormal = new NodeObjectNormal(docObject.docData._id, connectionObject.connectionData._id, parentNodeObject.nodeId)
            this.nodesEdgesDataStorage.insertNode(nodeObjectNormal)
            nodeObjectsArray.push(nodeObjectNormal)
        }
        console.log(nodeObjectsArray)
        return nodeObjectsArray
    }

    async newNodeObjectWithNewDoc(parentNodeObject: NodeObjectBase) {
        let parentDoc = LayrFind.doc_ByNodeId_InFrame(parentNodeObject.nodeId, document)

        let docConnsObjects = await layrBackgroundF.docsConnectionsManager.insertNewDoc_AsParentDocChild(parentDoc.docData._id)

        let nodeObjectNormal = new NodeObjectNormal(docConnsObjects.docObjects[0].docData._id, docConnsObjects.connectionObjects[0].connectionData._id, parentNodeObject.nodeId)
        console.log("nodeObjectNormal", nodeObjectNormal)
        this.nodesEdgesDataStorage.insertNode(nodeObjectNormal)
        return nodeObjectNormal
    }


}
