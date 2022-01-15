import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";

export class TextAreaMainPart extends PartBaseElement_Field {

    static partName = "Main"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
    }

    protected elementInit() {

        this.masterObject.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        //  this.masterObject.nodeObject.mainElement.element.appendChild(this.masterObject.element)

    }

    loadData() {


    }


    saveValue() {

    }

    deactivate() {

    }
}
