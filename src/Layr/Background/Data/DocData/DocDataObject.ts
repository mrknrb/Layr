import {DocData} from "./DocData.js";

export class DocDataObject {
    docAbsoluteURL: string  //utolag, a parent alapjan le kell generalni, mert a kovetkezonel kelleni fog, hogy kitalald ezen absolut es a child relativ alapjan a child absolutjat

    docData: any

    constructor(docAbsoluteURL: string, docData: DocData) {
        this.docAbsoluteURL = docAbsoluteURL
        this.docData = docData
    }


}