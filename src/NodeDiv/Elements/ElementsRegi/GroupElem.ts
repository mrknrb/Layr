import {ElementBaseClass} from "../ElementBaseClass";

export class GroupElem extends ElementBaseClass{



   static _groupRefresh(NodeDivMain) {

        let init = !NodeDivMain.elements.groupKeret
        //--------------------------------------------pa groupkeret
        if (init) {
            NodeDivMain.elements.groupKeret = document.createElement("div")

            NodeDivMain.elements.body.appendChild(NodeDivMain.elements.groupKeret)
        }
        NodeDivMain.elements.groupKeret.removeAttribute("style")

        NodeDivMain.elements.groupKeret.style.minHeight = "20px"
        NodeDivMain.elements.groupKeret.style.height = "100%"
        NodeDivMain.elements.groupKeret.style.backgroundColor = "white"
        NodeDivMain.elements.groupKeret.style.overflow = "auto"

        NodeDivMain.elements.groupKeret.style.position = "relative"


        if (NodeDivMain.root) {
            NodeDivMain.elements.groupKeret = document.body
            // document.body.appendChild(NodeDivMain.elements.groupKeret)
            GroupElem.nodeDivGroupsBetoltes(NodeDivMain,[NodeDivMain])
            NodeDivMain.elements.groupKeret.style.display = "inline"
            // NodeDivMain.elements.groupKeret.style.flex = "1 1 auto"

            // NodeDivMain.elements.groupKeret.style.flexWrap = "wrap"

        } else if (NodeDivMain.data.nodeData.positionType == "absolute") {

            NodeDivMain.elements.groupKeret.style.display = "none"
            // NodeDivMain.elements.groupKeret.style.flex = "1 1 auto"
            if (init) {
                let button = NodeDivMain._createTopButton("G")
                button.addEventListener("click", function (e) {

                    if (NodeDivMain.elements.groupKeret.style.display === "none") {
                        NodeDivMain.elements.keret.style.resize = "both"
                        NodeDivMain.elements.groupKeret.style.display = "inline"
                        GroupElem.nodeDivGroupsBetoltes(NodeDivMain,[NodeDivMain])
                    } else {
                        NodeDivMain.elements.groupKeret.style.display = "none"
                        NodeDivMain.elements.keret.style.resize = "horizontal"
                        NodeDivMain.elements.groupKeret.style.height = "fit-content"
                    }

                })
            }
        }


        //--------------------------------------------pa groupcontroller


        GroupElem._groupcontrollerRefresh(NodeDivMain)

        //--------------------------------------------pa group
        if (NodeDivMain.root) {
            NodeDivMain.elements.group = document.body

        }
        if (!NodeDivMain.elements.group) {

            NodeDivMain.elements.group = document.createElement("div")

            MrkLibrary.grabInit(NodeDivMain.elements.group)
            NodeDivMain.elements.group.setAttribute("class", "group")
            NodeDivMain.elements.groupKeret.appendChild(NodeDivMain.elements.group)
        }

        NodeDivMain.elements.group.removeAttribute("style")

        NodeDivMain.elements.group.style.width = "100%"
        NodeDivMain.elements.group.style.minHeight = "20px"
        NodeDivMain.elements.group.style.height = "calc(100% - 6ch)"

        NodeDivMain.elements.group.style.backgroundColor = "white"


        NodeDivMain.elements.group.style.overflow = "auto"

        NodeDivMain.elements.group.style.position = "relative"


    }

  static _groupcontrollerRefresh(NodeDivMain) {

        if (!NodeDivMain.elements.groupController) {
            NodeDivMain.elements.groupController = document.createElement("div")
            NodeDivMain.elements.groupKeret.appendChild(NodeDivMain.elements.groupController)
        }

        NodeDivMain.elements.groupController.removeAttribute("style")

        NodeDivMain.elements.groupController.style.width = "100%"
        NodeDivMain.elements.groupController.style.minHeight = "20px"
        NodeDivMain.elements.groupController.style.height = "6ch"

        NodeDivMain.elements.groupController.style.backgroundColor = "grey"

        NodeDivMain.elements.groupController.style.float = "top"
        NodeDivMain.elements.groupController.style.overflow = "auto"

        NodeDivMain.elements.groupController.style.position = "relative"
//---------------------------------------------------------------pa openChildren
        if (!NodeDivMain.elements.groupLoadButton) {
            NodeDivMain.elements.groupLoadButton = document.createElement("div")
            NodeDivMain.elements.groupLoadButton.style.backgroundColor = "blue"
            NodeDivMain.elements.groupLoadButton.style.height = "100%"
            NodeDivMain.elements.groupLoadButton.style.width = "6ch"
            NodeDivMain.elements.groupLoadButton.style.float = "right"

            NodeDivMain.elements.groupLoadButton.addEventListener("click", function () {
                GroupElem.nodeDivGroupsBetoltes(NodeDivMain,[NodeDivMain])
            })
            NodeDivMain.elements.groupController.appendChild(NodeDivMain.elements.groupLoadButton)
        }
    }

   static nodeDivGroupsBetoltes(NodeDivMain,ArrayOfGroupNodeDivs) {

        let docURLs = []

        ArrayOfGroupNodeDivs.forEach(function (nodeDiv) {
            if (!docURLs.includes(nodeDiv.data.docData.URL))
                docURLs.push(nodeDiv.data.docData.URL);

        })
        let docURLs2 =[]
        // a mapnal a foreachnel a keyeken nem megy at
        console.log(NodeDivMain)
        NodeDivMain.conceptMapObject.arangoMrkMessageClient.docsDownloader(docURLs, function (parentDocs) {
            console.log(parentDocs)
            parentDocs.forEach(function (parentDoc) {
                parentDoc.nodes.forEach(function (node) {
                    if (MrkLibrary.mrkSUrlDecoder(node.docURL).dataScope == "doc") {
                        //local search
                    } else {
                        let URL = MrkLibrary.mrkSFullUrlMaker(parentDoc.URL, node.docURL)
                        //azert, van ketszer, hogy egyedi legyen es hogy lehessen foreachelni
                        if (!docURLs2.includes(URL))
                            docURLs2.push(URL);
                    }
                })

            })
            NodeDivMain.conceptMapObject.arangoMrkMessageClient.docsDownloader(docURLs2, function (childDocs) {
                console.log(childDocs)
                parentDocs.forEach(function (parentDoc) {
                    parentDoc.nodes.forEach(function (node) {
                        let childURL = MrkLibrary.mrkSFullUrlMaker(parentDoc.URL, node.docURL)

                        childDocs.forEach(function (childDoc) {

                            if (childURL == childDoc.URL) {

                                ArrayOfGroupNodeDivs.forEach(function (nodeDiv) {
                                    if (nodeDiv.data.docData.URL == parentDoc.URL) {
                                        let nodeDiv2 = new NodeDiv(NodeDivMain, {
                                            docData: childDoc,
                                            nodeData: node,
                                            parentNode: nodeDiv,
                                            root: false
                                        })
                                        NodeDivMain.conceptMapObject.nodeDivMap.set(nodeDiv2.data.nodeDivid, nodeDiv2)
                                    }
                                })
                            }
                        })

                    })


                })

            })
        })
    }


}