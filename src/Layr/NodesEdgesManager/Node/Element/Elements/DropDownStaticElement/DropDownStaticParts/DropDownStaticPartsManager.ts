import {PartsManagerBase} from "../../../../../../../Global/PartsGeneral/PartsManagerBase.js";
import {TextAreaElement} from "../../TextAreaElement/TextAreaElement.js";
import {TextAreaContentPart} from "../../TextAreaElement/TextAreaPartsManager/TextAreaParts/TextAreaContentPart.js";

export class DropDownStaticPartsManager extends PartsManagerBase {


    constructor(elementObject: TextAreaElement) {
        super()
        let part = new TextAreaContentPart(elementObject)
        this.parts.set(part.constructor.name, part)
    }


}