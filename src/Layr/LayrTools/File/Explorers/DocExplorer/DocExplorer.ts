import {ToolElementBaseClass} from "../../../../UILayrFrame/Elements/ToolElementBaseClass.js";
import {ToolGroup} from "../../../../UILayrFrame/Elements/ToolGroup.js";
import {LayrWindow} from "../../../../UIElemek/LayrWindow.js";
import {TableElement} from "../../../../UIElemek/TableElement/TableElement.js";
import {layrFrame} from "../../../../LayrFrame.js";
import {RequestType} from "../../../../LayrServerClient/RequestCommon/RequestType.js";
import {DocData} from "../../../../DocsConnsManager/Data/Doc/Doc/DocData.js";
import {DocObject} from "../../../../DocsConnsManager/Data/Doc/Doc/DocObject.js";
import {QuickMenuBarBase} from "../../../../UIElemek/QuickMenu/QuickMenuBarBase.js";
import {QuickMenuButtonBase} from "../../../../UIElemek/QuickMenu/QuickMenuButtonBase.js";

export class DocExplorer {

    window: LayrWindow = new LayrWindow()
    menuBar: QuickMenuBarBase = new QuickMenuBarBase()

    tableContainerDiv: HTMLDivElement = document.createElement("div")
    tableElement: TableElement = new TableElement(this.tableContainerDiv)


    constructor() {
        this.docExplorerWindowInit()
        this.listAllInit()
    }


    docExplorerWindowInit() {
        this.window.setName("Doc Explorer")
        let body = this.window.bodyDiv
        body.style.display = "flex"
        body.style.flexDirection = "column"
        body.style.height = "0px"


        this.menuBar.element.style.height = "30px"
        body.appendChild(this.menuBar.element)

        this.tableContainerDiv.style.flex = "1 1"
        this.tableContainerDiv.style.display = "flex"
        this.tableContainerDiv.style.flexDirection = "column"
        this.tableContainerDiv.style.overflow = "auto"
        this.tableContainerDiv.style.backgroundColor = "#727272"
        body.appendChild(this.tableContainerDiv)
        this.window.closeEvent.on(event => {
            this.tableElement.deleteTableContent()
        })
    }

    async listAllInit() {


        let listAllbutton = new QuickMenuButtonBase()
        listAllbutton.setText("List All")
        this.menuBar.quickMenuElementInsert(listAllbutton)
        listAllbutton.element.addEventListener("click", async (ev) => {
            this.tableElement.deleteTableContent()
            let docs: DocData[] = await layrFrame.layrClient.newRequest(RequestType.getAllDocs, {})

            docs.forEach(doc => {
                let docObject = new DocObject(doc)

                let tableRow = this.tableElement.newTableRow()
                tableRow.addColumnData({columnName: "id", columnData: doc._id})
                tableRow.addColumnData({columnName: "collection", columnData: doc.collection})
                tableRow.addColumnData({columnName: "type", columnData: doc.type})

                docObject.fieldObjects?.forEach(fieldObject => {

                    let field = fieldObject.fieldData
                    tableRow.addColumnData({
                        columnName: field.fieldName + " " + field.elementType,
                        columnData: fieldObject.getContentData()
                    })

                })


            })
            this.tableElement.generateTable()
        })
    }


}