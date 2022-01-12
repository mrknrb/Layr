import {NodeObjectRoot} from "./Node/NodeObject/NodeObjectRoot.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";
import {NodeObjectBase} from "./Node/NodeObject/NodeObjectBase.js";
import {NodesEdgesDataStorage} from "./NodesEdgesDataStorage.js";
import {layrFrame} from "../LayrFrame.js";


export class NodesEdgesManager {

    nodesEdgesDataStorage: NodesEdgesDataStorage


    constructor() {

        this.nodesEdgesDataStorage = new NodesEdgesDataStorage()

    }

    getNodeObjectRoot() {
        return this.nodesEdgesDataStorage.nodeNodeIdMap.get("0")
    }

    setNodeObjectRoot(nodeObjectRoot: NodeObjectRoot) {
        this.nodesEdgesDataStorage.insertNode(nodeObjectRoot)
    }

    async loadRootNode(docId: string) {

        let docObjects = await layrFrame.docsConnsManager.loadDocs([docId])
        let docObject = docObjects[0]
        this.getNodeObjectRoot() ? this.getNodeObjectRoot().removeNode() : null

        this.setNodeObjectRoot(new NodeObjectRoot(docObject.docData._id))
        return this.getNodeObjectRoot()
    }

    async loadNormalNodesOfGroupNode(parentNodeObject: NodeObjectBase) {

        let docConnObjects = await layrFrame.docsConnsManager.loadDocs_ByDocChildConns(parentNodeObject.docId)
        let nodeObjectsArray: NodeObjectNormal[] = []
        for await(let connObject of docConnObjects.connObjects) {
            let docObject = docConnObjects.docObjects.find(function (docObject) {
                return docObject.docData._id == connObject.connData.to
            })
            let nodeObjectNormal = new NodeObjectNormal(docObject.docData._id, connObject.connData._id, parentNodeObject.nodeId)

            this.nodesEdgesDataStorage.insertNode(nodeObjectNormal)
            nodeObjectsArray.push(nodeObjectNormal)
        }

        return nodeObjectsArray
    }

    async newNodeObjectWithNewDoc(parentNodeObject: NodeObjectBase) {
        let docConnsObjects = await layrFrame.docsConnsManager.insertNewDoc_AsParentDocChild(parentNodeObject.docId)

        let nodeObjectNormal = new NodeObjectNormal(docConnsObjects.docObjects[0].docData._id, docConnsObjects.connObjects[0].connData._id, parentNodeObject.nodeId)

        this.nodesEdgesDataStorage.insertNode(nodeObjectNormal)
        return nodeObjectNormal
    }


}
