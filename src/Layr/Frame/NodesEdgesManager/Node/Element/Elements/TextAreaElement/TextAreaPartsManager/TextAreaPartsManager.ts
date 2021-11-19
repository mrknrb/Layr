import {TextAreaElement} from "../TextAreaElement.js";
import {PartsManagerBase} from "../../../../../PartsGeneral/PartsManagerBase.js";
import {TextAreaElementPartsClassList} from "./TextAreaElementPartsClassList.js";


export class TextAreaPartsManager extends PartsManagerBase {
    parts: TextAreaElementPartsClassList

    constructor(elementObject: TextAreaElement) {
        super()
        // let part = new TextAreaContentPart(elementObject)
        // this.parts.set(part.constructor.name, part)
        this.parts = new TextAreaElementPartsClassList(elementObject)
    }
}

