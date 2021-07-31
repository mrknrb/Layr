import {KeretElem} from "./Elements/ElementsRegi/KeretElem";
import {DetailsGroup} from "./Elements/ElementsRegi/DetailsGroup";
import {MetaDataGroup} from "./Elements/ElementsRegi/MetaDataGroup";
import {GroupElem} from "./Elements/ElementsRegi/GroupElem";

class NodeDivRegi
{




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
        let self = this as NodeDiv
        // this.elements.keret.remove()

        let o = true
        this.mrkS3.events.onDelete.emit(self)

    }
}