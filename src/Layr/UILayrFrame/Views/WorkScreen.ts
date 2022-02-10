import {LayrUI} from "../LayrUI.js";

export class WorkScreen {
    workScreenDiv: HTMLDivElement
    layrUI: LayrUI

    constructor(layrUI: LayrUI) {
        this.layrUI = layrUI
        this.workScreenInit()
    }

    workScreenInit() {
        this.workScreenDiv = document.createElement("div")
        this.workScreenDiv.style.flex = "1"
        this.workScreenDiv.style.minHeight = "100px"
        this.workScreenDiv.id = "workScreenDiv"
        document.body.appendChild(this.workScreenDiv)

    }


}