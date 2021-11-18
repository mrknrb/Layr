import {PartsManagerBase} from "../../../../../PartsGeneral/PartsManagerBase.js";
import {PartBaseRegi} from "../../../../../PartsGeneral/PartBaseRegi.js";
import {TextAreaElement} from "../../TextAreaElement/TextAreaElement.js";
import {TextAreaContentPartregi} from "../../TextAreaElement/TextAreaPartsManager/TextAreaParts/TextAreaContentPartregi.js";

export class DropDownStaticPartsManager extends PartsManagerBase {


    constructor(elementObject: TextAreaElement) {
        super()
        let part = new TextAreaContentPartregi(elementObject)
        this.parts.set(part.constructor.name, part)
    }


}