
import {DocField} from "./DocField";
import {DocFieldhezElementSettings} from "../NodeData/DocFieldhezElementSettings";
import {NodeData} from "../NodeData/NodeData";

export class DocData {


    _key:string
    ownDefaultDocFieldElementSettings:DocFieldhezElementSettings[] //rootnal johet jol, amikor a sajat docfieldjeit formaznad
    docFields:DocField[]

}
