import {NodeData} from "../../../NodeDocData/NodeData/NodeData";
import {NodeDivAllData} from "../../../NodeDivAllData";
import {DataTypeElementTypeData} from "../../DataTypeElementTypeData";
import {ElementBaseClass} from "../../ElementBaseClass";
import {ElementTypes} from "../../ElementTypes";

export class TextAreaElement extends ElementBaseClass{

    element: any
    nodeData: NodeData
    resizeObserver
    resizeAutoON: boolean

    constructor(nodeDivAllData: NodeDivAllData) {
        super(ElementTypes.TextArea);
        this.nodeData = nodeDivAllData.nodeDocData.nodeData

        this.elementInit()


        //a note objectbe es a formazas fajlba rogzithetnem
        if (DataTypeElementTypeData.note.resizeType == "auto")
            this.resizeAuto()
        else
            this.resizeManual()
    }

    private elementInit() {
        let self = this
        this.element = document.createElement("textarea")
        this.element.style.resize = "none"
        this.element.style.backgroundColor = "transparent"
        this.element.style.width = "calc(100% - 5px)"
        this.element.style.height = "50px"
        // @ts-ignore
        this.resizeObserver = new ResizeObserver(function () {
            self.adjustSize()
        }).observe(this.element)
        this.element.addEventListener("keyup", function (e) {
            self.adjustSize()
        })
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })

        this.element.addEventListener("mouseenter", function (e) {

        })
        this.element.addEventListener("mouseleave", function (e) {

        })

    }

    private resizeAuto() {
        this.resizeAutoON = true
        this.element.style.resize = "none"
    }

    private resizeManual() {
        this.resizeAutoON = false
        this.element.style.resize = "vertical"
    }

    private adjustSize() {
        if (this.resizeAutoON) {
            this.element.style.height = "5px"
            this.element.style.height = (this.element.scrollHeight - 3) + "px"
        }
    }

    deleteData() {
    }
}