import {FieldhezElementCData} from "../../../../DocsConnsManager/Data/Conn/NodeCData/FieldhezElementCData.js";
import {ElementObject} from "../ElementObject.js";

export class ElementCDataFinder {

    static findElementCDataByPriority(element: ElementObject): any {
        /*
        if (this.findInGroupConn(element.getFieldObject().fieldData.fieldName)) {
            return this.findInGroupConn(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInGroupData(element.getFieldObject().fieldData.fieldName)) {
            return this.findInGroupData(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInOwnDoc(element.getFieldObject().fieldData.fieldName)) {
            return this.findInOwnDoc(element.getFieldObject().fieldData.fieldName)
        }
        if (this.findInUserCDatas(element.getFieldObject().fieldData.fieldName)) {
            return this.findInUserCDatas(element.getFieldObject().fieldData.fieldName)
        }*/

        /*
        if (this.findInDefaultCDatas(element.getFieldObject().fieldData.fieldName)) {
            return this.findInDefaultCDatas(element.getFieldObject().fieldData.fieldName)
        }
*/

    }

    private static findInGroupConn(fieldName: string) {

        return undefined
    }

    private static findInGroupData(fieldName: string) {

        return undefined
    }

    private static findInOwnDoc(fieldName: string) {

        return undefined
    }

    private static findInUserCDatas(fieldName: string) {
        return undefined
    }

    private static findInDefaultCDatas(fieldName: string) {

        //  return this.findCDataInArrayByFieldName(fieldName, DocFieldekhezElementCDataDefault)
    }

    private static findCDataInArrayByFieldName(fieldName: string, fieldhezElementStyle: FieldhezElementCData[]) {
       // return fieldhezElementStyle.find(fieldHezStyle => fieldHezStyle.docFieldName == fieldName).elementCData
    }

}