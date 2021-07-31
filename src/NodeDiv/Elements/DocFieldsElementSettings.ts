import {ElementTypes} from "./ElementTypes";
import {TextAreaElementSettings} from "./Elements/TextAreaElement/TextAreaElementSettings";
import {TextAreaResizeTypes} from "./Elements/TextAreaElement/TextAreaResizeTypes";

export const DocFieldsElementSettings = {
    url: {
        type: ElementTypes.TextArea,
        resizeType:TextAreaResizeTypes.oneLine
    },
    title: {
        type: ElementTypes.TextArea,
        resizeType:TextAreaResizeTypes.oneLine
    },
    note: {
        type: ElementTypes.TextArea,
        resizeType:TextAreaResizeTypes.auto
    },
    rank: {
        type: ElementTypes.DropDownStatic
    },
    tags: {
        type: ElementTypes.TextArea,
        resizeType:TextAreaResizeTypes.oneLine
    }
}