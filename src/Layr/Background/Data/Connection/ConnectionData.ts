import {NodeGroupData} from "./NodeGroupData.js";

export class ConnectionData {

    _id: string
    from: string
    to: string
    type: string
    tags: string[]
    nodeGroupData: NodeGroupData

    constructor(from: string, to: string, type: string) {

        this.from = from
        this.to = to
        this.type = type
        this.tags = []
        this.nodeGroupData = new NodeGroupData()

    }


}