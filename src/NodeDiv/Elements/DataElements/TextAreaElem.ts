export class TextAreaElem{


    static _createTextArea(NodeDivMain,buttonname, type, data) {
        let self = NodeDivMain
        if (!NodeDivMain.elements[type]) {
            NodeDivMain.elements[type] = document.createElement("textarea")
            let textArea = NodeDivMain.elements[type]
            let button = NodeDivMain._createTopButton(buttonname)
            if (data) {
                NodeDivMain.elements[type].style.display = "block"
                button.style.display = "none"
            } else {
                NodeDivMain.elements[type].style.display = "none"
                button.style.display = "block"
            }
            button.addEventListener("click", function (e) {
                textArea.style.display = "block"
                button.style.display = "none"
            })

            // @ts-ignore
            let a = new ResizeObserver(function () {
                textArea.style.height = "5px"
                textArea.style.height = (textArea.scrollHeight - 3) + "px"

            }).observe(textArea)
            textArea.addEventListener("keyup", function (e) {
                //console.log(textArea.value)
                if (textArea.value == "") {
                    textArea.style.display = "none"
                    button.style.display = "block"
                }
                if (self.root) {

                } else if (self.data.nodeData.positionType === "absolute") {
                    if (textArea.value.length > 20) {
                        self.elements.keret.style.width = "200px"
                    } else {
                        self.elements.keret.style.width = "100px"
                    }
                }
                textArea.style.height = "5px"
                textArea.style.height = (textArea.scrollHeight - 3) + "px"
            })
        }
        let textArea = NodeDivMain.elements[type]
        textArea.removeAttribute("style")
        textArea.style.width = "100%"
        textArea.style.backgroundColor = "rgba(0,0,0,0.2)"
        textArea.style.border = "0px"
        textArea.style.resize = "none"
        textArea.style.overflow = "hidden"
        textArea.style.minHeight = "15px"
        textArea.style.minWidth = "50px"
        if (NodeDivMain.data.nodeData) {
            if (NodeDivMain.data.nodeData.positionType === "absolute") {
                textArea.style.height = (textArea.scrollHeight - 3) + "px"
                if (textArea.value.length > 20) {
                    self.elements.keret.style.width = "200px"
                } else {
                    self.elements.keret.style.width = "100px"
                }
                setTimeout(function () {

                }, 300)
            }
        }
        textArea.value = data
        NodeDivMain.elements.metaDataDiv.appendChild(NodeDivMain.elements[type])
    }

}