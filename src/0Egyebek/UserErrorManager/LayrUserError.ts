import {errorStaticGet, LayrUserErrorStaticData, LayrUserErrorTypes} from "./ErrorStaticLayr.js";

export class LayrUserError {
    errType?:LayrUserErrorTypes
    details:string
    constructor(errType:LayrUserErrorTypes,details:string) {
        this.errType=errType
        this.details= details

    }


}