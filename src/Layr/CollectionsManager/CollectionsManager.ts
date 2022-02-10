import {Online_Off_Both} from "../../0Egyebek/GlobalValues/Online_Off_Both.js";
import {layrFrame} from "../LayrFrame.js";
import {RequestType} from "../LayrServerClient/RequestCommon/RequestType.js";
import {CollectionData} from "./CollectionData.js";

export class CollectionsManager {
    constructor() {
    }
    newCollection(collectionName:string,online?:Online_Off_Both){
        let collectionData=new CollectionData(collectionName)
        layrFrame.layrClient.newRequest(RequestType.insertCollection, collectionData)



    }


}