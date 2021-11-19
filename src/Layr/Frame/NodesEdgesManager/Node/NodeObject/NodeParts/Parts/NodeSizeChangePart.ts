import {PartBaseElementStyle_Conn} from "../../../../PartsGeneral/PartBaseTypes/PartBaseElementStyle_Conn.js";
import {NodeObjectNormal} from "../../NodeObjectNormal.js";
import {MrkLibrary} from "../../../../../../Global/MrkLibrary.js";

export class NodeSizeChangePart extends PartBaseElementStyle_Conn {
    masterObject: NodeObjectNormal

    constructor(masterObject: NodeObjectNormal) {
        super(masterObject);
    }

    activate() {
        this.loadData(true)
        // @ts-ignore
        var ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                const cr = entry.contentRect;
                this.saveValue()
            }
        });

        // Observe one or multiple elements
        ro.observe(this.masterObject.mainElement.element);


    }


    loadData(semmi) {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getDataObject().connectionData.nodeGroupData.nodeStyle.nodeStyleLayoutsData.absolute
        style.width = absoluteData.width
    }


    saveValue() {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getDataObject().connectionData.nodeGroupData.nodeStyle.nodeStyleLayoutsData.absolute
        absoluteData.width = style.width
        //absoluteData.top = style.top

        this.valueSync(true)

    }

    deactivate() {


    }
}