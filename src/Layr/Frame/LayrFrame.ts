import {LayrBackground} from "../Background/LayrBackground.js";
import {NodesManager} from "./NodesManager/NodesManager.js";
import {Talca} from "./Talca/Talca.js";

export class LayrFrame {



    nodesManager: NodesManager
    talca: Talca


    constructor() {


        this.talca = new Talca(this)
        this.nodesManager = new NodesManager()
    }

    createLayrFrame() {


    }


}
//@ts-ignore
let layrFrame:LayrFrame=window.layrFrame
export {layrFrame}