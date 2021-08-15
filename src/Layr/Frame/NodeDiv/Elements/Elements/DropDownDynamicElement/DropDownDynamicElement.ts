import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDiv} from "../../../NodeDiv.js";

export class DropDownDynamicElement extends ElementBaseClass{

    constructor(nodeDiv:NodeDiv,elementData,elementSettings) {
        super(ElementTypes.DropDownDynamic,nodeDiv,elementData,elementSettings);


    }



    refreshData() {
    }

    deleteElement() {
    }

}