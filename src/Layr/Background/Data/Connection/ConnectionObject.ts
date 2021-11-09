
import {ConnectionData} from "./ConnectionData.js";

export class ConnectionObject{


    connectionId: string  //utolag, a parent alapjan le kell generalni, mert a kovetkezonel kelleni fog, hogy kitalald ezen absolut es a child relativ alapjan a child absolutjat
    connectionData: ConnectionData
    constructor(connectionId: string, connectionData: ConnectionData) {

        this.connectionId = connectionId
        this.connectionData = connectionData
    }



}