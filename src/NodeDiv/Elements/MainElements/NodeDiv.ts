import {KeretElem} from "./KeretElem";
import {DetailsGroup} from "../DataElements/DetailsGroup";
import {MetaDataGroup} from "../DataElements/MetaDataGroup";
import {GroupElem} from "../DataElements/GroupElem";

export class NodeDiv {
    conceptMapObject
    data
    elements
    root

    parentnodeGroup

    constructor(conceptMapObject, nodeDivData) {
        this.conceptMapObject = conceptMapObject
        this.data = {}
        this.data.nodeDivid = Math.random() * 1000000
        this.elements = {}
        if (nodeDivData) {
            this.newData(nodeDivData)
        }
    }

    newData(nodeDivData) {
        if (nodeDivData.root) {
            this.root = nodeDivData.root
        }
        if (nodeDivData.parentNode) {
            this.data.parentNodeDivid = nodeDivData.parentNode.data.nodeDivid
            //  rootnal nem jo
            // this.data.parentNodeid = nodeDivData.parentNode.data.nodeData.nodeid
            this.data.parentdocURL = nodeDivData.parentNode.data.docData.URL
            this.parentnodeGroup = nodeDivData.parentNode.elements.group
        }
        if (nodeDivData.nodeData) {
            this.data.nodeData = nodeDivData.nodeData
        }
        if (nodeDivData.docData) {
            this.data.docData = nodeDivData.docData
            if (this.data.docData.nodes) {
                delete this.data.docData.nodes
            }
            if (this.data.docData.localDocs) {
                delete this.data.docData.localDocs
            }
        }
        this.nodeDivElementsLoader()
    }

    nodeDivElementsLoader() {

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