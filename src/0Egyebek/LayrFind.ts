
import {ConnObject} from "../Layr/DocsConnsManager/Data/Conn/ConnObject.js";
import {DocObject} from "../Layr/DocsConnsManager/Data/Doc/Doc/DocObject.js";
import {NodeObjectBase} from "../Layr/NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {ElementTypes} from "../Layr/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {FieldObject} from "../Layr/DocsConnsManager/Data/Doc/Field/FieldObject.js";
import {ElementBaseClass} from "../Layr/NodesEdgesManager/Node/Element/ElementBaseClass.js";
import {layrFrame} from "../Layr/LayrFrame.js";
import {NodeObjectNormal} from "../Layr/NodesEdgesManager/Node/NodeObject/NodeObjectNormal.js";

export class LayrFind {


    static doc(docId: string): DocObject {

        return layrFrame.docsConnsManager.docObjectsMap.get(docId)
    }

    static docs(docIds: string[]): DocObject[] {
        let docs: DocObject[] = []
        docIds.forEach(function (docId) {
            docs.push(LayrFind.doc(docId))
        })
        return docs
    }

    static conn(connId): ConnObject {
        return layrFrame.docsConnsManager.connObjectsMap.get(connId)
    }

    static node_ById_InFrame(nodeId: string): NodeObjectBase {



        return layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeNodeIdMap.get(nodeId);
    }

    static nodes_ByDocId_Global(docId: string): NodeObjectBase[] {
        return   layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeDocIdMap.get(docId)
    }

    static nodes_ByParentNodeId_InFrame(nodeId: string,): NodeObjectNormal[] {

        return layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeParentNodeIdMap.get(nodeId) as NodeObjectNormal[]
    }

    static nodes_ByConnId_Global(connId: string): NodeObjectBase[] {
        let nodes = []

        nodes.push(layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeConnIdMap.get(connId))

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