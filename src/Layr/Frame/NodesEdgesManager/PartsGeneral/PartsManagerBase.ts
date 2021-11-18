import {PartBase} from "./PartBase.js";

export abstract class PartsManagerBase {
    parts: Map<string, PartBase>

    constructor() {
        this.parts = new Map<string, PartBase>()
    }

    getPart(className: string) {
        return this.parts.get(className)
    }


    /*
        addParts(newParts: PartBase[]) {
            this.parts.push(... newParts)
        }
    */

}