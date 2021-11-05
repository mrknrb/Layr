export class Lekerdezes {
    url: string
    promise: Promise<any>

    constructor(docId: string, promise: Promise<any>) {
        this.url = docId
        this.promise = promise

    }




}