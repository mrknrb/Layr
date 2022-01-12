import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {layrFrame} from "../../../../../../../LayrFrame.js";
import {ElementObject} from "../../../../ElementObject.js";

export class GroupElementNodesLoader extends PartBaseElement_Field {
    static partName = "GroupElementNodesLoader"

    constructor(masterObject: ElementObject) {
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
