import {DropDownStaticElement} from "./Elements/DropDownStaticElement/DropDownStaticElement.js";
import {ElementTypes} from "./ElementTypes.js";
import {ElementBaseClass} from "./ElementBaseClass.js";
import {GroupElement} from "./Elements/GroupElement/GroupElement.js";
import {TextAreaElement} from "./Elements/TextAreaElement/TextAreaElement.js";
import {AppElement} from "./Elements/AppElement.js";
import {DropDownDynamicElement} from "./Elements/DropDownDynamicElement/DropDownDynamicElement.js";

export abstract class ElementTypesClassFinder {

    static find(elemType: ElementTypes) {
       if (elemType == ElementTypes.TextArea) {
            return  TextAreaElement
        } else if (elemType == ElementTypes.DropDownDynamic) {
            return  DropDownDynamicElement
        } else if (elemType == ElementTypes.DropDownStatic) {
            return  DropDownStaticElement
        }else if (elemType == ElementTypes.Group) {
            return  GroupElement
        }else if (elemType == ElementTypes.App) {
            return  AppElement
        }
    }
}
