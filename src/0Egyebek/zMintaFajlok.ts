import {Layouts} from "../Layr/Frame/NodesEdgesManager/Node/Element/Elements/GroupElement/Layouts/Layouts.js";
import {ElementTypes} from "../Layr/Frame/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {DocObject} from "../Layr/Background/Data/Doc/Doc/DocObject.js";


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
                        elementType: ElementTypes.TextArea,
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


export class testDocFactory{



}


let docData=new DocObject()