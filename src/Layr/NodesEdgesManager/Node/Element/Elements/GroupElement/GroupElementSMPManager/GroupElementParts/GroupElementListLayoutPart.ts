import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";
import {LayrFind} from "../../../../../../../../0Egyebek/LayrFind.js";
import {NodeLayoutSelectorDataNames} from "../../../../../NodeObject/NodeSMPManager/NodeNormalSMPStatic/NodeNormalSMPStaticData.js";

export class GroupElementListLayoutPart extends PartBaseElement_Field {

    static partName = "GroupElementListLayoutPart"

    constructor(masterObject: ElementObject) {
        super(masterObject);

    }

    activate() {
        this.loadData()
        setTimeout(() => {
            let childNodes = LayrFind.nodes_ByParentNodeId(this.masterObject.nodeObject.nodeId)

            childNodes?.forEach(node => {
                node.smpManager.smpController.changeSelectorState({
                    selectorName: NodeLayoutSelectorDataNames.selector,
                    stateName: NodeLayoutSelectorDataNames.states.List
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
