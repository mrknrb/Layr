import {NodeObjectNormal} from "../../NodeObjectNormal.js";
import {PartBaseNodeCData_Conn} from "../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseNodeCData_Conn.js";

export class NodeSizeChangePart extends PartBaseNodeCData_Conn {
    masterObject: NodeObjectNormal

    static partName = "NodeSizeChangePart"

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
        let absoluteData = this.getMasterDataObject().connData.nodeGroupData.nodeStyleData.nodeStyleLayoutsData.absolute
        style.width = absoluteData.width
    }


    saveValue() {
        let style = this.masterObject.mainElement.element.style
        let absoluteData = this.getMasterDataObject().connData.nodeGroupData.nodeStyleData.nodeStyleLayoutsData.absolute
        absoluteData.width = style.width
        //absoluteData.top = style.top

        this.valueSync(true)

    }

    deactivate() {


    }

    partName: string;
}