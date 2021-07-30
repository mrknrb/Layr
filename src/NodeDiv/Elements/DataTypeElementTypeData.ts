import {ElementTypes} from "./ElementTypes";

export const DataTypeElementTypeData = {
    url: {
        type: ElementTypes.TextOneLine
    },
    title: {
        type: ElementTypes.TextArea
    },
    note: {
        type: ElementTypes.TextArea,
        resizeType:"auto"
    },
    rank: {
        type: ElementTypes.DropDownStatic
    },
    tags: {
        type: ElementTypes.TextArea
    }
}