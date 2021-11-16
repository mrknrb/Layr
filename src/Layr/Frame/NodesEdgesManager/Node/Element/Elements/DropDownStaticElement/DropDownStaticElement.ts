import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";
import {DropDownStaticElementStyle} from "./DropDownStaticElementStyle.js";


export class DropDownStaticElement extends ElementBaseClass {

    options: HTMLOptionElement[]

    constructor(nodeObject: NodeObjectInterface, fieldId: string) {
        super(ElementTypes.DropDownStatic, nodeObject, fieldId, document.createElement("select"));
        this.options = []
        this.elementInit()
        this.nodeObject.mainElement.element.appendChild(this.element)
    }

    dataRefresh() {
        let elementStyle = this.getElementStyle() as DropDownStaticElementStyle

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
            if (optionValue == self.getFieldObject().fieldData.data.content) {

                talalat = true
                optionElement.setAttribute("selected", "selected")

                ures.removeAttribute("selected")
            }
            self.element.appendChild(optionElement)
        })
        //Ha nincs kozte a value rakja be
        if (!talalat) {
            let optionElement = document.createElement("option")
            optionElement.value = self.getFieldObject().fieldData.data.content
            optionElement.innerText = self.getFieldObject().fieldData.data.content
            optionElement.setAttribute("selected", "selected")
            ures.removeAttribute("selected")
            self.element.appendChild(optionElement)
        }

    }

    elementChange_fieldDataUpdate_Init() {
        let self = this
        this.element.addEventListener("keyup", function (e) {
            self.textAreaElementData.content = self.element.value
            self.fieldId.fieldEvents.onFieldChange.emit()
        })
    }

    fieldDataChange_ElementUpdate_Init() {
        this.fieldId.fieldEvents.onFieldChange.on(() => this.element.value = this.textAreaElementData.content)
    }

    elementsRefresh() {
    }

    deleteElement() {
    }

    protected elementInit() {
        this.element.classList.add("LayrElement")
        this.dataRefresh()
    }


}