import {MrkS3} from "./MrkS3";
import {NodeDivAllData} from "../NodeDiv/NodeDivAllData";
import {NodeDiv} from "../NodeDiv/NodeDiv";
import {DocData} from "../NodeDiv/NodeDocData/DocData/DocData";

export class NodeDivFactory {
    mrkS3: MrkS3

    constructor(mrkS3: MrkS3) {
        this.mrkS3 = mrkS3
    }

    ujRootNodeDivBetoltes(docURL: string) {
        //empty virtual doc if arg is empty
        let self = this
        this.torlesNodedivs()
        let data: NodeDivAllData = null

        data.nodeDivData.root = true
        let nodeDiv = new NodeDiv(this.mrkS3, data)
        this.mrkS3.nodeDivMap.set(nodeDiv.nodeDivAllData.nodeDivData.nodeDivId, nodeDiv)
        this.mrkS3.arangoMrkMessageClient.docsDownloader([docURL], function (docs: DocData) {
            data.nodeDocData.docData = docs[0]
        })
    }

    private _docGroupBetoltottNodeDivsMaker(docgroup, docGroupRoot) {
        let self = this
        docgroup.data.nodes.forEach(function (nodeDocData) {
            let nodediv = new NodeDiv(self, nodeDocData)
            nodediv.appendNodeDiv(docGroupRoot)
            self.nodeDivMap.push(nodediv)

        })
    }


    private async docGroupChildDocsGetter(doc, callback) {
        let self = this
        let docs = {
            collectiondocIDs: [],
            collectiondoclocaldocIDs: [],
            localdocarray: [],
            collectiondocarray: [],
            collectiondoclocaldocarray: []
        }
//-------------------------------------refactor-----------------
        if (doc.type) {
            if (doc.type == "group") {
                if (doc.data) {
                    if (doc.data.nodes) {
                        doc.data.nodes.forEach(function (node) {
                            if (node.docid) {
                                let valasz = MrkLibrary.mrkSUrlDecoder(node.docid)
                                if (valasz.dataScope == "doc") {

                                    node.docdata = self._localDocFinder(node.docid, doc)
                                    console.log(self._localDocFinder(node.docid, doc))
                                } else if (valasz.dataScope == "collection") {
                                    if (valasz.dataType == "doc") {
                                        docs.collectiondocIDs.push(valasz.docid)
                                    } else if (valasz.dataType == "localdoc") {
                                        docs.collectiondoclocaldocIDs.push(valasz)
                                    }
                                }
                            }
                        })
                    }
                }
            }
        }

        this.arangoMrkMessageClient.docsDownloader(docs.collectiondocIDs, function (docs2) {
                console.log(doc)

                doc.data.nodes.forEach(function (node) {
                    docs2.forEach(function (doc) {
                        if (node.docid == doc.id) {
                            node.docdata = doc
                        }
                    })
                })
                return callback()


            }
        )


    }

    private _localDocFinder(docid, doc) {
        let doc3
        doc.localdocs.forEach(function (doc2) {
            if (docid == doc2.id) {

                doc3 = doc2
            }
        })
        return doc3

    }

    private torlesNodedivs() {
        this.nodeDivMap.forEach(function (nodeDiv) {
            nodeDiv.nodeDivTorles()

        })
        this.nodeDivMap = new Map()
    }

}
