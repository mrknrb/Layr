export class Lekerdezes {
    url: string
    callback: Function

    constructor(url: string, callback: Function) {
        this.url = url
        this.callback = callback
    }

    returnDoc(doc) {
        this.callback(doc)

    }


}