import {ConnObject} from "../Layr/DocsConnsManager/Data/Conn/ConnObject.js";
import {DocObject} from "../Layr/DocsConnsManager/Data/Doc/Doc/DocObject.js";
import {NodeObjectBase} from "../Layr/NodesEdgesManager/Node/NodeObject/NodeObjectBase.js";
import {ElementTypes} from "../Layr/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {FieldObject} from "../Layr/DocsConnsManager/Data/Doc/Field/FieldObject.js";
import {ElementBaseClass} from "../Layr/NodesEdgesManager/Node/Element/ElementBaseClass.js";
import {layrFrame} from "../Layr/LayrFrame.js";
import {NodeObjectNormal} from "../Layr/NodesEdgesManager/Node/NodeObject/NodeObjectNormal.js";

export class LayrFind {


    static doc(docId: string | undefined): DocObject | undefined {
        if (docId == undefined) return undefined
        return layrFrame.docsConnsManager.docObjectsMap.get(docId)
    }

    static docs(docIds: string[]): DocObject[] {
        let docs: DocObject[] = []
        docIds.forEach(function (docId) {
            let doc = LayrFind.doc(docId)
            if (doc !== undefined) {
                docs.push(doc)
            }
        })
        return docs
    }

    static conn(connId: string): ConnObject | undefined {
        return layrFrame.docsConnsManager.connObjectsMap.get(connId)
    }

    static node_ById(nodeId: string): NodeObjectBase | undefined {
        return layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeNodeIdMap.get(nodeId);
    }

    static nodes_ByDocId(docId: string): NodeObjectBase[] | undefined {
        return layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeDocIdMap.get(docId)
    }

    static nodes_ByParentNodeId(nodeId: string,): NodeObjectNormal[] | undefined {
        return layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeParentNodeIdMap.get(nodeId) as NodeObjectNormal[]
    }

    static nodes_ByConnId(connId: string): NodeObjectBase[] | undefined {
        return layrFrame.nodesEdgesManager.nodesEdgesDataStorage.nodeConnIdMap.get(connId)
    }

    static doc_ByNodeId(nodeId: string): DocObject | undefined {
        return this.doc(this.node_ById(nodeId)?.docId)
    }

    static field_ById_InDocObject(fieldId: string, docObject: DocObject){
        if (!docObject) return
        return docObject.fieldObjects.find(function (fieldObject) {
            return fieldObject.fieldData.fieldId === fieldId;
        })
    }

    static fieldObject_ByFieldId_DocId(fieldId: string, docId: string){
        let doc = LayrFind.doc(docId)
        if (doc === undefined) {
            return undefined
        } else {
            return LayrFind.field_ById_InDocObject(fieldId, doc)
        }

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