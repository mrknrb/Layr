import {MrkS3} from "./MrkS3.js";
import {DocData} from "../NodeDiv/NodeDocData/DocData/DocData.js";
import {NodeDiv} from "../NodeDiv/NodeDiv.js";
import {MrkLibrary} from "../MrkLibrary.js";
import {GroupElementData} from "../NodeDiv/Elements/Elements/GroupElement/GroupElementData.js";
import {URL_Object} from "../Arangodb/AdatTipusok/URL_Object.js";


export class NodeDivFactory {
	mrkS3: MrkS3

	constructor(mrkS3: MrkS3) {
		this.mrkS3 = mrkS3
	}

	ujRootNodeDivBetoltes(docURL: string) {
		//empty virtual doc if arg is empty

		this.torlesNodedivs()
		let nodeDiv = new NodeDiv(this.mrkS3)
		nodeDiv.nodeDivAllData.nodeDivData.root = true
		nodeDiv.nodeDivAllData.nodeDivData.docAbsoluteURL = docURL
		this.mrkS3.nodeDivMap.set(nodeDiv.nodeDivAllData.nodeDivData.nodeDivId, nodeDiv)
		this.mrkS3.arangoMrkMessageClient.docsDownloader([docURL], function (docs: DocData[]) {
			nodeDiv.nodeDivAllData.nodeDocData.docData = docs[0]
			nodeDiv.refresher()
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


	private async docGroupChildDocsGetter(nodeDiv:NodeDiv,groupField: GroupElementData, callback) {
		let self = this
		let docs = {
			collectiondocIDs: [],
			collectiondoclocaldocIDs: [],
			localdocarray: [],
			collectiondocarray: [],
			collectiondoclocaldocarray: []
		}
		//-------------------------------------refactor-----------------

				groupField.nodes.forEach(function (node) {
					if (node.docRelativeURL) {
						let urlObject= new URL_Object(nodeDiv.nodeDivAllData.nodeDivData.docAbsoluteURL,node.docRelativeURL)
						if (urlObject.dataScope == "doc") {

							node. = self._localDocFinder(node.docid, groupField)
							console.log(self._localDocFinder(node.docid, groupField))
						} else if (urlObject.dataScope == "collection") {
							if (urlObject.dataType == "doc") {
								docs.collectiondocIDs.push(urlObject.docid)
							} else if (urlObject.dataType == "localdoc") {
								docs.collectiondoclocaldocIDs.push(urlObject)
							}
						}
					}
				})


		this.mrkS3.arangoMrkMessageClient.docsDownloader(docs.collectiondocIDs, function (docs2) {
				console.log(groupField)

				groupField.data.nodes.forEach(function (node) {
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

		doc.localdocs.forEach(function (doc2) {
			if (docid == doc2.id) {

				return doc2
			}
		})

	}

	private torlesNodedivs() {
		this.mrkS3.nodeDivMap.forEach(function (nodeDiv) {
			nodeDiv.mainElement.element.remove()
		})
		this.mrkS3.nodeDivMap = new Map()
	}

}
