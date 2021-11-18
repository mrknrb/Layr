import {PartBaseRegi} from "../../../../../../PartsGeneral/PartBaseRegi.js";
import {TextAreaElement} from "../../../TextAreaElement/TextAreaElement.js";
import {DropDownStaticElement} from "../../DropDownStaticElement.js";

export class DropDownStaticContentPart extends PartBaseRegi{


    elementObject: DropDownStaticElement

    constructor(elementObject: DropDownStaticElement) {
        super();
        this.elementObject = elementObject
        this.saveEventTriggerInit()
    }


    protected onSaveEventDefaultFunction() {


    }

    saveEventTriggerInit() {




    }
    loadData() {



    }
    protected saveValue() {
    }





}