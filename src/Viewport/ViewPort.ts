import {Talca} from "../Talca/Talca";
import {NodeDiv} from "../NodeDiv/Elements/MainElements/NodeDiv";
import {URL_Object} from "../Arangodb/AdatTipusok/URL_Object";
import {ArangoMrkMessageClient} from "../Arangodb/ArangoMrkMessageClient";

export class  MrkS3 {
    pouchdbClientData
    arangoMrkMessageClient:ArangoMrkMessageClient
    talca:Talca
    nodeDivMap:Map<string,NodeDiv>

    constructor() {
        // @ts-ignore
        this.pouchdbClientData = new PouchDB("MrkSUserData", {
            revs_limit: 50,
            auto_compaction: true
        })
        this.arangoMrkMessageClient = new ArangoMrkMessageClient()

        MrkLibrary.cssPreventInit()
        this.talca = new Talca(this)

        this.nodeDivMap = new Map<string,NodeDiv>()
    }

//---------------------------------------------------------co rootnodediv
    ujRootNodeDivBetoltes(docURL:string) {
        //empty virtual doc if arg is empty
       let self = this
        this.torlesNodedivs()
        this.arangoMrkMessageClient.docsDownloader([docURL], function (docs) {
            console.log(docs)
            let nodeDiv = new NodeDiv(self, {root: true, docData: docs[0]})

            self.nodeDivMap.set(nodeDiv.data.nodeDivid, nodeDiv)
        })
    }




//-------------------------------------pa nodeDivGroupsBetoltes


   private _docGroupBetoltottNodeDivsMaker(docgroup, docGroupRoot) {
        let self = this
        let betoltetlennodes = docgroup.data.nodes
        docgroup.data.nodes.forEach(function (nodeDocData) {
            console.log(nodeDocData)

            let nodediv = new NodeDiv(nodeDocData, self)
            nodediv.appendNodeDiv(docGroupRoot)
            self.nodeDivMap.push(nodediv)

        })
    }


   private async docGroupChildDocsGetter(doc, callback) {
        let self = this
        let docs = { collectiondocIDs : [],
            collectiondoclocaldocIDs : [],
            localdocarray : [],
            collectiondocarray : [],
            collectiondoclocaldocarray :[]
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