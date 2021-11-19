import {TextAreaContentPart} from "./TextAreaParts/TextAreaContentPart.js";
import {TextAreaElement} from "../TextAreaElement.js";

export class TextAreaElementPartsClassList {
    TextAreaContentPart: TextAreaContentPart

    constructor(elementObject: TextAreaElement) {
        this.TextAreaContentPart = new TextAreaContentPart(elementObject)

    }

}