
import {ElementTypes} from "./ElementTypes.js";
import {FieldsDefault} from "../../../../Background/Data/Doc/Field/FieldsDefault.js";
import {ResizeTypes} from "./ElementResizer/ResizeTypes.js";


export const DocFieldekhezElementStyleDefault = [
    {
        docFieldName: FieldsDefault.note,
        ElementStyle: {resizeType: ResizeTypes.autoY}
    },
    {
        docFieldName: FieldsDefault.title,
        ElementStyle: {
            resizeType: ResizeTypes.oneLine
        }
    },
    {
        docFieldName: FieldsDefault.rank,
        ElementStyle: {
            options: ["1", "2", "3", "4", "5",]
        }
    },
    {
        docFieldName: FieldsDefault.tags,
        ElementStyle: {
            moreWords: true
        }
    },
    {
        docFieldName: FieldsDefault.url,
        ElementStyle: {
            resizeType: ResizeTypes.oneLine
        }
    },
    {
        docFieldName: FieldsDefault.group,
        ElementStyle: {

        }
    }
    ,
    {
        docFieldName: FieldsDefault.browser,
        ElementStyle: {
            autoLoad: false,
            resizeType: ResizeTypes.autoY
        }
    }
]



