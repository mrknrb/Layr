import {DocData} from "./DocData.js";

export interface DocDataResponse {
    docAbsoluteURL: string  //utolag, a parent alapjan le kell generalni, mert a kovetkezonel kelleni fog, hogy kitalald ezen absolut es a child relativ alapjan a child absolutjat
    docData: DocData
}