import {PartBase} from "./PartBase.js";

export class PartsManager {
    parts: PartBase[]

    constructor() {
        this.parts= []
    }

    addParts(newParts: PartBase[]) {
        this.parts.push(... newParts)
    }


}