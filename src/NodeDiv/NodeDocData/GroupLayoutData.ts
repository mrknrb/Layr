import {Layouts} from "../Elements/Layouts.js";
import {AbsoluteLayoutSubTypes} from "./LayoutSubTypes/AbsoluteLayoutSubTypes.js";
import {StaticLayoutSubTypes} from "./LayoutSubTypes/StaticLayoutSubTypes.js";


export interface GroupLayoutData {
    backGroundColor:string
    layoutType: Layouts
    groupLayoutData: {
        absolute: {
            absoluteType:AbsoluteLayoutSubTypes
        }
        fixed: {}
        static: {
            staticType:StaticLayoutSubTypes
        }
    }

}