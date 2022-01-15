import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {layrFrame} from "../../../../../../../LayrFrame.js";
import {ElementObject} from "../../../../ElementObject.js";
import {layoutSelectorDataNames} from "../GroupElementStaticData.js";
import {GroupElementMainPart} from "./GroupElementMainPart.js";

export class GroupElementNodesLoader extends PartBaseElement_Field {
    static partName = "GroupElementNodesLoader"

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {

        this.loadData()
        console.log(this)

    }

    async loadData() {
        // this.masterObject.element = this.getPartData().data
        let nodes = await layrFrame.nodesEdgesManager.loadNormalNodesOfGroupNode(this.masterObject.nodeObject)

        let groupMainPart=   this. getPartInMasterobject_byClass(GroupElementMainPart.partName) as GroupElementMainPart
        for await (let value1 of nodes) {

            groupMainPart.groupBodyElement.appendChild(value1.mainElement.element)
        }


    }


    saveValue() {
        // this.saveValueDefault("")
        // this.valueSync()
    }

    deactivate() {
        //this.masterObject.element.value=""
    }
}
