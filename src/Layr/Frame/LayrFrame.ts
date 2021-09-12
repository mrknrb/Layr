import {LayrBackground} from "../Background/LayrBackground.js";
import {RootNodeDivManager} from "./RootNodeDivManager.js";
import {Talca} from "./Talca/Talca.js";

export class LayrFrame {


    layrBackground: LayrBackground | undefined
    bkg: Window | null
    nodeDivManager: RootNodeDivManager
    talca: Talca


    constructor() {

        this.bkg = chrome.extension.getBackgroundPage()
        // @ts-ignore
        this.layrBackground = this.bkg.layr
        this.talca = new Talca(this)
        this.nodeDivManager = new RootNodeDivManager()
    }

    createLayrFrame() {


    }


}