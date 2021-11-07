import {NodeObjectRoot} from "./Node/NodeObject/NodeObjectRoot.js";
import {DocObject} from "../../Background/Data/Doc/Doc/DocObject.js";
import {NodeObjectNormal} from "./Node/NodeObject/NodeObjectNormal.js";
import {layrBackgroundF} from "../MainFrame.js";


export class NodesManager {

    nodeObjectRoot: NodeObjectRoot
    nodeObjectNormalMap: Map<string, NodeObjectNormal>

    constructor() {

        this.nodeObjectNormalMap = new Map<string, NodeObjectNormal>()
    }

    loadRootNode(docId: string) {
        let self = this
        layrBackgroundF.docsConnectionsManager.docLoad(docId, function (docDataObject: DocObject) {

            self.nodeObjectRoot ? self.nodeObjectRoot.removeNode() : null
            self.nodeObjectRoot = new NodeObjectRoot(docDataObject.docId)

        })
    }

    loadNormalNode(docId: string) {
        let self = this
        layrBackgroundF.docsConnectionsManager.docLoad(docId, function (docDataObject: DocObject) {



        })
    }
}
