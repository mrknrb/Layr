import {KeretElem} from "./Elements/ElementsRegi/KeretElem";
import {DetailsGroup} from "./Elements/ElementsRegi/DetailsGroup";
import {MetaDataGroup} from "./Elements/ElementsRegi/MetaDataGroup";
import {GroupElem} from "./Elements/ElementsRegi/GroupElem";
import {MrkS3} from "../MrkS3/MrkS3";
import {NodeDivAllData} from "./NodeDivAllData";
import {ElementBaseClass} from "./Elements/ElementBaseClass";

export class NodeDiv {
    mrkS3: MrkS3
    nodeDivAllData: NodeDivAllData
    elements: Map<string, ElementBaseClass>


    constructor(mrkS3: MrkS3, nodeDivAllData: NodeDivAllData) {
        this.mrkS3 = mrkS3
        this.newAllData(nodeDivAllData)
        this.elements = new Map<string, ElementBaseClass>()
       this. nodeDivElementsLoader()
    }

    private newAllData(nodeDivAllData: NodeDivAllData) {
        if (nodeDivAllData.nodeDivData) {
            this.newNodeDivData(this.nodeDivAllData.nodeDivData)
        } else {
            this.nodeDivAllData.nodeDivData.nodeDivId = (Math.random() * 1000000).toString()
        }
        if (nodeDivAllData.nodeDocData.docData) {
            this.newDocData(this.nodeDivAllData.nodeDocData.docData)
        }
        if (nodeDivAllData.nodeDocData.nodeData) {
            this.newNodeData(this.nodeDivAllData.nodeDocData.nodeData)
        }
    }

    private newNodeDivData(nodeDivData) {
        this.nodeDivAllData.nodeDivData = nodeDivData
        this.nodeDivElementsLoader()
    }

    private newNodeData(nodeData) {
        this.nodeDivAllData.nodeDocData.nodeData = nodeData
    }

    private newDocData(docData) {
        this.nodeDivAllData.nodeDocData.docData = docData

    }

    private nodeDivElementsLoader() {

        KeretElem._keretRefresh(this)
        KeretElem._fogantyuRefresh(this)
        KeretElem._bodyRefresh(this)
        DetailsGroup._detailsRefresh(this)

        MetaDataGroup._metaDataRefresh(this)
        GroupElem._groupRefresh(this)
        GroupElem._groupcontrollerRefresh(this)

    }


    appendNodeDiv(parentnodedividvagyRootelement) {
        this.elements.parentElement = parentnodedividvagyRootelement
        if (parentnodedividvagyRootelement.elements) {
            if (parentnodedividvagyRootelement.elements.group) {

                parentnodedividvagyRootelement.elements.group.appendChild(this.elements.keret)

            } else {
                parentnodedividvagyRootelement.appendChild(this.elements.keret)
            }

        } else {
            parentnodedividvagyRootelement.appendChild(this.elements.keret)
        }
    }

    _createRang(rangdata) {

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

    _createInsertTopButtonHider(name, hideableElement) {
        let topbutton = this._createTopButton(name)
        topbutton.addEventListener("click", function (e) {
            if (hideableElement.style.display == "flex") {
                hideableElement.style.display = "none"
            } else {
                hideableElement.style.display = "flex"
            }
        })
        return topbutton

    }

    _createTopButton(text) {
        let button = document.createElement("button")
        button.style.height = "20px"
        button.style.cssFloat = "left"
        button.style.backgroundColor = "grey"
        button.innerText = text

        this.elements.fogantyu.appendChild(button)
        return button
    }

    _createTextInput(elementName, data, buttonName) {
        if (!this.elements[elementName]) {
            this.elements[elementName] = document.createElement("div")
            this.elements[elementName].style.display = "inline"
            let inputName = document.createElement("a")
            inputName.innerText = buttonName
            this.elements[elementName].textInput = document.createElement("input")
            // textInput.style.height = "20px"
            this.elements[elementName].textInput.style.minWidth = "50px"
            //  textInput.style.width = "20%"


            this.elements[elementName].textInput.style.backgroundColor = "transparent"
            this.elements[elementName].textInput.style.overflow = "hidden"
            this.elements[elementName].textInput.style.border = "0"
            this.elements[elementName].textInput.style.flex = "1 1 auto"
            this.elements[elementName].appendChild(inputName)
            this.elements[elementName].appendChild(this.elements[elementName].textInput)

            this.elements[elementName].addEventListener("keyup", function (e) {
                //ha a data ==null, akkor az azt jelenti, hogy nincs csatolva doc, igy nincs hova elmenteni

            })
            // let inputnameElement = document.createElement("p")
        }
        this.elements[elementName].textInput.value = data

        this.elements.detailsdiv.appendChild(this.elements[elementName])

    }

    nodeDivTorles() {
        this.elements.keret.remove()

    }
}