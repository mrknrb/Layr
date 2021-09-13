import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivInterface} from "../../../NodeDivObject/NodeDivInterface.js";


export class DropDownStaticElement extends ElementBaseClass {

	options: HTMLOptionElement[]

	constructor(nodeDiv: NodeDivInterface, elementData, elementSettings) {
		super(ElementTypes.DropDownStatic, nodeDiv, elementData, elementSettings);
		this.options = []
		this.elementInit()
		this.nodeDiv.mainElement.element.appendChild(this.element)
	}


	protected elementInit() {
		this.element = document.createElement("select")

		this.dataRefresh()

	}

	dataRefresh() {
		let self=this
		this.options.forEach(function (option) {
			option.remove()
		})
		this.options = []

		let ures = document.createElement("option")
		ures.value = ""
		ures.setAttribute("selected", "selected")
		this.element.appendChild(ures)
		let talalat:boolean=false
		this.elementSettings.options.forEach(function (optionValue) {
			let optionElement = document.createElement("option")
			optionElement.value = optionValue
			optionElement.innerText = optionValue
			if (optionValue == self.docFieldObject.docFieldData.data.content) {

				talalat=true
				optionElement.setAttribute("selected", "selected")

				ures.removeAttribute("selected")
			}
			self.element.appendChild(optionElement)
		})
		//Ha nincs kozte a value rakja be
		if(!talalat){
			let optionElement = document.createElement("option")
			optionElement.value = self.docFieldObject.docFieldData.data.content
			optionElement.innerText = self.docFieldObject.docFieldData.data.content
			optionElement.setAttribute("selected", "selected")
			ures.removeAttribute("selected")
			self.element.appendChild(optionElement)
		}

	}


	refreshData() {
	}

	deleteElement() {
	}


}