import {LayrFrame} from "../Frame/LayrFrame.js";
import {ConnectionObject} from "../Background/Data/Connection/ConnectionObject.js";
import {DocObject} from "../Background/Data/Doc/Doc/DocObject.js";
import {NodeObjectBase} from "../Frame/NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {LayrBackground} from "../Background/LayrBackground.js";
import {ElementTypes} from "../Frame/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {FieldObject} from "../Background/Data/Doc/Field/FieldObject.js";
import {ElementBaseClass} from "../Frame/NodesEdgesManager/Node/Element/ElementBaseClass.js";

export class LayrFind {

   private static getLayrBackground(): LayrBackground {
        // @ts-ignore
        return window.layrBackground
    }

    static doc(docId: string): DocObject {

        return LayrFind.getLayrBackground().docsConnectionsManager.docObjectsMap.get(docId)
    }

    static docs(docIds: string[]): DocObject[] {
        let docs: DocObject[] = []
        docIds.forEach(function (docId) {
            docs.push(LayrFind.doc(docId))
        })


        return docs
    }

    static connection(connectionId): ConnectionObject {
        return LayrFind.getLayrBackground().docsConnectionsManager.connectionObjectsMap.get(connectionId)

    }

    static node_ById_InFrame(nodeId:string, documentHaNincsDefault: Document | null): NodeObjectBase {
        // @ts-ignore
        let layrFrame: LayrFrame ={}
        if (documentHaNincsDefault===null) {
            // @ts-ignore
            layrFrame = document.layrFrame
        }else{
            // @ts-ignore
            layrFrame=  documentHaNincsDefault.layrFrame
        }
        return layrFrame.nodesManager.nodesEdgesDataStorage.nodeNodeIdMap.get(nodeId);
    }

    static nodes_ByDocId_Global(docId:string):NodeObjectBase[] {
       let nodes=[]
        LayrFind.getLayrBackground().layrFrameManager.layrFrameObjects.forEach(function (layrFrameSave) {
            nodes.push( layrFrameSave.layrFrame.nodesManager.nodesEdgesDataStorage.nodeDocIdMap.get(docId))
        })
        return nodes
    }
    static nodes_ByConnId_Global(connId:string):NodeObjectBase[] {
        let nodes=[]
        LayrFind.getLayrBackground().layrFrameManager.layrFrameObjects.forEach(function (layrFrameSave) {
            nodes.push( layrFrameSave.layrFrame.nodesManager.nodesEdgesDataStorage.nodeConnIdMap.get(connId))
        })
        return nodes
    }
    static nodes_ByDocId_InAllFrames(docId: string) {

    }

    static doc_ByNodeId_InFrame(nodeId: string, documentHaNincsDefault: Document | any): DocObject {

        let node = this.node_ById_InFrame(nodeId, documentHaNincsDefault)
        return this.doc(node.docId)
    }

    static field_ById_InDocObject(fieldId: string, docObject: DocObject) {


        return docObject.fieldObjects.find(function (fieldObject) {
            return fieldObject.fieldData.fieldId === fieldId;
        })

    }

    static fieldObject_ByFieldId_DocId(fieldId: string, docId: string): FieldObject {
        return LayrFind.field_ById_InDocObject(fieldId, LayrFind.doc(docId))
    }


    static field_GroupType_InDocObject(docObject: DocObject) {
        return docObject.fieldObjects.find(function (fieldObject) {
            return fieldObject.fieldData.elementType === ElementTypes.Group;
        })
    }

    static elements_ByType(elements: Map<string, ElementBaseClass>, elementType: ElementTypes) {
        let elementArray: ElementBaseClass[] = []
        elements.forEach(element => {
            if (element.getFieldObject().fieldData.elementType == elementType) {
                elementArray.push(element)
            }
        })
        return elementArray
    }


}