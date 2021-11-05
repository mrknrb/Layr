import {DocData} from "../Doc/Doc/DocData.js";
import {FieldObject} from "../Doc/Field/FieldObject.js";
import {DocEvents} from "../Doc/Doc/DocEvents.js";
import {ConnectionData} from "./ConnectionData.js";

export class ConnectionObject{


    connectionId: string  //utolag, a parent alapjan le kell generalni, mert a kovetkezonel kelleni fog, hogy kitalald ezen absolut es a child relativ alapjan a child absolutjat
    connectionData: ConnectionData
    constructor(connectionId: string, connectionData: ConnectionData) {
        let self=this
        this.connectionId = connectionId
        this.connectionData = connectionData
    }



}