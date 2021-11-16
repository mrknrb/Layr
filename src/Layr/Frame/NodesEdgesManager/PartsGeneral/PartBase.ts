import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";

export abstract class PartBase {
    onSaveEvent: TypedEvent<any>


    protected constructor() {
        this.onSaveEvent = new TypedEvent<any>()

    }

   abstract saveEventTriggerInit()

    getPartClassName() {
        return this.constructor.name
    }

    saveValueAndSaveEvent() {
        this.saveValue()
        this.onSaveEvent.emit(null)
    }

    abstract loadData()

    protected abstract saveValue()//A Data szerint szetszedett szinten hasznald

    protected abstract onSaveEventDefaultFunction()

}