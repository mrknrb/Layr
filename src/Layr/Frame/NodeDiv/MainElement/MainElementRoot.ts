import {MainElementBase} from "./MainElementBase.js";
import {MainElementLayoutBase} from "./Layout/MainElementLayoutBase.js";
import {NodeDivBase} from "../NodeDiv/NodeDivBase.js";
import {NodeDivNormal} from "../NodeDiv/NodeDivNormal.js";
import {NodeDivRoot} from "../NodeDiv/NodeDivRoot.js";
import {MainElementLayoutRoot} from "./Layout/MainElementLayoutRoot.js";

export class MainElementRoot extends MainElementBase{
	constructor(nodeDiv: NodeDivRoot) {
		super(nodeDiv);
		this.mainElementLayout = new MainElementLayoutRoot(this)
	}
}