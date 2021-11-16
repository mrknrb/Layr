import {ElementBaseClass} from "../ElementBaseClass.js";
import {DocFieldekhezElementStyleDefault} from "./DocFieldekhezElementStyleDefault.js";
import {FieldhezElementStyle} from "../../../../../Background/Data/Connection/NodeStyleData/FieldhezElementStyle.js";
import {ElementStyleBase} from "../../../../../Background/Data/Connection/NodeStyleData/ElementStyleBase.js";

export class ElementStyleFinder {

    static findElementStyleByPriority(element: ElementBaseClass) :any{

        if (this.findInGroupConnection(element.getFieldObject().fieldData.fieldName)) {
            return this.findInGroupConnection(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInGroupData(element.getFieldObject().fieldData.fieldName)) {
            return this.findInGroupData(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInOwnDoc(element.getFieldObject().fieldData.fieldName)) {
            return this.findInOwnDoc(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInUserStyles(element.getFieldObject().fieldData.fieldName)) {
            return this.findInUserStyles(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInDefaultStyles(element.getFieldObject().fieldData.fieldName)) {
            return this.findInDefaultStyles(element.getFieldObject().fieldData.fieldName)
        }


    }

    private static findInGroupConnection(fieldName: string) {

        return undefined
    }

    private static findInGroupData(fieldName: string) {

        return undefined
    }

    private static findInOwnDoc(fieldName: string) {

        return undefined
    }

    private static findInUserStyles(fieldName: string) {

        return undefined
    }

    private static findInDefaultStyles(fieldName: string) {

        return this.findStyleInArrayByFieldName(fieldName, DocFieldekhezElementStyleDefault)
    }

    private static findStyleInArrayByFieldName(fieldName: string, fieldhezElementStyle: FieldhezElementStyle[]) {
        return fieldhezElementStyle.find(fieldHezStyle => fieldHezStyle.docFieldName == fieldName).elementStyle
    }

}