import {TextAreaElement} from "../TextAreaElement.js";
import {PartsManagerBase} from "../../../../../PartsGeneral/PartsManagerBase.js";
import {TextAreaContentPart} from "./TextAreaParts/TextAreaContentPart.js";


export class TextAreaPartsManager extends PartsManagerBase {

    constructor(elementObject: TextAreaElement) {
        super()
        let part = new TextAreaContentPart(elementObject)
        this.parts.set(part.constructor.name, part)
    }
}

