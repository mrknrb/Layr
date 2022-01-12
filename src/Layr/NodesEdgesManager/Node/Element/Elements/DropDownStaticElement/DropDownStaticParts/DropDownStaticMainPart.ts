import {PartBaseElement_Field} from "../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../ElementObject.js";

export class DropDownStaticMainPart extends PartBaseElement_Field {

    static partName = "Main"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
    }

    protected elementInit() {


        /*
                let elementStyle = this.getElementCData()

                let self = this
                this.options.forEach(function (option) {
                    option.remove()
                })
                this.options = []

                let ures = document.createElement("option")
                ures.value = ""
                ures.setAttribute("selected", "selected")
                this.element.appendChild(ures)
                let talalat: boolean = false
                elementStyle.options.forEach(function (optionValue) {
                    let optionElement = document.createElement("option")
                    optionElement.value = optionValue
                    optionElement.innerText = optionValue
                    if (optionValue == self.getFieldObject().fieldData.partsData.content) {

                        talalat = true
                        optionElement.setAttribute("selected", "selected")

                        ures.removeAttribute("selected")
                    }
                    self.element.appendChild(optionElement)
                })
                //Ha nincs kozte a value rakja be
                if (!talalat) {
                    let optionElement = document.createElement("option")
                    optionElement.value = self.getFieldObject().fieldData.partsData.content
                    optionElement.innerText = self.getFieldObject().fieldData.partsData.content
                    optionElement.setAttribute("selected", "selected")
                    ures.removeAttribute("selected")
                    self.element.appendChild(optionElement)
                }
        */
    }

    loadData() {


    }


    saveValue() {

    }

    deactivate() {

    }
}
