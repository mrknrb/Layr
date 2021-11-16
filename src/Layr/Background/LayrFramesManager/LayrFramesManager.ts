import {LayrFrameSaveObject} from "./LayrFrameSaveObject.js";
import {LayrFrame} from "../../Frame/LayrFrame.js";

export class LayrFramesManager {

    layrFrameObjects: Map<string, LayrFrameSaveObject>
    timeOutLoop:number

    constructor() {
        this.layrFrameObjects=new Map<string, LayrFrameSaveObject>()
    }

    newFrame(layrFrame: LayrFrame) {
        this.layrFrameObjects.set(layrFrame.layrFrameId, new LayrFrameSaveObject(layrFrame))
    }

    cleanClosedFramesStartStop(start_OR_Stop: boolean) {
        if (start_OR_Stop) {
            this.timeOutLoop = setTimeout(() => {
                this.cleanClosedFramesLoop()
            }, 60000)

        } else {
            clearTimeout(this.timeOutLoop)
        }
    }

    cleanClosedFramesLoop() {
        this.layrFrameObjects.forEach((layrs, key) => {
            if (!layrs.windowOpened()) {
                this.layrFrameObjects.delete(key)
            }
        })
    }
}