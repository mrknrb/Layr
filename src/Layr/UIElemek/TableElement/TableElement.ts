import {TableRowElement} from "./TableRowElement.js";
import {TableHeadColumnElement} from "./TableHeadColumnElement.js";

export class TableElement {
    tableElement: HTMLTableElement = document.createElement("table")
    tbodyElement: HTMLElement = document.createElement("tbody")
    theadElement: HTMLElement = document.createElement("thead")
    headRowElement: HTMLElement = document.createElement("tr")
    parentDiv: HTMLDivElement

    tableRows: TableRowElement[] = []
    tableHeadColumns: TableHeadColumnElement[] = []

    constructor(parentDiv: HTMLDivElement) {
        this.parentDiv = parentDiv
        this.elementInit()
    }

    private elementInit() {
        this.tableElement.classList.add("LayrExplorerTable")
        this.parentDiv.appendChild(this.tableElement)
        this.theadElement.style.position = "sticky"
        this.theadElement.style.top = "1px"
        this.theadElement.style.backgroundColor = "grey"
        this.tableElement.appendChild(this.theadElement)
        this.theadElement.appendChild(this.headRowElement)
        this.tableElement.appendChild(this.tbodyElement)
    }

    newTableRow() {
        let tableRow = new TableRowElement()
        this.tableRows.push(tableRow)
        return tableRow
    }

    getTableRowElement(id: string) {

    }

    deleteTableContent() {
        if (this.tableRows != []) {
            this.tableRows.forEach((row) => {
                row.deleteRowElement()

            })
            this.tableRows = []
        }
        if (this.tableHeadColumns != []) {
            this.tableHeadColumns.forEach((column) => {
                column.deleteColumnElement()

            })
            this.tableHeadColumns = []
        }




    }

    generateTable() {
        let tableColumnNameSum: string[] = []

        this.tableRows.forEach((row) => {

            row.tableColumnDataArray.forEach((columnData) => {
                let columnNameFound = tableColumnNameSum.find((columnNameInSum) => {
                    return columnNameInSum == columnData.columnName
                })
                if (!columnNameFound) {
                    tableColumnNameSum.push(columnData.columnName)
                }

            })
        })


        tableColumnNameSum.forEach(columnName => {
            let tableHeadColumnElement = new TableHeadColumnElement(columnName)
            this.tableHeadColumns.push(tableHeadColumnElement)
            this.headRowElement.appendChild(tableHeadColumnElement.element)
        })
        this.tableRows.forEach(tableRow => {
            tableColumnNameSum.forEach(columnName => {
                tableRow.createColumnElement(columnName)
            })

            this.tbodyElement.appendChild(tableRow.element)
        })


    }


}