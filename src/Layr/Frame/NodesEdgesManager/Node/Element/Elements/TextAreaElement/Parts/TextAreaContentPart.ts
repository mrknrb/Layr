import {PartBase} from "../../../../../PartsGeneral/PartBase.js";
import {TextAreaElement} from "../TextAreaElement.js";
import {PartSyncMessageObject} from "../../../../../PartsGeneral/PartSyncMessageObject.js";

export class TextAreaContentPart extends PartBase {
    elementObject: TextAreaElement

    constructor(elementObject: TextAreaElement) {
        super();
        this.elementObject = elementObject
        this.saveEventTriggerInit()
    }

    saveEventTriggerInit() {

        this.elementObject.element.addEventListener("keydown", () => {
            this.saveValueAndSaveEvent()
        })
    }

    saveValue() {
        this.elementObject.getFieldObject().fieldData.data.content = this.elementObject.element.value
    }

    loadData() {

        this.elementObject.element.value = this.elementObject.getFieldObject().fieldData.data.content
    }

    onSaveEventDefaultFunction() {
        let partSyncMessageObject = new PartSyncMessageObject(this.getPartClassName(), this.elementObject.fieldId)
        this.elementObject.getFieldObject().fieldEvents.onFieldChange.emit(partSyncMessageObject)
    }


}
