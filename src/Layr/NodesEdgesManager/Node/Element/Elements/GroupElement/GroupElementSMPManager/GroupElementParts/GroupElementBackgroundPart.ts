import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {GroupElement} from "../../GroupElement.js";

export class GroupElementBackgroundPart extends PartBaseElement_Field {


    protected masterObject: GroupElement

    partName: string;


    constructor(elementObject: GroupElement) {
        super(elementObject);
        this.partName="GroupElementBackgroundPart"
    }

    activate() {
        this.loadData()
        this.masterObject.element.addEventListener("keyup", () => {

            this.saveValue()

        })
    }

    loadData() {

        this.masterObject.element.style.backgroundColor = this.getPartData()
    }


    saveValue() {
        this.saveValueDefault(this.masterObject.element.style.backgroundColor)
    }

    deactivate() {
    }


}