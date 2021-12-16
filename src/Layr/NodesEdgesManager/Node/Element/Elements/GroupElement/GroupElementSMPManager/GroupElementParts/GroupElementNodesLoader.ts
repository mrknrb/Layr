import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {GroupElement} from "../../GroupElement.js";
import {layrFrame} from "../../../../../../../LayrFrame.js";

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
        let nodes = layrFrame.nodesEdgesManager.loadNormalNodesOfGroupNode(this.masterObject.nodeObject)
        nodes.then(value => {
            value.forEach(value1 => {
                this.masterObject.element.appendChild(value1.mainElement.element)
            })

        })
    }


    saveValue() {
        // this.saveValueDefault("")
        // this.valueSync()
    }

    deactivate() {
        //this.masterObject.element.value=""
    }
}
