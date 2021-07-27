export class DetailsGroup{
    static _detailsRefresh(NodeDivMain) {

        if (!NodeDivMain.elements.detailsdiv) {
            NodeDivMain.elements.detailsdiv = document.createElement("div")
            NodeDivMain.elements.body.appendChild(NodeDivMain.elements.detailsdiv)
            NodeDivMain._createInsertTopButtonHider("D", NodeDivMain.elements.detailsdiv)
        }
        let rang = null
        NodeDivMain.data.docData ? rang = NodeDivMain.data.docData.rang :
            NodeDivMain._createRang(rang)
        let nodeid = null
        NodeDivMain.data.nodeData ? nodeid = NodeDivMain.data.nodeData.nodeid : null
        NodeDivMain._createTextInput("nodeid", nodeid, "nodeid")
        let docid = null
        NodeDivMain.data.docData ? docid = NodeDivMain.data.docData.docid : null
        NodeDivMain._createTextInput("docid", docid, "docid")
        let nodeDivid = null
        NodeDivMain.data.nodeDivid ? nodeDivid = NodeDivMain.data.nodeDivid : null
        NodeDivMain._createTextInput("nodeDivid", nodeDivid, "nodeDivid")


        NodeDivMain.elements.detailsdiv.removeAttribute("style")

        if (NodeDivMain.root) {

            NodeDivMain.elements.detailsdiv.style.width = "100%"
            NodeDivMain.elements.detailsdiv.style.height = "20px"
            NodeDivMain.elements.detailsdiv.style.display = "none"

        } else if (NodeDivMain.data.nodeData.positionType === "absolute") {

            NodeDivMain.elements.detailsdiv.style.width = "100%"
            NodeDivMain.elements.detailsdiv.style.height = "20px"
            NodeDivMain.elements.detailsdiv.style.display = "none"

        }


    }


}