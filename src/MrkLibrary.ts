
class MrkLibrary {
    static dragElement(draggingElement, moveableElement,kikapcsolas) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
        if(kikapcsolas){
            draggingElement.onmousedown =null
        }else{
            draggingElement.onmousedown = dragMouseDown
        }
        function dragMouseDown(e) {
            e = e || window.event
            e.preventDefault()

            // get the mouse cursor position at startup:
            pos3 = e.clientX
            pos4 = e.clientY
            document.onmouseup = closeDragElement
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag
        }

        function elementDrag(e) {
            e = e || window.event
            e.preventDefault()
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX
            pos2 = pos4 - e.clientY
            pos3 = e.clientX
            pos4 = e.clientY
            // set the element's new position:
            moveableElement.style.top = moveableElement.offsetTop - pos2 + "px"
            //Math.round((draggingElement.parentElement.offsetTop - pos2) / 10) * 10 + "px";
            moveableElement.style.left = moveableElement.offsetLeft - pos1 + "px"
            //Math.round((draggingElement.parentElement.offsetLeft - pos1) / 10) * 10 + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null
            document.onmousemove = null
        }
    }

    static grabInit(elementDiv) {

        let pos = {top: 0, left: 0, x: 0, y: 0}

        const mouseDownHandler = function (e) {
          //  e.stopPropagation()
           // e = e || window.event
            e.stopPropagation()
            e.preventDefault()
            pos = {
                left: elementDiv.scrollLeft,
                top: elementDiv.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            }
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)

        }
        const mouseMoveHandler = function (e) {
           // e = e || window.event
            e.preventDefault()

            // How far the mouse has been moved
            const dx = e.clientX - pos.x
            const dy = e.clientY - pos.y

            // Move the element
            elementDiv.scrollTop = pos.top - dy
            elementDiv.scrollLeft = pos.left - dx
        }

        const mouseUpHandler = function () {
            //TODO event es mentes
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }
        elementDiv.addEventListener('mousedown', mouseDownHandler)



    }

    static mrkSUrlDecoder(url) {
// hogy a http:// ne kavarjon be
        console.log(url)
        let urlArray = url.split("|")

        let length = urlArray.length
        let answer = new Answer()
        answer.dataType = ""
        answer.dataScope = ""
        let dataType = answer.dataType
        let dataScope = answer.dataScope
        answer.urlData = {}


        urlArray.reverse()

        function dataTypeMaker() {
            if (urlArray[3] == "") {
                dataType = "host"

            } else if (urlArray[2] == "") {
                dataType = "database"

            } else if (urlArray[1] == "") {
                dataType = "collection"

            } else if (urlArray[0] == "") {
                dataType = "doc"

            } else {
                dataType = "localdoc"
            }
        }

        function dataScopeMaker() {
            if (length == 1) {
                dataScope = "doc"
            } else if (length == 2) {
                dataScope = "collection"
            } else if (length == 3) {
                dataScope = "database"
            } else if (length == 4) {
                dataScope = "host"
            } else if (length == 5) {
                dataScope = "fullURL"
            }
        }

        dataTypeMaker()
        dataScopeMaker()

        if (urlArray[0]) {
            answer.urlData.localdocid = urlArray[0]
        }
        if (urlArray[1]) {
            answer.urlData.docid = urlArray[1]
        }
        if (urlArray[2]) {
            answer.urlData.collectionid = urlArray[2]
            answer.docQueryid = answer.urlData.collectionid + "/" + answer.urlData.docid
        }
        if (urlArray[3]) {
            answer.urlData.databaseid = urlArray[3]
        }
        if (urlArray[4]) {
            answer.urlData.hostid = urlArray[4]
        }
        answer.fullURL = url
        return answer
    }

    static mrkSFullUrlMaker(rootAbsoluteURL, childRelativeURL) {
        let rootSplit = rootAbsoluteURL.split("|")
        rootSplit.reverse()
        let childSplit = childRelativeURL.split("|")
        childSplit.reverse()
        childSplit.forEach(function (child, i) {
            rootSplit[i] = child
        })
        rootSplit.reverse()


        return rootSplit.join("|")
    }

    static cssPreventInit() {
        let cssPreventNodeModification = document.createElement("style")
        cssPreventNodeModification.innerText = ".NodeDivMrkS * {all: revert;  * {    all: unset;  }}"
        document.body.appendChild(cssPreventNodeModification)
    }

}