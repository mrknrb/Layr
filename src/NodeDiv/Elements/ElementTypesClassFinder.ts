import {ElementTypes} from "./ElementTypes";
import {ElementBaseClass} from "./ElementBaseClass";
import {DropDownDynamicElement} from "./Elements/DropDownDynamicElement";
import {TextOneLineElement} from "./Elements/TextOneLineElement";
import {TextAreaElement} from "./Elements/TextAreaElement";
import {GroupElement} from "./Elements/GroupElement";
import {AppElement} from "./Elements/AppElement";
import {DropDownStaticElement} from "./Elements/DropDownStaticElement";

export abstract class ElementTypesClassFinder {

    static find(elemType: ElementTypes): ElementBaseClass {

        if (elemType == ElementTypes.TextOneLine) {
            return new TextOneLineElement()
        } else if (elemType == ElementTypes.TextArea) {
            return new TextAreaElement()
        } else if (elemType == ElementTypes.DropDownDynamic) {
            return new DropDownDynamicElement()
        } else if (elemType == ElementTypes.DropDownStatic) {
            return new DropDownStaticElement()
        }else if (elemType == ElementTypes.Group) {
            return new GroupElement()
        }else if (elemType == ElementTypes.App) {
            return new AppElement()
        }

    }


}