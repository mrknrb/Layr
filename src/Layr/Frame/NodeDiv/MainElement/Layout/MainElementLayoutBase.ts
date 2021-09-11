import {Layouts} from "../../../Layouts/Layouts.js";
import {MainElementBase} from "../MainElementBase.js";

export abstract class MainElementLayoutBase {
	mainElem: MainElementBase

	constructor(mainElem: MainElementBase) {
		this.mainElem = mainElem
	}

	abstract layoutApply()
	protected layoutClean() {
		this.mainElem.element.removeAttribute("style")
	}

	protected layoutDefault() {
		this.mainElem.element.style.cssText += `
                border-style: solid;
                resize: horizontal;
                background-color: antiquewhite;
                min-width: 40px;
                min-height: 20px;              
                height: fit-content;
                z-index:2100000000 ;
                width:40px;
                `
	}
}