import {ElementBaseClass} from "../../ElementBaseClass";
import {NodeData} from "../../../NodeDocData/NodeData/NodeData";
import {NodeDivAllData} from "../../../NodeDivAllData";
import {ElementTypes} from "../../ElementTypes";
import {GroupElement} from "../GroupElement/GroupElement";

export class DropDownStaticElement extends ElementBaseClass{

    element: any
    nodeData: NodeData

    constructor(nodeDivAllData: NodeDivAllData) {
        super(ElementTypes.DropDownStatic);
        this.nodeData = nodeDivAllData.nodeDocData.nodeData



    }

    deleteData() {



    }
    _createRang(rangdata) {
//alapnak
        if (!this.elements.rang) {
            this.elements.rang = document.createElement("select")
            let ures = document.createElement("option")
            ures.value = ""

            ures.setAttribute("selected", "selected")
            for (let i = 1; i < 6; i++) {
                let szam = document.createElement("option")
                szam.value = i.toString()
                szam.innerText = i.toString()
                if (i == rangdata) {
                    szam.setAttribute("selected", "selected")

                    ures.removeAttribute("selected")
                }
                this.elements.rang.appendChild(szam)
            }


            this.elements.rang.appendChild(ures)
            this.elements.detailsdiv.appendChild(this.elements.rang)
        }


    }





}