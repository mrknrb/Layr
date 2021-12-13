import {DropDownStaticElement} from "../Elements/DropDownStaticElement/DropDownStaticElement.js";
import {GroupElement} from "../Elements/GroupElement/GroupElement.js";
import {TextAreaElement} from "../Elements/TextAreaElement/TextAreaElement.js";
import {BrowserElement} from "../Elements/BrowserElement/BrowserElement.js";
import {DropDownDynamicElement} from "../Elements/DropDownDynamicElement/DropDownDynamicElement.js";

export let ElementTypesClassFinder = {
    TextArea: TextAreaElement,
    DropDownDynamic: DropDownDynamicElement,
    DropDownStatic: DropDownStaticElement,
    Group: GroupElement,
    Browser: BrowserElement
}