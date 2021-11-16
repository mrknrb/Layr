import {DocData} from "../Layr/Background/Data/Doc/Doc/DocData.js";
import {FieldData} from "../Layr/Background/Data/Doc/Field/FieldData.js";
import {FieldsDefault} from "../Layr/Background/Data/Doc/Field/FieldsDefault.js";
import {ElementTypes} from "../Layr/Frame/NodesEdgesManager/Node/Element/Adatok/ElementTypes.js";
import {GroupData} from "../Layr/Frame/NodesEdgesManager/Node/Element/Elements/GroupElement/GroupData.js";
import {NodeStyleData} from "../Layr/Background/Data/Connection/NodeStyleData/NodeStyleData.js";
import {Layouts} from "../Layr/Frame/NodesEdgesManager/Node/Element/Elements/GroupElement/Layouts/Layouts.js";
import {TextAreaElementData} from "../Layr/Frame/NodesEdgesManager/Node/Element/Elements/TextAreaElement/TextAreaElementData.js";

export class SampleDataFactoryMongodb {

    static generateSampleDataset(DocokSzama) {
        //az elso paron nincsenek global nodeok

        let docDataArray: any[] = []
        let connectionDataArray: any[] = []

        for (let i = 0; i < DocokSzama; i++) {
            let docData = this.docDataGenerator()
            docDataArray.push(docData)
            //group legyen vagy ne




                //nodeok
                if (docDataArray.length > 5) {
                    for (let i = 0; i < 10; i++) {

                       connectionDataArray.push(this.connectionGenerator(docData._id,docDataArray[Math.floor(Math.random() * docDataArray.length)]._id ))
                    }
                }



        }

        return  {docs: docDataArray, connections: connectionDataArray}
    }


    private static connectionGenerator(fromDocid,toDocid) {
        let connectionData:any = {}
        connectionData.from = fromDocid
        connectionData.to = toDocid
        if( Math.round(Math.random())){


            connectionData.groupName ="group1"
            connectionData.nodeLayoutsData={}
            connectionData.layout = Layouts.absolute
            connectionData.nodeLayoutsData.absolute={}
            connectionData.nodeLayoutsData.absolute.width = Math.floor(50 + Math.random() * 100) + "px"
            connectionData.nodeLayoutsData.absolute.height = Math.floor(50 + Math.random() * 100) + "px"
            connectionData.nodeLayoutsData.absolute.top = Math.floor(50 + Math.random() * 1000) + "px"
            connectionData.nodeLayoutsData.absolute.left = Math.floor(50 + Math.random() * 1000) + "px"
        }


        //connectionData.edgeStyleLayoutsData.all.color = "#" + Math.floor(Math.random() * 16777215).toString(16)


        return connectionData
    }


    private static docDataGenerator() {

        let docData :DocData= new DocData()
        docData.fieldsData=[]

        let noteDocField = new FieldData()
        noteDocField.fieldName = FieldsDefault.note
        noteDocField.elementType = ElementTypes.TextArea
        noteDocField.data = new TextAreaElementData()
        noteDocField.data.content = (Math.random() * 10000000000).toString()
        docData.fieldsData.push(noteDocField)
        let titleDocField = new FieldData()
        titleDocField.fieldName = FieldsDefault.title
        titleDocField.elementType = ElementTypes.TextArea
        titleDocField.data = new TextAreaElementData()
        titleDocField.data.content = (Math.random() * 1000000000).toString()
        docData.fieldsData.push(titleDocField)
        let rankDocField = new FieldData()
        rankDocField.fieldName = FieldsDefault.rank
        rankDocField.elementType = ElementTypes.DropDownStatic
        rankDocField.data = new TextAreaElementData()
        rankDocField.data.content = Math.floor(Math.random() * 5)
        docData.fieldsData.push(rankDocField)
        let groupDocField = new FieldData()
        groupDocField.fieldName = FieldsDefault.group
        groupDocField.elementType = ElementTypes.Group
        groupDocField.data = new GroupData()


        docData.fieldsData.push(groupDocField)


        return docData
    }




}