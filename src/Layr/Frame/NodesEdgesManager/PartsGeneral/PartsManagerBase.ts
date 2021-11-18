import {PartBaseRegi} from "./PartBaseRegi.js";
import {PartBase} from "./PartBase.js";

export abstract class PartsManagerBase {
    parts: Map<string, PartBase>

    constructor() {
        this.parts = new Map<string, PartBase>()
    }





    /*
        addParts(newParts: PartBase[]) {
            this.parts.push(... newParts)
        }
    */

}