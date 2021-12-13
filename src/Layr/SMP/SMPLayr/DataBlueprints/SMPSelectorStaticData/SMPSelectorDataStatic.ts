import {SMPSelectorAndStateName} from "../../SMPEgyebek/SMPSelectorAndStateName.js";
import {SMPStateDataStatic} from "./SMPStateDataStatic.js";

export class SMPSelectorDataStatic {

    constructor() {

        this.states = []
    }

    selectorName: string
    defaultState: string
    defaultSelectorActive: boolean
    parentSelectorAndStateName?: SMPSelectorAndStateName
    states: SMPStateDataStatic[]
}