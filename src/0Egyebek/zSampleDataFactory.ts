import {DocObject} from "../Layr/Background/Data/Doc/Doc/DocData.js";
import {NodeStyleData} from "../Layr/Frame/NodesManager/Node/Elements/Elements/GroupElement/NodeStyleData/NodeStyleData.js";
import {FieldData} from "../Layr/Background/Data/Doc/Field/FieldData.js";
import {MrkLibrary} from "../Layr/Global/MrkLibrary.js";
import {GroupData} from "../Layr/Frame/NodesManager/Node/Elements/Elements/GroupElement/GroupData.js";
import {Layouts} from "../Layr/Frame/NodesManager/Node/Elements/Elements/GroupElement/Layouts/Layouts.js";
import {TextAreaElementData} from "../Layr/Frame/NodesManager/Node/Elements/Elements/TextAreaElement/TextAreaElementData.js";
import {FieldsDefault} from "../Layr/Background/Data/Doc/Field/FieldsDefault.js";
import {ElementTypes} from "../Layr/Frame/NodesManager/Node/Elements/ElementTypes.js";

export class zSampleDataFactory {
    static generateSampleDocDataset(DocokSzama): DocObject[] {
        //az elso paron nincsenek global nodeok

        let docDataArray: DocObject[] = []
        for (let i = 0; i < DocokSzama; i++) {
            let docData = this.docDataGenerator()

            //group legyen vagy ne
            if (Math.round(Math.random())) {
	            let groupDocField = new FieldData()
	            groupDocField.name = FieldsDefault.group
	            groupDocField.elementType = ElementTypes.Group
	            groupDocField.data=new GroupData()


                //nodeok
                if (docDataArray.length > 5) {
                    for (let i = 0; i < 10; i++) {

	                    groupDocField.data.nodes.push(this.nodeGenerator(docDataArray[Math.floor(Math.random() * docDataArray.length)]._key + "|"))
                    }
                }
	            docData.docFields.push(groupDocField)
            }
            docDataArray.push(docData)

        }
        return docDataArray
    }


    private static nodeGenerator(docURL) {
        let nodeData = new NodeStyleData()
        nodeData.nodeId = Math.floor(Math.random() * 100000000).toString()
        nodeData.docRelativeURL = docURL

        nodeData.layout = Layouts.absolute
        nodeData.nodeStyleLayoutsData.absolute.width = Math.floor(50 + Math.random() * 100) + "px"
        nodeData.nodeStyleLayoutsData.absolute.height = Math.floor(50 + Math.random() * 100) + "px"
        nodeData.nodeStyleLayoutsData.absolute.top = Math.floor(50 + Math.random() * 1000) + "px"
        nodeData.nodeStyleLayoutsData.absolute.left = Math.floor(50 + Math.random() * 1000) + "px"


        //parentDocId.edgeStyleLayoutsData.all.color = "#" + Math.floor(Math.random() * 16777215).toString(16)


        return nodeData
    }


    private static docDataGenerator(): DocObject {

        let docData: DocObject = new DocObject()

        docData._key = (Math.random() * 100000000).toString()
        let noteDocField = new FieldData()
        noteDocField.name = FieldsDefault.note
        noteDocField.elementType = ElementTypes.TextArea
        noteDocField.data = new TextAreaElementData()
        noteDocField.data.content = (Math.random() * 10000000000).toString()
        docData.docFields.push(noteDocField)
        let titleDocField = new FieldData()
        titleDocField.name = FieldsDefault.title
        titleDocField.elementType = ElementTypes.TextArea
        titleDocField.data = new TextAreaElementData()
        titleDocField.data.content = (Math.random() * 1000000000).toString()
        docData.docFields.push(titleDocField)
        let rankDocField = new FieldData()
        rankDocField.name = FieldsDefault.rank
        rankDocField.elementType = ElementTypes.DropDownStatic
        rankDocField.data = new TextAreaElementData()
        rankDocField.data.content = Math.floor(Math.random() * 5)
        docData.docFields.push(rankDocField)



        return docData
    }
}