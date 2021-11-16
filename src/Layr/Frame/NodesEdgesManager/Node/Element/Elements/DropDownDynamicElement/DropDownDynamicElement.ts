import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeObjectBase} from "../../../NodeObject/NodeObjectBase.js";

export class DropDownDynamicElement extends ElementBaseClass {

    constructor(nodeObject: NodeObjectBase, elementData) {
        super(ElementTypes.DropDownDynamic, nodeObject, elementData);
    }


    elementsRefresh() {
    }

    deleteElement() {
    }

    protected elementInit() {
    }

}