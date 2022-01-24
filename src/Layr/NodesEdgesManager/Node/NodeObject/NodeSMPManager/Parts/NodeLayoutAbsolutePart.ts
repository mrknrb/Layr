import {NodeObjectNormal} from "../../NodeObjectNormal.js";
import {MrkLibrary, ResizeType} from "../../../../../../0Egyebek/MrkLibrary.js";
import {PartBaseNodeCData_Conn} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNodeCData_Conn.js";
import {NodeQuickMenuButton} from "../../../MainElement/NodeQuickMenuButton.js";

export class NodeLayoutAbsolutePart extends PartBaseNodeCData_Conn {
    masterObject: NodeObjectNormal
    static partName = "NodeLayoutAbsolutePart"

    quickButton: NodeQuickMenuButton=new NodeQuickMenuButton()
    constructor(masterObject: NodeObjectNormal) {
        super(masterObject);
    }

    activate() {
        this.quickButton.setColor("grey")
        this.masterObject.mainElement.nodeQuickButtonsBar.quickButtonInsert(this.quickButton)



        let style = this.masterObject.mainElement.element.style
        style.position = "absolute"


        this.loadData()
        let megmozdultEvent = MrkLibrary.dragElement(this.quickButton.element, this.masterObject.mainElement.element, false, 23)
        megmozdultEvent.on(() => {
                this.saveValue()
            }
        )
        let resizeEvent = MrkLibrary.resizeElement(this.masterObject.mainElement.element, 4, ResizeType.horizontal, 23)
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

    getSaveValue() {
        let style = this.masterObject.mainElement.element.style
        let saveValue: absoluteLayoutInterface = {
            left: style.left,
            top: style.top,
            //height: style.height,
            width: style.width
        }
        //
        return saveValue
    }

    saveValue() {
        this.saveValueDefault(this.getSaveValue())
        this.valueSync()
    }

    deactivate() {
        MrkLibrary.dragElement(this.quickButton.element, this.masterObject.mainElement.element, true)

        let style = this.masterObject.mainElement.element.style
         style.left = ""
        style.top = ""
        style.position = ""
         style.width = ""
    }


}

interface absoluteLayoutInterface {
    top: string,
    left: string,
    // height: string,
    width: string,

}