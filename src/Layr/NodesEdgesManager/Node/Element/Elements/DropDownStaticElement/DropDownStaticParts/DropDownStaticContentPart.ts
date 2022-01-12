import {PartBaseRegi} from "../../../../../../../../Global/PartsGeneral/PartBaseRegi.js";
import {DropDownStaticElement} from "../DropDownStaticElement.js";

export class DropDownStaticContentPart extends PartBaseRegi {


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