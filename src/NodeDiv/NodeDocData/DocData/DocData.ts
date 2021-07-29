import {NodeData} from "../NodeData/NodeData";

export interface DocData{

    docid
    _key
    title
    note
    rank
nodes:NodeData[]
localDocs:DocData[]
    type
    appData
}