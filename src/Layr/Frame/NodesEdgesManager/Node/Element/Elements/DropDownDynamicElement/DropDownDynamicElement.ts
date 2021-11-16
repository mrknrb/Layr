import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";

export class DropDownDynamicElement extends ElementBaseClass {

    constructor(nodeObject: NodeObjectInterface, elementData) {
        super(ElementTypes.DropDownDynamic, nodeObject, elementData);
    }


    elementsRefresh() {
    }

    deleteElement() {
    }

    protected elementInit() {
    }

}