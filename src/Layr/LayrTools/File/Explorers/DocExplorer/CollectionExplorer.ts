import {LayrWindow} from "../../../../UIElemek/LayrWindow.js";
import {TableElement} from "../../../../UIElemek/TableElement/TableElement.js";
import {layrFrame} from "../../../../LayrFrame.js";
import {RequestType} from "../../../../LayrServerClient/RequestCommon/RequestType.js";
import {DocData} from "../../../../DocsConnsManager/Data/Doc/Doc/DocData.js";
import {DocObject} from "../../../../DocsConnsManager/Data/Doc/Doc/DocObject.js";
import {QuickMenuBarBase} from "../../../../UIElemek/QuickMenu/QuickMenuBarBase.js";
import {QuickMenuButtonBase} from "../../../../UIElemek/QuickMenu/QuickMenuButtonBase.js";
import {ContextMenu} from "../../../../UIElemek/ContextMenu/ContextMenu.js";
import {ContextMElementInputText} from "../../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementInputText.js";
import {ContextMElementClickable} from "../../../../UIElemek/ContextMenu/ContextMenuElements/ContextMElementClickable.js";
import {Online_Off_Both} from "../../../../../0Egyebek/GlobalValues/Online_Off_Both.js";

export class CollectionExplorer {

    window: LayrWindow = new LayrWindow()
    menuBar: QuickMenuBarBase = new QuickMenuBarBase()

    tableContainerDiv: HTMLDivElement = document.createElement("div")
    tableElement: TableElement = new TableElement(this.tableContainerDiv)
    newCollectionButton = new QuickMenuButtonBase()

    subContextMenu: ContextMenu = new ContextMenu()

    constructor() {
        this.collectionExplorerWindowInit()
        this.listAllInit()
        this.newCollectionButtonInit()
        this.contextInit()
    }

    collectionExplorerWindowInit() {
        let body = this.window.bodyDiv
        body.style.display = "flex"
        body.style.flexDirection = "column"
        body.style.height = "0px"
        this.window.setName("Collection Explorer")

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
            let docs: DocData[] = await layrFrame.layrClient.newRequest(RequestType.getAllCollections, {})

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

    newCollectionButtonInit() {

        this.newCollectionButton.setColor("green")
        this.newCollectionButton.setText("New Collection")
        this.newCollectionButton.addImage("0Resources/add.svg")
        this.newCollectionButton.element.addEventListener("click", () => {
            let bounding = this.newCollectionButton.element.getBoundingClientRect()
            this.subContextMenu.contextMenuActivate(bounding.x, bounding.y)
            console.log(this.subContextMenu)
        })


        this.menuBar.quickMenuElementInsert(this.newCollectionButton)
    }


    contextInit() {
        this.subContextMenu.  contextMenuBasicFloatInit()
        let subContextMenuElementCollectionName = new ContextMElementInputText("Collection Name:")
        this.subContextMenu.contextMenuElementInsert(subContextMenuElementCollectionName)
        let contextMenuElementClickable = new ContextMElementClickable("Create Collection")
        this.subContextMenu.contextMenuElementInsert(contextMenuElementClickable)
        let hibauzenet = document.createElement("b")
        hibauzenet.innerText = "Fill everything!"
        hibauzenet.style.backgroundColor = "red"
        hibauzenet.style.display = "none"
        this.subContextMenu.element.appendChild(hibauzenet)
        contextMenuElementClickable.clickEvent.on(event => {
            if (!subContextMenuElementCollectionName.inputElement.value) {
                hibauzenet.style.display = "block"
            } else {
               layrFrame.collectionsManager. newCollection(subContextMenuElementCollectionName.inputElement.value)
                hibauzenet.style.display = "none"
                subContextMenuElementCollectionName.resetValue()
                this.subContextMenu.contextMenuInVisible()
            }


        })
    }





}