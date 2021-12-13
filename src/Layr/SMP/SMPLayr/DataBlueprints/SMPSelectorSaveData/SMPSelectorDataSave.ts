import {SMPStateDataSave} from "./SMPStateDataSave.js";

export class SMPSelectorDataSave {

    selectorName: string
    selectorActivated: boolean
    savedActivateState: string
    states: SMPStateDataSave[]

    constructor(selectorName: string) {
        this.selectorName = selectorName
        this.states = []
    }
}