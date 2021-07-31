import {ElementTypes} from "./ElementTypes";
import {TextAreaResizeTypes} from "./Elements/TextAreaElement/TextAreaResizeTypes";
import {DocFieldsDefault} from "../NodeDocData/DocData/DocFieldsDefault";


export const DocFieldekhezElementSettingsDefault = [
    {
        docFieldName: DocFieldsDefault.note,
        elementType: ElementTypes.TextArea,
        ElementSettings: {resizeType: TextAreaResizeTypes.auto}
    },
    {
        docFieldName: DocFieldsDefault.title,
        elementType: ElementTypes.TextArea,
        ElementSettings: {
            resizeType: TextAreaResizeTypes.oneLine
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
            resizeType: TextAreaResizeTypes.oneLine
        }
    }
]



