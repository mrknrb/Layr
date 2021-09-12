import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivBase} from "../../../NodeDivObject/NodeDivBase.js";

export class DropDownDynamicElement extends ElementBaseClass{

    constructor(nodeDiv:NodeDivBase, elementData, elementSettings) {
        super(ElementTypes.DropDownDynamic,nodeDiv,elementData,elementSettings);


    }



    refreshData() {
    }

    deleteElement() {
    }

    protected elementInit() {
    }

}