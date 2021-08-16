import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivBase} from "../../../NodeDiv/NodeDivBase.js";


export class DropDownStaticElement extends ElementBaseClass {

	options: HTMLOptionElement[]

	constructor(nodeDiv: NodeDivBase, elementData, elementSettings) {
		super(ElementTypes.DropDownStatic, nodeDiv, elementData, elementSettings);
		this.options = []
		this.elementInit()
		this.nodeDiv.mainElement.element.appendChild(this.element)
	}


	private elementInit() {
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
			if (optionValue == self.elementData.content) {
				console.log(self.elementData.content)
				talalat=true
				optionElement.setAttribute("selected", "selected")

				ures.removeAttribute("selected")
			}
			self.element.appendChild(optionElement)
		})
		//Ha nincs kozte a value rakja be
		if(!talalat){
			let optionElement = document.createElement("option")
			optionElement.value = self.elementData.content
			optionElement.innerText = self.elementData.content
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