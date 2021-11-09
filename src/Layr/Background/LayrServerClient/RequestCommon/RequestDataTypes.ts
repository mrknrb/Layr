import {RequestDataBaseClass} from "./RequestDataBaseClass.js";
import {RequestType} from "./RequestType.js";
import {DocData} from "../../Data/Doc/Doc/DocData.js";

export class RequestData_insertDocs_AsParentDocChildren extends RequestDataBaseClass {
    requestId: Number;
    requestType: string;
    requestBody: { parentDocId: string, docDataArray: DocData[] };

    constructor(parentDocId:string,docDataArray: DocData[] ) {
        super()
        this.requestType =RequestType.insertDocs_AsParentDocChildren
        this.requestBody = {parentDocId: "", docDataArray: []}
    }
}

export class RequestData_getDocs extends RequestDataBaseClass {
    requestId: Number;
    requestType: string;
    requestBody: { docIds:string[] };

    constructor(docIds:string[]) {
        super()
        this.requestType =RequestType.getDocs
        this.requestBody = { docIds:docIds}
    }
}

export class RequestData_getDocs_ByDocsChildConnections extends RequestDataBaseClass {
    requestId: Number;
    requestType: string;
    requestBody: { parentDocId:string };

    constructor(parentDocId:string) {
        super()
        this.requestType =RequestType.getDocs_ByDocsChildConnections
        this.requestBody = { parentDocId:parentDocId}
    }
}