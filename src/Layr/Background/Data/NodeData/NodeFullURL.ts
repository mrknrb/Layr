export class NodeFullURL {
	constructor(parentDocFullURL: string, fieldName: string, nodeId: string) {
		this.parentDocFullURL = parentDocFullURL
		this.fieldName = fieldName
		this.nodeId = nodeId
	}

	parentDocFullURL: string
	fieldName: string
	nodeId: string

}