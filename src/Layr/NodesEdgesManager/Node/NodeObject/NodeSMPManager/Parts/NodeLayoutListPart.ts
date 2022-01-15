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
        style.position = "block"
        style.width = "100%"


    }


    loadData() {


    }


    saveValue() {


    }

    deactivate() {



    }

}