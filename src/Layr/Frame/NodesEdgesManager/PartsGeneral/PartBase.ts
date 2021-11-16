import {TypedEvent} from "../../../../0Libraries/TypedEvents.js";

export abstract class PartBase {
    onSaveEvent: TypedEvent<any>


    protected constructor() {
        this.onSaveEvent = new TypedEvent<any>()
    }


    save() {
        this.saveValue()
        this.onSaveEvent.emit(null)
    }

    abstract load()

    protected abstract saveValue()//A Data szerint szetszedett szinten hasznald

    protected abstract onChangeEventDefaultFunction()

}