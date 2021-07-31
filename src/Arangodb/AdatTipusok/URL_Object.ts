export class URL_Object {
    UrlString: string
    docid
    dataType
    dataScope
    urlData
    docQueryid

    constructor(URLabsolute: string, URLrelativeTarget_IF_ABSOLUTE_THAN_NULL: string | null) {
        //Ha az absolut URL-bol akarsz obejctet csinalni, akkor csak hagyd uresen
        let urlAbsoluteTarget=URLabsolute
        if (URLrelativeTarget_IF_ABSOLUTE_THAN_NULL != null) {
            urlAbsoluteTarget= this.mrkSFullUrlMaker(URLabsolute, URLrelativeTarget_IF_ABSOLUTE_THAN_NULL)
        }
        this.UrlString = urlAbsoluteTarget
        this.UrlDecoder()
    }


    private mrkSFullUrlMaker(rootAbsoluteURL, childRelativeURL) {
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

    private UrlDecoder(): void {
// hogy a http:// ne kavarjon be

        let urlArray = this.UrlString.split("|")

        let length = urlArray.length

        this.dataType = ""
        this.dataScope = ""
        let dataType = this.dataType
        let dataScope = this.dataScope
        this.urlData = {}


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
            this.urlData.localdocid = urlArray[0]
        }
        if (urlArray[1]) {
            this.urlData.docid = urlArray[1]
        }
        if (urlArray[2]) {
            this.urlData.collectionid = urlArray[2]
            this.docQueryid = this.urlData.collectionid + "/" + this.urlData.docid
        }
        if (urlArray[3]) {
            this.urlData.databaseid = urlArray[3]
        }
        if (urlArray[4]) {
            this.urlData.hostid = urlArray[4]
        }

    }

}