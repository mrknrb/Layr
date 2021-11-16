import {NodeObjectBase} from "./Node/NodeObject/NodeObjectBase.js";
import {EdgeObject} from "./Edge/EdgeObject.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";

export class NodesEdgesDataStorage {

    nodeNodeIdMap: Map<string, NodeObjectBase>
    nodeDocIdMap: Map<string, NodeObjectBase[]>
    nodeConnIdMap: Map<string, NodeObjectBase[]>


    edgeEdgeIdMap: Map<string, EdgeObject>
    edgeConnIdMap: Map<string, EdgeObject[]>
    edgeParentConnIdMap: Map<string, EdgeObject[]>


    constructor() {
        this.nodeDocIdMap = new Map<string, NodeObjectBase[]>()
        this.nodeConnIdMap = new Map<string, NodeObjectBase[]>()
        this.nodeNodeIdMap = new Map<string, NodeObjectBase>()

        this.edgeEdgeIdMap = new Map<string, EdgeObject>()
        this.edgeConnIdMap = new Map<string, EdgeObject[]>()
    }

    insertNode(nodeObjectInterface: NodeObjectBase) {
        this.nodeNodeIdMap.set(nodeObjectInterface.nodeId, nodeObjectInterface)

        let nodesByDocId = this.nodeDocIdMap.get(nodeObjectInterface.docId)
        if (!nodesByDocId) {
            nodesByDocId = []
            this.nodeDocIdMap.set(nodeObjectInterface.docId, nodesByDocId)
        }
        nodesByDocId.push(nodeObjectInterface)

        if (nodeObjectInterface.nodeId != "0") {
            let nodeObjectNormal = nodeObjectInterface as NodeObjectNormal
            let nodesByConnId = this.nodeConnIdMap.get(nodeObjectNormal.connectionId) as NodeObjectNormal[]
            if (!nodesByConnId) {
                nodesByConnId = []
                this.nodeConnIdMap.set(nodeObjectNormal.connectionId, nodesByConnId)
            }
            nodesByConnId.push(nodeObjectNormal)
        }
    }

    deleteNodeByNodeId(nodeObjectInterface: NodeObjectBase) {
        this.nodeNodeIdMap.delete(nodeObjectInterface.nodeId)
        let nodesByDocId = this.nodeDocIdMap.get(nodeObjectInterface.docId)
        nodesByDocId.forEach((value, key) => {
            if (value.nodeId == nodeObjectInterface.nodeId) {
                nodesByDocId.splice(key)
            }
        })
        if (nodeObjectInterface.nodeId != "0") {
            let nodeObjectNormal = nodeObjectInterface as NodeObjectNormal
            let nodesByConnId = this.nodeConnIdMap.get(nodeObjectNormal.connectionId) as NodeObjectNormal[]
            nodesByConnId.forEach((value, key) => {
                if (value.connectionId == nodeObjectNormal.connectionId) {
                    nodesByConnId.splice(key)
                }
            })
        }
    }


    insertEdge(edgeObject: EdgeObject) {
        this.edgeEdgeIdMap.set(edgeObject.edgeId, edgeObject)

        let edgesByConnId = this.edgeConnIdMap.get(edgeObject.connectionId)
        if (!edgesByConnId) {
            edgesByConnId = []
            this.nodeConnIdMap.set(edgeObject.connectionId, [])
        }
        edgesByConnId.push(edgeObject)

        let edgesByParentConnId = this.edgeParentConnIdMap.get(edgeObject.parentConnectionId)
        if (!edgesByParentConnId) {
            edgesByParentConnId = []
            this.edgeParentConnIdMap.set(edgeObject.parentConnectionId, [])
        }
        edgesByParentConnId.push(edgeObject)
    }

    deleteEdgeByEdgeId(edgeObject: EdgeObject) {
        this.edgeEdgeIdMap.delete(edgeObject.edgeId)

        let edgesByConnId = this.edgeConnIdMap.get(edgeObject.connectionId)
        edgesByConnId.forEach((value, key) => {
            if (value.edgeId == edgeObject.edgeId) {
                edgesByConnId.splice(key)
            }
        })

        let edgesByParentConnId = this.edgeParentConnIdMap.get(edgeObject.parentConnectionId)
        edgesByParentConnId.forEach((value, key) => {
            if (value.edgeId == edgeObject.edgeId) {
                edgesByParentConnId.splice(key)
            }
        })
    }


}