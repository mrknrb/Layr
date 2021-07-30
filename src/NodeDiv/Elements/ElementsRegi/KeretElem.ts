export class KeretElem {



   static _keretRefresh(NodeDivMain) {
        let init = !NodeDivMain.elements.keret
        if (init) {
            NodeDivMain.elements.keret = document.createElement("div")
            NodeDivMain.elements.keret.setAttribute("class", "NodeDivMrkS")
            NodeDivMain.elements.keret.addEventListener("mousedown", function (e) {
                e.stopPropagation()
            })
        }
        NodeDivMain.elements.keret.removeAttribute("style")
        NodeDivMain.elements.keret.style.minWidth = "100px"
        NodeDivMain.elements.keret.style.minHeight = "40px"
        NodeDivMain.elements.keret.style.backgroundColor = "transparent"
        NodeDivMain.elements.keret.style.overflow = "hidden"
        if (NodeDivMain.root) {
            NodeDivMain.elements.keret.style.position = "relative"
            NodeDivMain.elements.keret.style.width = "100%"
            NodeDivMain.elements.keret.style.height = "6ch"
            NodeDivMain.elements.keret.style.display = "flex"
            NodeDivMain.elements.keret.style.flexFlow = "column"
            if (init) {
                document.body.appendChild(NodeDivMain.elements.keret)
                NodeDivMain.elements.keret.className = "NodeDivMrkS"
            }
        } else if (!NodeDivMain.data.nodeData) {
            NodeDivMain.elements.keret.style.height = "fit-content"
            NodeDivMain.elements.keret.style.position = "absolute"
            NodeDivMain.elements.keret.style.width = "100px"
            NodeDivMain.elements.keret.style.height = "50px"
            NodeDivMain.elements.keret.style.top = "300px"
            NodeDivMain.elements.keret.style.left = "300px"
            NodeDivMain.elements.keret.style.resize = "horizontal"
            NodeDivMain.elements.keret.style.display = "flex"
            NodeDivMain.elements.keret.style.flexFlow = "column"
            NodeDivMain.elements.keret.style.zIndex = "2100000000"
            if (init) {
                NodeDivMain.parentnodeGroup.appendChild(NodeDivMain.elements.keret)
            }
        } else if (NodeDivMain.data.nodeData.positionType === "absolute") {
            NodeDivMain.elements.keret.style.height = "fit-content"
            NodeDivMain.elements.keret.style.position = "absolute"
            NodeDivMain.elements.keret.style.width = NodeDivMain.data.nodeData.positionData.absolute.width
            NodeDivMain.elements.keret.style.height = NodeDivMain.data.nodeData.positionData.absolute.height

            NodeDivMain.elements.keret.style.top = NodeDivMain.data.nodeData.positionData.absolute.top
            NodeDivMain.elements.keret.style.left = NodeDivMain.data.nodeData.positionData.absolute.left
            NodeDivMain.elements.keret.style.resize = "horizontal"
            NodeDivMain.elements.keret.style.display = "flex"
            NodeDivMain.elements.keret.style.flexFlow = "column"
            NodeDivMain.elements.keret.style.zIndex = "2100000000"
            if (init) {
                NodeDivMain.parentnodeGroup.appendChild(NodeDivMain.elements.keret)
            }
        }
    }

    static _fogantyuRefresh(NodeDivMain) {
        let init = !NodeDivMain.elements.fogantyu
        if (init) {
            NodeDivMain.elements.fogantyu = document.createElement("div")
        }
        NodeDivMain.elements.fogantyu.removeAttribute("style")
        NodeDivMain.elements.fogantyu.style.backgroundColor = "purple"
        NodeDivMain.elements.fogantyu.style.height = "20px"
        NodeDivMain.elements.fogantyu.style.width = "100%"
        NodeDivMain.elements.fogantyu.style.visibility = "hidden"
        NodeDivMain.elements.fogantyu.style.flex = "none"
        NodeDivMain.elements.keret.style.overflow = "hidden"
        MrkLibrary.dragElement(NodeDivMain.elements.fogantyu, NodeDivMain.elements.keret, true)
        if (NodeDivMain.root) {

        } else if (NodeDivMain.data.nodeData.positionType == "absolute") {
            MrkLibrary.dragElement(NodeDivMain.elements.fogantyu, NodeDivMain.elements.keret)
        }
        if (init) {
            NodeDivMain.elements.keret.appendChild(NodeDivMain.elements.fogantyu)
        }
    }

    static  _bodyRefresh(NodeDivMain) {
        let init = !NodeDivMain.elements.body
        let self = NodeDivMain
        if (init) {
            NodeDivMain.elements.body = document.createElement("div")
            NodeDivMain.elements.keret.appendChild(NodeDivMain.elements.body)

            NodeDivMain.elements.body.addEventListener("mouseenter", function (e) {
                self.elements.fogantyu.style.visibility = "visible"
            })
            NodeDivMain.elements.keret.addEventListener("mouseleave", function (e) {
                self.elements.fogantyu.style.visibility = "hidden"
            })
        }
        NodeDivMain.elements.body.removeAttribute("style")
        NodeDivMain.elements.body.style.width = "100%-3px"
        NodeDivMain.elements.body.style.height = "100%"
        NodeDivMain.elements.body.style.borderStyle = "solid"

        if (NodeDivMain.root) {
            NodeDivMain.elements.body.style.display = "flex"
            NodeDivMain.elements.body.style.flexFlow = "column"

        } else if (NodeDivMain.data.nodeData.positionType == "absolute") {

            NodeDivMain.elements.body.style.display = "flex"
            NodeDivMain.elements.body.style.flexFlow = "column"
            NodeDivMain.elements.body.style.backgroundColor = NodeDivMain.data.nodeData.positionData.all.color

        }
    }


}