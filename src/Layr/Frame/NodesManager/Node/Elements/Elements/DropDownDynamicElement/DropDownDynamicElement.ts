import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeInterface} from "../../../NodeObject/NodeInterface.js";

export class DropDownDynamicElement extends ElementBaseClass{

    constructor(nodeDiv:NodeInterface, elementData, elementSettings) {
        super(ElementTypes.DropDownDynamic,nodeDiv,elementData,elementSettings);


    }



    refreshData() {
    }

    deleteElement() {
    }

    protected elementInit() {
    }

}