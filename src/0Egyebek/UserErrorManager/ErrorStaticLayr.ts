export interface LayrUserErrorStaticData {

    errorType: LayrUserErrorTypes
    errorMessage: string

}


export enum LayrUserErrorTypes {
    DocCantFind = "DocCantFind"

}

const errors: LayrUserErrorStaticData[] = []


errors.push({
    errorType: LayrUserErrorTypes.DocCantFind,
    errorMessage: "Cant Find Doc"

})

export function errorStaticGet(errorType: LayrUserErrorTypes) {
    return errors.find(error => {
        return error.errorType === errorType
    })
}