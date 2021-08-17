import {LayrBackground} from "../Background/LayrBackground.js";
import {NodeDivManager} from "./NodeDivManager.js";
import {Talca} from "./Talca/Talca.js";

export class LayrFrame {


	layrBackground: LayrBackground | undefined
	bkg:Window|null
	nodeDivManager: NodeDivManager
	talca:Talca


	constructor() {

		this.bkg = chrome.extension.getBackgroundPage()
		// @ts-ignore
		this.layrBackground=this.bkg.layr
		this.talca=new Talca(this)
		// @ts-ignore
		console.log(this.bkg.layr)

		this.nodeDivManager = new NodeDivManager(this.layrBackground)
		//this.bkg.background.newTab(window)
	}


}