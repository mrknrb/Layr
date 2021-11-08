import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {GroupElementStyle} from "./GroupElementStyle.js";
import {GroupData} from "./GroupData.js";
import {LayrBackground} from "../../../../../../Background/LayrBackground.js";
import {NodeObjectNormal} from "../../../NodeObject/NodeObjectNormal.js";
import {DocObject} from "../../../../../../Background/Data/Doc/Doc/DocObject.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";
import {MrkLibrary} from "../../../../../../Global/MrkLibrary.js";
import {FieldObject} from "../../../../../../Background/Data/Doc/Field/FieldObject.js";
import {layrBackgroundF} from "../../../../../MainFrame.js";


export class GroupElement extends ElementBaseClass {
    element: HTMLDivElement
    elementResizer: ElementResizer
    elementStyle: GroupElementStyle
    fieldObject:FieldObject
    groupElementData:GroupData
    nodes: Map<string, NodeObjectNormal>

    constructor(nodeDiv: NodeObjectInterface, elementData, elementSettings) {
        super(ElementTypes.Group, nodeDiv, elementData, elementSettings);
        this.nodes = new Map<string, NodeObjectNormal>()
        this.groupElementData=this.fieldObject.fieldData.data
        //this.elementResizer = new ElementResizer(this)
        //this.elementResizer.resizeActivate(ResizeTypes.autoXY)
        this.elementInit()
    }

    protected elementInit() {

        let self = this
        this.element = document.createElement("div")
        this.element.classList.add("LayrElement")
        this.element.style.border = `black`
        this.element.style.width = "calc(100% - 3px)"//"100%" //addig van ez �gy, am�g a nagyitasnal nem fedi le a mainelementet
        this.element.style.height = "50px"
        this.element.style.backgroundColor = "#90a4ae"
        this.element.style.overflow = "auto"
        this.element.style.position = "relative"
        this.element.style.resize = "vertical"

        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        MrkLibrary.grabInit(this.element)
        this.nodeObject.mainElement.element.appendChild(this.element)
        this.element.addEventListener("contextmenu", function (e) {

            e.stopPropagation()
            e.preventDefault()
            self.refreshData()
            self.element.removeEventListener("contextmenu", function (e) {
                e.preventDefault()
                e.stopPropagation()
            })

        })
    }


    refreshData() {

        let self = this
        this.nodes.forEach(function (nodeDiv) {
            nodeDiv.removeNode()
        })
        this.nodes = new Map<string, NodeObjectNormal>()

        this.groupElementData.nodes.forEach(function (node) {
            let docUrlObject = new DocURLObject(self.nodeObject.hivatkozottDocDataObject.docId, node.docRelativeURL)
            layrBackgroundF.docsConnectionsManager.loadDocs(docUrlObject.UrlString, function (docResponse: DocObject) {
                //   console.log(docResponse)

                let nodeDiv: NodeObjectNormal = new NodeObjectNormal(self, node, docResponse)
                self.nodes.set(docResponse.docId, nodeDiv)

            })

        })


    }

    deleteElement() {


    }


}