import {LayrBackground} from "../Background/LayrBackground.js";
import {NodeDivManager} from "./NodeDivManager.js";

export class LayrFrame {


	layrBackground: LayrBackground | undefined
	bkg:Window|null
	nodeDivManager: NodeDivManager

	constructor() {

		this.bkg = chrome.extension.getBackgroundPage()
		// @ts-ignore
		this.layrBackground=this.bkg.layr
		console.log(this.bkg)

		this.nodeDivManager = new NodeDivManager(this.layrBackground)
		//this.bkg.background.newTab(window)
	}


}