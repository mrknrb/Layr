export class TableRowElement {

    element: HTMLTableRowElement = document.createElement("tr")
    tableColumnDataArray: TableColumnData[] = []
    columnElements: HTMLTableDataCellElement[] = []

    constructor() {

    }

    addColumnData(tableColumnData: TableColumnData) {
        this.tableColumnDataArray.push(tableColumnData)
    }

    addColumnDataArray(tableColumnDataArray: TableColumnData[]) {
        this.tableColumnDataArray.concat(tableColumnDataArray)
    }

    deleteRowElement() {
        this.element.remove()
    }

    createColumnElement(columnName: string) {

        let columnData = this.tableColumnDataArray.find((tableColumnData) => {
            return tableColumnData.columnName == columnName
        })

        let columnElement = document.createElement("td")
        if (columnData) {
            if (columnData.columnData) {
                this.columnInnerElementGenerator(columnData,columnElement)
                columnElement.style.backgroundColor = "#a1a1a1"
            }
        } else {
            columnElement.style.backgroundColor ="transparent"
        }
        this.columnElements.push(columnElement)
        this.element.appendChild(columnElement)
    }

    columnInnerElementGenerator(tableColumnData: TableColumnData,columnElement:HTMLTableDataCellElement) {
        if (!tableColumnData.columnType || tableColumnData.columnType == ColumnTypes.text) {
            let textInput = document.createElement("input")
            textInput.style.backgroundColor="transparent"
            textInput.style.width="100px"
            textInput.style.border="none"
            textInput.setAttribute("readonly",true)
            if (tableColumnData.columnData) textInput.value = tableColumnData.columnData
            columnElement.appendChild(textInput)
        }


    }


}

interface TableColumnData {
    columnName: string
    columnData?: string
    columnType?: ColumnTypes
}

enum ColumnTypes {
    text = "text"


}
