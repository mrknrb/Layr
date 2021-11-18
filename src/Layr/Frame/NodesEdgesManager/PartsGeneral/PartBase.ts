import {ElementBaseClass} from "../Node/Element/ElementBaseClass.js";
import {TextAreaElement} from "../Node/Element/Elements/TextAreaElement/TextAreaElement.js";

export abstract class PartBase {


     elementObject: ElementBaseClass

    protected constructor(elementObject: ElementBaseClass) {
        this.elementObject = elementObject
        this.saveValueTriggerInit()
    }

    saveMain() {

        this.saveValue(this.getDataObject())
        this.changeSync()
    }
    loadMain() {

        this.loadData(this.getDataObject())
    }

    protected  getPartClassName() {
        return this.constructor.name
    }

    //eggyel lejjebb hasznalatos
    protected  abstract getDataObject()


    protected  abstract changeSync()

    //kettovel lejjebb hasznalatos
    protected  abstract saveValueTriggerInit()


  protected  abstract loadData(object: any)

    protected abstract saveValue(object: any)


}