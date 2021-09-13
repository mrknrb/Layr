import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {GroupElementSettings} from "./GroupElementSettings.js";
import {GroupElementData} from "./GroupElementData.js";
import {LayrBackground} from "../../../../../Background/LayrBackground.js";
import {NodeDivNormal} from "../../../NodeDivObject/NodeDivNormal.js";
import {DocURLObject} from "../../../../../Background/Arangodb/ArangoAdatok/DocURLObject.js";
import {DocDataObject} from "../../../../../Background/Data/DocData/DocDataObject.js";
import {NodeDivInterface} from "../../../NodeDivObject/NodeDivInterface.js";
import {MrkLibrary} from "../../../../../../MrkLibrary.js";
import {DocFieldObject} from "../../../../../Background/Data/DocData/DocFieldObject.js";


export class GroupElement extends ElementBaseClass {
    element: HTMLDivElement
    elementResizer: ElementResizer
    elementSettings: GroupElementSettings
    docFieldObject:DocFieldObject
    groupElementData:GroupElementData
    layrBackground: LayrBackground
    nodeDivs: Map<string, NodeDivNormal>

    constructor(nodeDiv: NodeDivInterface, elementData, elementSettings) {
        super(ElementTypes.Group, nodeDiv, elementData, elementSettings);
        this.nodeDivs = new Map<string, NodeDivNormal>()
        let bkg = chrome.extension.getBackgroundPage()
        // @ts-ignore
        this.layrBackground = bkg.layr
        this.groupElementData=this.docFieldObject.docFieldData.data
        //this.elementResizer = new ElementResizer(this)
        //this.elementResizer.resizeActivate(ResizeTypes.autoXY)
        this.elementInit()
    }

    protected elementInit() {

        let self = this
        this.element = document.createElement("div")
        this.element.style.border = `black`
        this.element.style.width = "calc(100% - 5px)"
        this.element.style.height = "50px"
        this.element.style.backgroundColor = "cadetBlue"
        this.element.style.overflow = "auto"
        this.element.style.position = "relative"
        this.element.style.resize = "vertical"
        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        MrkLibrary.grabInit(this.element)
        this.nodeDiv.mainElement.element.appendChild(this.element)
        this.refreshData()
    }


    refreshData() {

        let self = this
        this.nodeDivs.forEach(function (nodeDiv) {
            nodeDiv.removeNodeDiv()
        })
        this.nodeDivs = new Map<string, NodeDivNormal>()

        this.groupElementData.nodes.forEach(function (node) {
            let docUrlObject = new DocURLObject(self.nodeDiv.hivatkozottDocDataObject.docAbsoluteURL, node.docRelativeURL)
            self.layrBackground.docsManager.docGetOrDownload(docUrlObject.UrlString, function (docResponse: DocDataObject) {
                //   console.log(docResponse)

                let nodeDiv: NodeDivNormal = new NodeDivNormal(self, node, docResponse)
                self.nodeDivs.set(docResponse.docAbsoluteURL, nodeDiv)

            })

        })

    }

    deleteElement() {


    }


}