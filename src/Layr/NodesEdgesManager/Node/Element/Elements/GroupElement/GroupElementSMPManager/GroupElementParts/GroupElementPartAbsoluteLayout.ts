import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {GroupElement} from "../../GroupElement.js";
import {LayrFind} from "../../../../../../../../0Egyebek/LayrFind.js";
import {NodeLayoutSelectorDataNames} from "../../../../../NodeObject/NodeSMPManager/NodeNormalSMPStatic/NodeNormalSMPStaticData.js";

export class GroupElementPartAbsoluteLayout extends PartBaseElement_Field {


    protected masterObject: GroupElement
    static partName = "GroupElementPartAbsoluteLayout"

    constructor(masterObject: GroupElement) {
        super(masterObject);
    }

    activate() {
        this.loadData()
        setTimeout(() => {
            let childNodes = LayrFind.nodes_ByParentNodeId(this.masterObject.nodeObject.nodeId)
            childNodes.forEach(node => {
                node.smpManager.smpController.changeSelectorState({
                    selectorName: NodeLayoutSelectorDataNames.selector,
                    stateName: NodeLayoutSelectorDataNames.states.Absolute
                })
            })
        }, 200)


    }

    loadData() {


    }


    saveValue() {
    }

    deactivate() {
    }
}
