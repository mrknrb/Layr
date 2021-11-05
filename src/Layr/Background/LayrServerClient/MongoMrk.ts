import {Lekerdezes} from "./MongoAdatok/Lekerdezes.js";
import {DocObject} from "../Data/Doc/Doc/DocObject.js";
import {RequestType} from "./MongoAdatok/RequestType.js";
import {DocData} from "../Data/Doc/Doc/DocData.js";
import {MongoMrkSeged} from "./MongoMrkSeged.js";

//import {axios} from "../../../0Libraries/axios.js";
//@ts-ignore
//let axiosClient=axios


export class MongoMrk {

    axiosClient
    mongoMrkSeged:MongoMrkSeged

    constructor() {
        //@ts-ignore
        this.axiosClient = axios
        this.mongoMrkSeged=new MongoMrkSeged(this)
    }


    async getOneDoc(docId, callback) {
        this.mongoMrkSeged.lekerdezesMap.set(docId, new Lekerdezes(docId, callback))

        await this.mongoMrkSeged.lekerdezesSzamlaloStart()

    }



}




