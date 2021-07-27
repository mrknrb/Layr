import {TextAreaElem} from "./TextAreaElem";

export class MetaDataGroup{


   static _metaDataRefresh(NodeDivMain) {
        //-------------------------------------------------------------------------------------metadata
        let self = NodeDivMain
        NodeDivMain.elements.metaDataDiv = document.createElement("div")
        NodeDivMain.elements.metaDataDiv.style.width = "100%"
        let metaDataButton = NodeDivMain._createTopButton("M")
        metaDataButton.addEventListener("click", function (e) {
            if (self.elements.metaDataDiv.style.display == "block") {
                self.elements.metaDataDiv.style.display = "none"
            } else {
                self.elements.metaDataDiv.style.display = "block"
            }
        })
        NodeDivMain.elements.metaDataDiv.style.height = "fit-content"
        NodeDivMain.elements.metaDataDiv.style.display = "block"
        NodeDivMain.elements.body.appendChild(NodeDivMain.elements.metaDataDiv)
        let title = null
        NodeDivMain.data.docData ? title = NodeDivMain.data.docData.title : null
        TextAreaElem._createTextArea(NodeDivMain,"T", "title", title)

        let note = null
        NodeDivMain.data.docData ? note = NodeDivMain.data.docData.note : null
       TextAreaElem._createTextArea(NodeDivMain,"N", "note", note)

    }


}