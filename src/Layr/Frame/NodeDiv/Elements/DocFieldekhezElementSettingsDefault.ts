
import {ElementTypes} from "./ElementTypes.js";
import {DocFieldsDefault} from "../../../Background/Data/DocData/DocFieldsDefault.js";
import {ResizeTypes} from "./ElementResizer/ResizeTypes.js";


export const DocFieldekhezElementSettingsDefault = [
    {
        docFieldName: DocFieldsDefault.note,
        elementType: ElementTypes.TextArea,
        ElementSettings: {resizeType: ResizeTypes.autoY}
    },
    {
        docFieldName: DocFieldsDefault.title,
        elementType: ElementTypes.TextArea,
        ElementSettings: {
            resizeType: ResizeTypes.oneLine
        }
    },
    {
        docFieldName: DocFieldsDefault.rank,
        elementType: ElementTypes.DropDownStatic,
        ElementSettings: {
            options: ["1", "2", "3", "4", "5",]
        }
    },
    {
        docFieldName: DocFieldsDefault.tags,
        elementType: ElementTypes.DropDownStatic,
        ElementSettings: {
            moreWords: true
        }
    },
    {
        docFieldName: DocFieldsDefault.url,
        elementType: ElementTypes.TextArea,
        ElementSettings: {
            resizeType: ResizeTypes.oneLine
        }
    }
]



