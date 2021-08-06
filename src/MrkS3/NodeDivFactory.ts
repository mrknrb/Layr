import {MrkS3} from "./MrkS3.js";
import {DocData} from "../NodeDiv/NodeDocData/DocData/DocData.js";
import {NodeDiv} from "../NodeDiv/NodeDiv.js";
import {GroupElementData} from "../NodeDiv/Elements/Elements/GroupElement/GroupElementData.js";
import {URL_Object} from "../Arangodb/AdatTipusok/URL_Object.js";
import {NodeDocData} from "../NodeDiv/NodeDocData/NodeDocData.js";


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


	private async docGroupsChildDocsDataGetter(nodeDiv_AND_GroupFieldArray: { nodeDiv: NodeDiv, groupField: GroupElementData }[], callback) {
		let self = this

		nodeDiv_AND_GroupFieldArray.forEach(function (nodeDiv_AND_GroupField) {
			let nodeDiv = nodeDiv_AND_GroupField.nodeDiv
			let groupField = nodeDiv_AND_GroupField.groupField



		})

		let docs = {
			collectiondocIDs: [],
			collectiondoclocaldocIDs: [],
			localdocarray: [],
			collectiondocarray: [],
			collectiondoclocaldocarray: []
		}

		let nodeDocDataArray: NodeDocData[] = []
		groupField.nodes.forEach(function (node) {
			let nodeDocData: NodeDocData = new NodeDocData()
			let urlObject = new URL_Object(nodeDiv.nodeDivAllData.nodeDivData.docAbsoluteURL, node.docRelativeURL)

			if (urlObject.dataScope == "doc") {
				nodeDocData.docData = self._localDocFinder(urlObject.docid, groupField.localDocs)

				nodeDocDataArray.push()
			} else if (urlObject.dataScope == "collection") {
				if (urlObject.dataType == "doc") {
					docs.collectiondocIDs.push(urlObject.docid)
				} else if (urlObject.dataType == "localdoc") {
					docs.collectiondoclocaldocIDs.push(urlObject)
				}
			}

		})


		await this.mrkS3.arangoMrkMessageClient.docsDownloader(docs.collectiondocIDs, function (docs2) {
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


	private _localDocFinder(docId, docDataList): DocData {
		let doc: DocData = new DocData()
		docDataList.forEach(function (doc2: DocData) {
			if (docId == doc2._key) {
				doc = doc2
			}
		})

		return doc
	}

	private torlesNodedivs() {
		this.mrkS3.nodeDivMap.forEach(function (nodeDiv) {
			nodeDiv.mainElement.element.remove()
		})
		this.mrkS3.nodeDivMap = new Map()
	}

}
