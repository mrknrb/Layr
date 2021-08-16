import {MainElementBase} from "./MainElementBase.js";
import {MainElementLayoutBase} from "./Layout/MainElementLayoutBase.js";
import {NodeDivBase} from "../NodeDiv/NodeDivBase.js";
import {NodeDivNormal} from "../NodeDiv/NodeDivNormal.js";
import {MainElementLayoutNormal} from "./Layout/MainElementLayoutNormal.js";

export class MainElementNormal extends MainElementBase{
	constructor(nodeDiv: NodeDivNormal) {
		super(nodeDiv);
		this.mainElementLayout = new MainElementLayoutNormal(this)
	}
}