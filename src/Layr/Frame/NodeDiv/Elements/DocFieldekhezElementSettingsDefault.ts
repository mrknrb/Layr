
import {ElementTypes} from "./ElementTypes.js";
import {DocFieldsDefault} from "../../../Background/Data/DocData/DocFieldsDefault.js";
import {ResizeTypes} from "./ElementResizer/ResizeTypes.js";


export const DocFieldekhezElementSettingsDefault = [
    {
        docFieldName: DocFieldsDefault.note,
        ElementSettings: {resizeType: ResizeTypes.autoY}
    },
    {
        docFieldName: DocFieldsDefault.title,
        ElementSettings: {
            resizeType: ResizeTypes.oneLine
        }
    },
    {
        docFieldName: DocFieldsDefault.rank,
        ElementSettings: {
            options: ["1", "2", "3", "4", "5",]
        }
    },
    {
        docFieldName: DocFieldsDefault.tags,
        ElementSettings: {
            moreWords: true
        }
    },
    {
        docFieldName: DocFieldsDefault.url,
        ElementSettings: {
            resizeType: ResizeTypes.oneLine
        }
    },
    {
        docFieldName: DocFieldsDefault.group,
        ElementSettings: {

        }
    }
    ,
    {
        docFieldName: DocFieldsDefault.app,
        ElementSettings: {
            autoLoad: false,
            resizeType: ResizeTypes.autoY
        }
    }
]



