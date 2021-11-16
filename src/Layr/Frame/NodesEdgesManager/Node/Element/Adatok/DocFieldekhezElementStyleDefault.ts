import {FieldsDefault} from "../../../../../Background/Data/Doc/Field/FieldsDefault.js";
import {ResizeTypes} from "../ElementResizer/ResizeTypes.js";
import {FieldhezElementStyle} from "../../../../../Background/Data/Connection/NodeStyleData/FieldhezElementStyle.js";
import {TextAreaElementStyle} from "../Elements/TextAreaElement/TextAreaElementStyle.js";
import {DropDownStaticElementStyle} from "../Elements/DropDownStaticElement/DropDownStaticElementStyle.js";
import {DropDownDynamicElementStyle} from "../Elements/DropDownDynamicElement/DropDownDynamicElementStyle.js";
import {GroupElementStyle} from "../Elements/GroupElement/GroupElementStyle.js";

const DocFieldekhezElementStyleDefault: FieldhezElementStyle[] = [];

;(function () {
    let a = new FieldhezElementStyle()
    a.docFieldName = FieldsDefault.note
    let b = new TextAreaElementStyle()
    b.resizeType = ResizeTypes.autoY
    a.elementStyle = b
    DocFieldekhezElementStyleDefault.push(a)
})();
(function () {
    let a = new FieldhezElementStyle()
    a.docFieldName = FieldsDefault.title
    let b = new TextAreaElementStyle()
    b.resizeType = ResizeTypes.oneLine
    a.elementStyle = b
    DocFieldekhezElementStyleDefault.push(a)
})();
(function () {
    let a = new FieldhezElementStyle()
    a.docFieldName = FieldsDefault.rank
    let b = new DropDownStaticElementStyle()
    b.options = ["1", "2", "3", "4", "5",]
    a.elementStyle = b
    DocFieldekhezElementStyleDefault.push(a)
})();
(function () {
    let a = new FieldhezElementStyle()
    a.docFieldName = FieldsDefault.tags
    let b = new DropDownDynamicElementStyle()
    b.moreWords = true
    a.elementStyle = b
    DocFieldekhezElementStyleDefault.push(a)
})();
(function () {
    let a = new FieldhezElementStyle()
    a.docFieldName = FieldsDefault.group
    let b = new GroupElementStyle()
    b.autoLoad = false
    a.elementStyle = b
    DocFieldekhezElementStyleDefault.push(a)
})();
(function () {
    let a = new FieldhezElementStyle()
    a.docFieldName = FieldsDefault.browser
    let b = new DropDownDynamicElementStyle()//ez nem jo
    a.elementStyle = b
    DocFieldekhezElementStyleDefault.push(a)
})();


export {DocFieldekhezElementStyleDefault}




















