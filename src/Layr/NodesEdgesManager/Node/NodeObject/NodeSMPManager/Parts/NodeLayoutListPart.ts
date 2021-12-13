import {NodeObjectNormal} from "../../NodeObjectNormal.js";
import {MrkLibrary} from "../../../../../../0Egyebek/MrkLibrary.js";
import {PartBaseNodeCData_Conn} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNodeCData_Conn.js";

export class NodeLayoutListPart extends PartBaseNodeCData_Conn {
    masterObject: NodeObjectNormal

    static partName="NodeLayoutListPart"
    constructor(masterObject: NodeObjectNormal) {
        super(masterObject);
    }

    activate() {
        this.loadData()
        let megmozdultEvent = MrkLibrary.dragElement(this.masterObject.mainElement.elementOptionsButton, this.masterObject.mainElement.element, false)
        megmozdultEvent.on(() => {
                this.saveValue()

            }
        )
    }


    loadData() {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getMasterDataObject().connData.nodeGroupData.nodeStyleData.nodeStyleLayoutsData.absolute
        style.left = absoluteData.left
        style.top = absoluteData.top
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