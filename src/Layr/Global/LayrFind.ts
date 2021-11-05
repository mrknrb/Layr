import {LayrFrame} from "../Frame/LayrFrame.js";
import {ConnectionObject} from "../Background/Data/Connection/ConnectionObject.js";
import {DocObject} from "../Background/Data/Doc/Doc/DocObject.js";
import {NodeInterface} from "../Frame/NodesManager/Node/NodeObject/NodeInterface.js";
import {layrBackgroundF} from "../Frame/MainFrame.js";

export class LayrFind {

    static doc(docId): DocObject {

        return layrBackgroundF.docsConnectionsManager.docObjectsMap.get(docId)
    }

    static connection(connectionId): ConnectionObject {

        return layrBackgroundF.docsConnectionsManager.connectionObjectsMap.get(connectionId)

    }

    static node_ById_InFrame(nodeId, windowHaNincsDefault: Window | null): NodeInterface {
        // @ts-ignore
        let layrFrame: LayrFrame = windowHaNincsDefault.layrFrame
        if (!windowHaNincsDefault) {
            // @ts-ignore
            layrFrame = window.layrFrame
        }
        return layrFrame.nodeManager.nodeObjectNormalMap.get(nodeId)
    }

    static nodes_ByDocId_InAllFrames(docId: string) {

    }

    static doc_ByNodeId_InFrame(nodeId: string, windowHaNincsDefault: Window | null): DocObject {

        let parentNode = this.node_ById_InFrame(nodeId, windowHaNincsDefault)
        return this.doc(parentNode.docId)
    }

    static field_ByName_InDocObject(fieldName:string,docObject:DocObject) {
       return docObject.fieldObjects.find(function (fieldObject) {
            return fieldObject.fieldData.fieldName === fieldName;
        })

    }


}