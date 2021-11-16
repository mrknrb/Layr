import {LayrFrame} from "../../Frame/LayrFrame.js";

export class LayrFrameSaveObject {
    layrFrame: LayrFrame

    constructor(layrFrame: LayrFrame) {
        this.layrFrame = layrFrame
    }

    windowOpened() {
        let answer = this.layrFrame.document.defaultView
        return !!answer;
    }
}