import {ElementTypes} from "./NodeDiv/Elements/ElementTypes";
import {Layouts} from "./NodeDiv/Elements/Layouts";

let tesztdoctypescript = {
    docId: "thdghdgndfgb",
    title: "doc1",
    note: "My note",
    rank: 4,
    tags: "programozas,javascript",
    groupData: {
        layoutType: Layouts.absolute,
        groupLayoutData: {
            absolute:{

            },



        },
        defaultNodeLayoutData: {

        },
        nodes: [
            {
                nodeId: "7567efse4",
                docURL: "127",

                nodeLayoutData: {
                    absolute: {
                        height: "100px",
                        width: "100px",
                        left: "50px",
                        top: "100px"
                    }
                },
                mainElementData: {
                    color: "red"

                },
                elementsData: {
                    note: {
                        elementType: ElementTypes.TextArea,
                        content: "My note",
                    },
                    title: {
                        elementType: ElementTypes.TextOneLine,
                        content: "My title",
                    },
                    rank: {
                        elementType: ElementTypes.DropDownStatic,
                        content: 4,

                    },

                }
            }
        ],
        localDocs: []
    }


}