import {NodeObjectNormal} from "../../NodeObjectNormal.js";
import {MrkLibrary, ResizeType} from "../../../../../../0Egyebek/MrkLibrary.js";
import {PartBaseNodeCData_Conn} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNodeCData_Conn.js";

export class NodeLayoutListPart extends PartBaseNodeCData_Conn {
    masterObject: NodeObjectNormal

    static partName = "NodeLayoutListPart"

    constructor(masterObject: NodeObjectNormal) {
        super(masterObject);
    }

    activate() {
        let style = this.masterObject.mainElement.element.style
        style.position = "absolute"


        this.loadData()
        let megmozdultEvent = MrkLibrary.dragElement(this.masterObject.mainElement.elementOptionsButton, this.masterObject.mainElement.element, false, 25)
        megmozdultEvent.on(() => {
                this.saveValue()
            }
        )
        let resizeEvent = MrkLibrary.resizeElement(this.masterObject.mainElement.element, 4, ResizeType.horizontal, 25)
        resizeEvent.on(() => {
                this.saveValue()
            }
        )

    }


    loadData() {
        let style = this.masterObject.mainElement.element.style
        let absoluteLayoutData: absoluteLayoutInterface = this.getPartData().data

        absoluteLayoutData.left ? style.left = absoluteLayoutData.left /*+ "px"*/ : style.left = "0px"
        absoluteLayoutData.top ? style.top = absoluteLayoutData.top /*+ "px"*/ : style.top = "0px"
        // absoluteLayoutData.height? style.height = absoluteLayoutData.height /*+ "px"*/:style.height ="20px"
        absoluteLayoutData.width ? style.width = absoluteLayoutData.width /*+ "px"*/ : style.width = "80px"

    }


    saveValue() {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getMasterDataObject().connData.nodeGroupData.nodeStyleData.nodeStyleLayoutsData.absolute
        absoluteData.left = style.left
        absoluteData.top = style.top
        this.valueSync()

    }

    deactivate() {

        MrkLibrary.dragElement(this.masterObject.mainElement.elementOptionsButton, this.masterObject.mainElement.element, true)


    }

    partName: string;
}