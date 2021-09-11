import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {NodeDivBase} from "../../../NodeDiv/NodeDivBase.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {GroupElementSettings} from "./GroupElementSettings.js";
import {GroupElementData} from "./GroupElementData.js";
import {LayrBackground} from "../../../../../Background/LayrBackground.js";
import {NodeDivNormal} from "../../../NodeDiv/NodeDivNormal.js";
import {DocURLObject} from "../../../../../Background/Arangodb/ArangoAdatok/DocURLObject.js";
import {DocDataObject} from "../../../../../Background/Data/DocData/DocDataObject.js";


export class GroupElement extends ElementBaseClass {
    element: HTMLDivElement
    elementResizer: ElementResizer
    elementSettings: GroupElementSettings
    elementData: GroupElementData
    layrBackground: LayrBackground
    nodeDivs: Map<string, NodeDivNormal>

    constructor(nodeDiv: NodeDivBase, elementData, elementSettings) {
        super(ElementTypes.Group, nodeDiv, elementData, elementSettings);
        this.elementInit()
        this.nodeDivs = new Map<string, NodeDivBase>()
        let bkg = chrome.extension.getBackgroundPage()
        // @ts-ignore
        this.layrBackground = bkg.layr
        //this.elementResizer = new ElementResizer(this)
        //this.elementResizer.resizeActivate(ResizeTypes.autoXY)
    }

    protected elementInit() {
        let self = this
        this.element = document.createElement("div")
        this.element.style.border = `black`
        this.element.style.width = "calc(100% - 5px)"
        this.element.style.height = "50px"

        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        this.nodeDiv.mainElement.element.appendChild(this.element)
        this.refreshData()
    }


    refreshData() {
        let self=this
        this.nodeDivs.forEach(function (nodeDiv) {
            nodeDiv.removeNodeDiv()
        })
        this.nodeDivs = new Map<string, NodeDivNormal>()
        this.elementData.nodes.forEach(function (node) {
let docUrlObject=new DocURLObject(self.nodeDiv.nodeDivData.hivatkozottDocDataObject.docAbsoluteURL,node.docRelativeURL)
            self.layrBackground.docsManager.docGetOrDownload(docUrlObject.UrlString,function (docResponse:DocDataObject) {
let nodeDiv:NodeDivNormal=new NodeDivNormal(self.nodeDiv.nodeDivData.hivatkozottDocDataObject,self,node,docResponse,self.nodeDiv)
                self.nodeDivs.set(docResponse.docAbsoluteURL,nodeDiv)
            })

        })

    }

    deleteElement() {


    }


}