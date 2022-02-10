export class TableHeadColumnElement {

    element: HTMLTableHeaderCellElement = document.createElement("th")

    constructor(innerText: string) {
        this.element.innerText = innerText
    }

    deleteColumnElement() {
        this.element.remove()
    }


}
