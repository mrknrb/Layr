import {PartBase} from "../../../../../PartsGeneral/PartBase.js";
import {TextAreaElement} from "../TextAreaElement.js";
import {PartsManager} from "../../../../../PartsGeneral/PartsManager.js";
import {PartSyncMessageObject} from "../../../../../PartsGeneral/PartSyncMessageObject.js";
import {TextAreaContentPart} from "./TextAreaContentPart.js";


export class TextAreaPartsManager extends PartsManager {
    parts: Map<string, PartBase>

    constructor(elementObject: TextAreaElement) {
        super()
        let part = new TextAreaContentPart(elementObject)
        this.parts.set(part.constructor.name, part)
    }
}

