import {PartBaseElementStyle_Conn} from "../../../PartsGeneral/PartBaseTypes/PartBaseElementStyle_Conn.js";
import {NodeObjectNormal} from "../NodeObjectNormal.js";
import {MrkLibrary} from "../../../../../Global/MrkLibrary.js";

export class NodeAbsolutePositionChangePart extends PartBaseElementStyle_Conn {
    masterObject: NodeObjectNormal

    constructor(masterObject: NodeObjectNormal) {
        super(masterObject);
    }

    protected partInit() {
        this.loadData()
        let megmozdultEvent = MrkLibrary.dragElement(this.masterObject.mainElement.elementOptionsButton, this.masterObject.mainElement.element, false)
        megmozdultEvent.on(() => {
                this.saveValue()

            }
        )
    }


    loadData() {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getDataObject().connectionData.nodeGroupData.nodeStyle.nodeStyleLayoutsData.absolute
        style.left = absoluteData.left
        style.top = absoluteData.top
    }


    saveValue() {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getDataObject().connectionData.nodeGroupData.nodeStyle.nodeStyleLayoutsData.absolute
        absoluteData.left = style.left
        absoluteData.top = style.top

        this.valueSync()

    }

    partRemove() {

        MrkLibrary.dragElement(this.masterObject.mainElement.elementOptionsButton, this.masterObject.mainElement.element, true)


    }
}