import {ResizeTypes} from "../../ElementResizer/ResizeTypes.js";
import {ElementStyleBase} from "../../../../../../Background/Data/Connection/NodeStyleData/ElementStyleBase.js";

export class GroupElementStyle extends ElementStyleBase {
    autoLoad: boolean
    resizeType: ResizeTypes
    height: string
    width: string
}