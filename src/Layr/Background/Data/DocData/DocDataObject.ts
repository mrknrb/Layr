import {DocData} from "./DocData.js";
import {DocDataEvents} from "./DocDataEvents.js";
import {DocFieldObject} from "./DocFieldObject.js";

export class DocDataObject {
    docAbsoluteURL: string  //utolag, a parent alapjan le kell generalni, mert a kovetkezonel kelleni fog, hogy kitalald ezen absolut es a child relativ alapjan a child absolutjat
    docData: DocData
    docFieldObjects:DocFieldObject[]
    docDataEvents:DocDataEvents
    constructor(docAbsoluteURL: string, docData: DocData) {
        let self=this
        this.docAbsoluteURL = docAbsoluteURL
        this.docData = docData
        this.docDataEvents=new DocDataEvents()
       this. docFieldObjects=[]
        docData.docFields.forEach(function (field) {
            self.docFieldObjects.push(new DocFieldObject(field))
        })
    }

}