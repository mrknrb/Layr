import {DocData} from "../Layr/Background/Data/DocData/DocData.js";
import {NodeData} from "../Layr/Background/Data/NodeData/NodeData.js";
import {DocField} from "../Layr/Background/Data/DocData/DocField.js";
import {MrkLibrary} from "../MrkLibrary.js";
import {GroupElementData} from "../Layr/Frame/NodeDiv/Elements/Elements/GroupElement/GroupElementData.js";
import {Layouts} from "../Layr/Frame/Layouts/Layouts.js";
import {TextAreaElementData} from "../Layr/Frame/NodeDiv/Elements/Elements/TextAreaElement/TextAreaElementData.js";
import {DocFieldsDefault} from "../Layr/Background/Data/DocData/DocFieldsDefault.js";
import {ElementTypes} from "../Layr/Frame/NodeDiv/Elements/ElementTypes.js";

export class zSampleDataFactory {
    static generateSampleDocDataset(DocokSzama): DocData[] {
        //az elso paron nincsenek global nodeok

        let docDataArray: DocData[] = []
        for (let i = 0; i < DocokSzama; i++) {
            let docData = this.docDataGenerator()

            //group legyen vagy ne
            if (Math.round(Math.random())) {
	            let groupDocField = new DocField()
	            groupDocField.name = DocFieldsDefault.group
	            groupDocField.elementType = ElementTypes.Group
	            groupDocField.data=new GroupElementData()


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
        let nodeData = new NodeData()
        nodeData.nodeId = Math.floor(Math.random() * 100000000).toString()
        nodeData.docRelativeURL = docURL

        nodeData.layout = Layouts.absolute
        nodeData.nodeLayoutsData.absolute.width = Math.floor(50 + Math.random() * 100) + "px"
        nodeData.nodeLayoutsData.absolute.height = Math.floor(50 + Math.random() * 100) + "px"
        nodeData.nodeLayoutsData.absolute.top = Math.floor(50 + Math.random() * 1000) + "px"
        nodeData.nodeLayoutsData.absolute.left = Math.floor(50 + Math.random() * 1000) + "px"


        //nodeData.nodeLayoutsData.all.color = "#" + Math.floor(Math.random() * 16777215).toString(16)


        return nodeData
    }


    private static docDataGenerator(): DocData {

        let docData: DocData = new DocData()

        docData._key = (Math.random() * 100000000).toString()
        let noteDocField = new DocField()
        noteDocField.name = DocFieldsDefault.note
        noteDocField.elementType = ElementTypes.TextArea
        noteDocField.data = new TextAreaElementData()
        noteDocField.data.content = (Math.random() * 10000000000).toString()
        docData.docFields.push(noteDocField)
        let titleDocField = new DocField()
        titleDocField.name = DocFieldsDefault.title
        titleDocField.elementType = ElementTypes.TextArea
        titleDocField.data = new TextAreaElementData()
        titleDocField.data.content = (Math.random() * 1000000000).toString()
        docData.docFields.push(titleDocField)
        let rankDocField = new DocField()
        rankDocField.name = DocFieldsDefault.rank
        rankDocField.elementType = ElementTypes.DropDownStatic
        rankDocField.data = new TextAreaElementData()
        rankDocField.data.content = Math.floor(Math.random() * 5)
        docData.docFields.push(rankDocField)



        return docData
    }
}