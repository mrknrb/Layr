import {PartBase} from "../../../../../PartsGeneral/PartBase.js";
import {TextAreaElement} from "../TextAreaElement.js";
import {PartInterface} from "../../../../../PartsGeneral/PartInterface.js";

export {TextAreaParts}
let TextAreaParts: PartBase[] = []

class TextAreaContentPart extends PartBase implements PartInterface {
    element: TextAreaElement

    constructor(element: TextAreaElement) {
        super();
        this.element = element
    }

    load() {
        self.getFieldObject().fieldData.data.content = self.element.value
        console.log( typeof this)

    }

    saveValue() {

    }

    onChangeEventDefaultFunction() {
        self.getFieldObject().fieldData.data.content = self.element.value
    }


}

TextAreaParts.push(TextAreaContentPart)







