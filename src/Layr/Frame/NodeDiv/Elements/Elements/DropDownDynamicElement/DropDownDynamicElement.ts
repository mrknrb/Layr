import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivInterface} from "../../../NodeDivObject/NodeDivInterface.js";

export class DropDownDynamicElement extends ElementBaseClass{

    constructor(nodeDiv:NodeDivInterface, elementData, elementSettings) {
        super(ElementTypes.DropDownDynamic,nodeDiv,elementData,elementSettings);


    }



    refreshData() {
    }

    deleteElement() {
    }

    protected elementInit() {
    }

}