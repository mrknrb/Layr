import {Layouts} from "../Elements/Layouts";
import createTypeEnum = chrome.windows.createTypeEnum;
import {StaticLayoutSubTypes} from "./LayoutSubTypes/StaticLayoutSubTypes";
import {AbsoluteLayoutSubTypes} from "./LayoutSubTypes/AbsoluteLayoutSubTypes";

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