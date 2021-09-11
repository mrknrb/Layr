import {Layouts} from "../../../Layouts/Layouts.js";
import {MainElementLayoutBase} from "./MainElementLayoutBase.js";


export class MainElementLayoutNormal extends MainElementLayoutBase {

    layoutApply() {
        let nodeData = this.mainElem.nodeDiv.nodeDivData.nodeData
        let layout = this.mainElem.nodeDiv.nodeDivData.nodeData.layout
        this.layoutClean()
        this.layoutDefault()
        let s = this.mainElem.element.style
        let d = nodeData.nodeLayoutsData
        if (layout === Layouts.absolute) {
            s.position = "absolute"
            d.absolute.top ? s.top = d.absolute.top : null
            d.absolute.left ? s.left = d.absolute.left : null
        } else if (layout === Layouts.fixed) {
            s.position = "fixed"
            d.fixed.top ? s.top = d.fixed.top : null
            d.fixed.left ? s.left = d.fixed.left : null
        } else if (layout === Layouts.static) {
            s.position = "static"
        }
        this.mainElem.nodeDiv.nodeDivData.parentElement.element.appendChild(this.mainElem.element)
    }


}
