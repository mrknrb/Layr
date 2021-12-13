import {Layouts} from "./Layouts.js";
import {AbsoluteLayoutSubTypes} from "./LayoutSubTypes/AbsoluteLayoutSubTypes.js";
import {StaticLayoutSubTypes} from "./LayoutSubTypes/StaticLayoutSubTypes.js";


export interface LayoutData {
    backGroundColor: string
    layoutType: Layouts
    groupLayoutData: {
        absolute: {
            absoluteType: AbsoluteLayoutSubTypes
        }
        fixed: {}
        static: {
            staticType: StaticLayoutSubTypes
        }
    }

}