import {LayrBackground} from "../Background/LayrBackground.js";
import {DocData} from "../Background/Data/DocData/DocData.js";
import {NodeDiv} from "./NodeDiv/NodeDiv.js";
import {GroupElementData} from "./NodeDiv/Elements/Elements/GroupElement/GroupElementData.js";
import {URL_Object} from "../Background/Arangodb/ArangoAdatok/URL_Object.js";
import {NodeDivData} from "./NodeDiv/NodeDivData.js";


export class NodeDivManager {

	layrBackground: LayrBackground
	nodeDivs: Map<string, NodeDiv>
	rootNodeDiv: NodeDiv

	constructor(layrBackground: LayrBackground) {
		this.layrBackground = layrBackground
		this.nodeDivs = new Map<string, NodeDiv>()
	}

	createRootNodeDiv() {

		this.rootNodeDiv = new NodeDiv()
		this.rootNodeDiv.rootInit()
	}

	ujRootNodeDivBetoltes(docURL: string) {
		//empty virtual doc if arg is empty
		this.torlesNodedivs()
		let nodeDiv = new NodeDiv()
		nodeDiv.nodeDivData.root = true
		this.layrBackground.nodeDivMap.set(nodeDiv.nodeDivData.nodeDivData.nodeDivId, nodeDiv)
		this.layrBackground.arangoMrk.docsDownloader([docURL], function (docs: DocData[]) {
			nodeDiv.nodeDivData.nodeDocData.docData = docs[0]
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


		await this.layrBackground.arangoMrk.docsDownloader(docs.collectiondocIDs, function (docs2) {
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
		this.layrBackground.nodeDivMap.forEach(function (nodeDiv) {
			nodeDiv.mainElement.element.remove()
		})
		this.layrBackground.nodeDivMap = new Map()
	}

}
