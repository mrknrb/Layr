import {LayrBackground} from "../Background/LayrBackground.js";
import {NodesManager} from "./NodesManager/NodesManager.js";
import {Talca} from "./Talca/Talca.js";

export class LayrFrame {



    nodeManager: NodesManager
    talca: Talca


    constructor() {


        this.talca = new Talca(this)
        this.nodeManager = new NodesManager()
    }

    createLayrFrame() {


    }


}