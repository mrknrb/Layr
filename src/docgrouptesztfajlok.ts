import {DocData} from "./NodeDiv/NodeDocData/DocData/DocData";
import {NodeData} from "./NodeDiv/NodeDocData/NodeData/NodeData";
import {PositionType} from "./NodeDiv/NodeDocData/NodeData/PositionType";

let tesztdocgroup1 = {

    docid: "thdghdgndfgb",
    title: "doc1",
    type: "group",
    data: {
        nodes: [
            {
                docdata: {
                    title: "locdoc1", note: "nfghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbdbt",
                    type: "group",
                    rang: "3"

                },
                nodedata: {
                    width: "100px",
                    height: "50px",
                    top: "50px",
                    left: "900px",
                    color: "red"
                },
                nodeid: "7567efse4",
                dochivatkozas: "localdoc",
                parentGroupNodeId: "75674vsd"
            }, {
                docdata: {
                    title: "locdoc2",
                    note: "nfghnfhnnh fghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbd"
                },
                nodedata: {
                    width: "150px",
                    height: "50px",
                    top: "50px",
                    left: "20px",
                    color: "blue"
                },
                dochivatkozas: "localdoc",
                nodeid: "75674cds",
            }, {
                docdata: {
                    title: "locdoc3", note: "nfghnfhnnh",
                    type: "group"
                },
                nodedata: {
                    width: "10px",
                    height: "50px",
                    top: "500px",
                    left: "90px",
                    color: "yellow"
                },
                dochivatkozas: "localdoc",
                nodeid: "75674vsd", note: "nfghnfhnnh"
            }, {
                docdata: {
                    title: "locdoc3", note: "nfghnfhnnh",
                    type: "group"
                },
                nodedata: {
                    width: "300px",
                    height: "50px",
                    top: "200px",
                    left: "250px",
                    color: "grey"
                },
                dochivatkozas: "localdoc",
                nodeid: "75674dd",
            }, {
                docdata: {
                    title: "locdoc3gf", note: "nfghnf hnghfgh fghf nh",
                    type: "group"
                },
                nodedata: {
                    width: "300px",
                    height: "50px",
                    top: "250px",
                    left: "300px",
                    color: "grey"
                },
                dochivatkozas: "localdoc",
                nodeid: "75674ddhj",
            },

        ]

    }

}


let tesztdoc = {

    docid: "thdghdgndfgb",
    title: "doc1",
    type: "group",
    data: {
        nodes: [
            {
                nodedata: {
                    width: "100px",
                    height: "50px",
                    top: "50px",
                    left: "900px",
                    color: "red"
                },
                nodeid: "7567efse4",
                docid: "localdoc/127"
            }, {

                nodedata: {
                    width: "150px",
                    height: "50px",
                    top: "50px",
                    left: "20px",
                    color: "blue"
                },
                dochivatkozas: "localdoc/126",
                nodeid: "75674cds",
            }, {

                nodedata: {
                    width: "10px",
                    height: "50px",
                    top: "500px",
                    left: "90px",
                    color: "yellow"
                },
                dochivatkozas: "localdoc/125",
                nodeid: "75674vsd"
            }, {

                nodedata: {
                    width: "300px",
                    height: "50px",
                    top: "200px",
                    left: "250px",
                    color: "grey"
                },
                dochivatkozas: "localdoc/124",
                nodeid: "75674dd",
            }, {

                nodedata: {
                    width: "300px",
                    height: "50px",
                    top: "250px",
                    left: "300px",
                    color: "grey"
                },
                dochivatkozas: "localdoc/123",
                nodeid: "75674ddhj",
            },

        ],
        docs: [
            {
                id: "123",
                title: "locdoc1", note: "nfghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbdbt",
                type: "group",
                rang: "3"

            }, {
                id: "124",
                title: "locdoc1", note: "nfghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbdbt",
                type: "group",
                rang: "3"

            }, {
                id: "125",
                title: "locdoc1", note: "nfghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbdbt",
                type: "group",
                rang: "3"

            }
            , {
                id: "126",
                title: "locdoc1", note: "nfghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbdbt",
                type: "group",
                rang: "3"

            }
            , {
                id: "127",
                title: "locdoc1", note: "nfghnfhnnh lkgjlhgj lghljghj lghjlghljghljg  hljghljghljgh gsbs dtbdbt",
                type: "group",
                rang: "3"

            }

        ]

    }

}

function sampleDatabaseCreator(DocokSzama) {
//az elso paron nincsenek global nodeok

    let docok = []
    for (let i = 0; i < DocokSzama; i++) {
        let doc = docMetaGenerator()

        if (Math.round(Math.random())) {
            doc.nodes = []
            doc.localDocs = []
            //nodeok
            if (docok.length > 5) {
                for (let i = 0; i < 10; i++) {
                    doc.nodes.push(nodeGenerator(docok[Math.floor(Math.random() * docok.length)].docid + "|"))
                }
            }
            //localdocok
            for (let i = 0; i < 10; i++) {
                let localDoc = docMetaGenerator()

//egyelore kikapcsolva
                //doc.nodes.push(nodeGenerator( localDoc.docid))
                doc.localDocs.push(localDoc)
            }
        } else {
            doc.type = "doc"

        }
        docok.push(doc)

    }
    console.log(docok)
    return docok
}

function nodeGenerator(docURL) {
    let node = new NodeData()

    node.nodeid = Math.floor(Math.random() * 100000000)
    node.docURL = docURL
    node.nodeViewData.positionType = PositionType.absolute
    node.nodeViewData.all.color = "#" + Math.floor(Math.random() * 16777215).toString(16)

    node.nodeViewData.absolute.width = Math.floor(50 + Math.random() * 100) + "px"
    node.nodeViewData.absolute.height = Math.floor(50 + Math.random() * 100) + "px"
    node.nodeViewData.absolute.top = Math.floor(50 + Math.random() * 1000) + "px"
    node.nodeViewData.absolute.left = Math.floor(50 + Math.random() * 1000) + "px"

    return node
}

function docMetaGenerator() {
    let doc = new DocData()

    doc.docid = Math.floor(Math.random() * 100000000).toString()
    doc._key = doc.docid
    doc.title = Math.floor(Math.random() * 100)
    doc.note = Math.floor(Math.random() * 100)
    doc.rank = Math.floor(Math.random() * 5)
    return doc
}

