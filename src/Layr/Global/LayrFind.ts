import {LayrFrame} from "../Frame/LayrFrame.js";
import {ConnectionObject} from "../Background/Data/Connection/ConnectionObject.js";
import {DocObject} from "../Background/Data/Doc/Doc/DocObject.js";
import {NodeObjectInterface} from "../Frame/NodesManager/Node/NodeObject/NodeObjectInterface.js";
import {layrBackgroundF} from "../Frame/MainFrame.js";

export class LayrFind {

    static doc(docId: string): DocObject {

        return layrBackgroundF.docsConnectionsManager.docObjectsMap.get(docId)
    }

    static docs(docIds: string[]): DocObject[] {
        let docs: DocObject[] = []
        docIds.forEach(function (docId) {
            docs.push(LayrFind.doc(docId))
        })


        return docs
    }

    static connection(connectionId): ConnectionObject {

        return layrBackgroundF.docsConnectionsManager.connectionObjectsMap.get(connectionId)

    }

    static node_ById_InFrame(nodeId, windowHaNincsDefault: Window | null): NodeObjectInterface {
        // @ts-ignore
        let layrFrame: LayrFrame = windowHaNincsDefault.layrFrame
        if (!windowHaNincsDefault) {
            // @ts-ignore
            layrFrame = window.layrFrame
        }
       // console.log(layrFrame.nodeManager.nodeObjectsMap.get(nodeId))
       // console.log(layrFrame.nodeManager)
        return layrFrame.nodeManager.nodeObjectsMap.get(nodeId)
    }

    static nodes_ByDocId_InAllFrames(docId: string) {

    }

    static doc_ByNodeId_InFrame(nodeId: string, windowHaNincsDefault: Window | null): DocObject {

        let parentNode = this.node_ById_InFrame(nodeId, windowHaNincsDefault)
        return this.doc(parentNode.docId)
    }

    static field_ByName_InDocObject(fieldName: string, docObject: DocObject) {
        return docObject.fieldObjects.find(function (fieldObject) {
            return fieldObject.fieldData.fieldName === fieldName;
        })

    }


}