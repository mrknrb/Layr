import {NodeObjectBase} from "./Node/NodeObject/NodeObjectBase.js";
import {EdgeObject} from "./Edge/EdgeObject.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";

export class NodesEdgesDataStorage {

    nodeNodeIdMap: Map<string, NodeObjectBase>
    nodeParentNodeIdMap: Map<string, NodeObjectBase[]>
    nodeDocIdMap: Map<string, NodeObjectBase[]>
    nodeConnIdMap: Map<string, NodeObjectBase[]>


    edgeEdgeIdMap: Map<string, EdgeObject>
    edgeConnIdMap: Map<string, EdgeObject[]>
    edgeParentConnIdMap: Map<string, EdgeObject[]>


    constructor() {
        this.nodeNodeIdMap = new Map<string, NodeObjectBase>()
        this.nodeParentNodeIdMap = new Map<string, NodeObjectBase[]>()
        this.nodeDocIdMap = new Map<string, NodeObjectBase[]>()
        this.nodeConnIdMap = new Map<string, NodeObjectBase[]>()
        this.edgeEdgeIdMap = new Map<string, EdgeObject>()
        this.edgeConnIdMap = new Map<string, EdgeObject[]>()
    }

    insertNode(nodeObjectBase: NodeObjectBase) {
        if (!this.nodeNodeIdMap.get(nodeObjectBase.nodeId)) {
            //  yx                                                                 nodeNodeIdMap
            this.nodeNodeIdMap.set(nodeObjectBase.nodeId, nodeObjectBase)
            //      yx                                                             nodeParentNodeIdMap
            if (nodeObjectBase.constructor.name == NodeObjectNormal.name) {
                console.log("ttttt")
                let nodeObjectNormal = nodeObjectBase as NodeObjectNormal
                let nodesByParentNodeId = this.nodeParentNodeIdMap.get(nodeObjectNormal.parentNodeId)
                if (!nodesByParentNodeId) {

                    this.nodeParentNodeIdMap.set(nodeObjectNormal.parentNodeId, [])
                }
                this.nodeParentNodeIdMap.get(nodeObjectNormal.parentNodeId).push(nodeObjectNormal)
            }
            //   yx                                                                nodeDocIdMap
            let nodesByDocId = this.nodeDocIdMap.get(nodeObjectBase.docId)
            if (!nodesByDocId) {
                nodesByDocId = []
                this.nodeDocIdMap.set(nodeObjectBase.docId, nodesByDocId)
            }
            nodesByDocId.push(nodeObjectBase)
            //    yx                                                                nodeConnIdMap
            if (nodeObjectBase.nodeId != "0") {
                let nodeObjectNormal = nodeObjectBase as NodeObjectNormal
                let nodesByConnId = this.nodeConnIdMap.get(nodeObjectNormal.connId) as NodeObjectNormal[]
                if (!nodesByConnId) {
                    nodesByConnId = []
                    this.nodeConnIdMap.set(nodeObjectNormal.connId, nodesByConnId)
                }
                nodesByConnId.push(nodeObjectNormal)
            }
        } else {
            console.error("The Node is already stored with the id")
        }

    }

    deleteNodeByNodeId(nodeObjectToDelete: NodeObjectNormal) {
        // yx a NodeobjectRootot nem lehet letorolni, mert nincs ertelme
        this.nodeNodeIdMap.delete(nodeObjectToDelete.nodeId)

        let nodesByDocId = this.nodeDocIdMap.get(nodeObjectToDelete.docId)
        nodesByDocId?.forEach((value, key) => {
            if (value.nodeId == nodeObjectToDelete.nodeId) {
                nodesByDocId?.splice(key)
            }
        })


        let nodeParentNodeIdArray = this.nodeParentNodeIdMap.get(nodeObjectToDelete.parentNodeId)
        nodeParentNodeIdArray?.forEach((value, key) => {
            if (value.nodeId == nodeObjectToDelete.nodeId) {
                nodeParentNodeIdArray?.splice(key)
            }
        })

        let nodesByConnId = this.nodeConnIdMap.get(nodeObjectToDelete.connId) as NodeObjectNormal[]
        nodesByConnId.forEach((value, key) => {
            if (value.connId == nodeObjectToDelete.connId) {
                nodesByConnId.splice(key)
            }
        })


    }


    insertEdge(edgeObject: EdgeObject) {
        this.edgeEdgeIdMap.set(edgeObject.edgeId, edgeObject)

        let edgesByConnId = this.edgeConnIdMap.get(edgeObject.connId)
        if (!edgesByConnId) {
            edgesByConnId = []
            this.nodeConnIdMap.set(edgeObject.connId, [])
        }
        edgesByConnId.push(edgeObject)

        let edgesByParentConnId = this.edgeParentConnIdMap.get(edgeObject.parentConnId)
        if (!edgesByParentConnId) {
            edgesByParentConnId = []
            this.edgeParentConnIdMap.set(edgeObject.parentConnId, [])
        }
        edgesByParentConnId.push(edgeObject)
    }

    deleteEdgeByEdgeId(edgeObject: EdgeObject) {
        this.edgeEdgeIdMap.delete(edgeObject.edgeId)

        let edgesByConnId = this.edgeConnIdMap.get(edgeObject.connId)
        edgesByConnId.forEach((value, key) => {
            if (value.edgeId == edgeObject.edgeId) {
                edgesByConnId.splice(key)
            }
        })

        let edgesByParentConnId = this.edgeParentConnIdMap.get(edgeObject.parentConnId)
        edgesByParentConnId.forEach((value, key) => {
            if (value.edgeId == edgeObject.edgeId) {
                edgesByParentConnId.splice(key)
            }
        })
    }


}