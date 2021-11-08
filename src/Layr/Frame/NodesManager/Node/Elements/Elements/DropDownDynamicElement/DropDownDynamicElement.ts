import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";

export class DropDownDynamicElement extends ElementBaseClass{

    constructor(nodeDiv:NodeObjectInterface, elementData, elementSettings) {
        super(ElementTypes.DropDownDynamic,nodeDiv,elementData,elementSettings);


    }



    refreshData() {
    }

    deleteElement() {
    }

    protected elementInit() {
    }

}