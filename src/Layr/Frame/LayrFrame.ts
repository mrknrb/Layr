import {NodesEdgesManager} from "./NodesEdgesManager/NodesEdgesManager.js";
import {Talca} from "./Talca/Talca.js";

export class LayrFrame {

layrFrameId:string
    nodesManager: NodesEdgesManager
    talca: Talca
document:Document

    constructor() {

        this.layrFrameId=Math.random().toString()
        this.talca = new Talca(this)
        this.nodesManager = new NodesEdgesManager()
        this.document=document
    }

    createLayrFrame() {


    }


}

//@ts-ignore
let layrFrame: LayrFrame = document.layrFrame

export {layrFrame}