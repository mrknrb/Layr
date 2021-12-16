
import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {GroupElement} from "../../GroupElement.js";
import {layrFrame, LayrFrame} from "../../../../../../../LayrFrame.js";

export class GroupElementNodesLoader extends PartBaseElement_Field {


    protected masterObject: GroupElement
    static partName = "GroupElementNodesLoader"

    constructor(masterObject: GroupElement) {
        super(masterObject);
    }

    activate() {

        this.loadData()





    }

    loadData() {
       // this.masterObject.element = this.getPartData().data

        layrFrame.nodesEdgesManager.loadNormalNodesOfGroupNode(this.masterObject.nodeObject)



    }


    saveValue() {
       // this.saveValueDefault("")
       // this.valueSync()
    }

    deactivate() {
        //this.masterObject.element.value=""
    }
}
