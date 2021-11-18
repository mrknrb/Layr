export abstract class PartBase {


    protected abstract masterObject: any

    protected constructor() {
        setTimeout(() => {
            this.partInit()
        },50)


    }

    /*
        saveMain(data?: any) {

            this.saveValue(data)
            this.valueSync()
        }

        loadMain(data?: any) {
            this.loadData(data)
        }
    */
    protected getPartClassName() {
        return this.constructor.name
    }

    //eggyel lejjebb hasznalatos
    protected abstract getDataObject()


    protected abstract valueSync(fieldId_szeru_nullHaNincsIlyesmi?: any)

    //kettovel lejjebb hasznalatos
    protected abstract partInit()


    abstract loadData(data?: any)

    abstract saveValue(data?: any)

    //a vegere mindig oda kell tenni a changeSyncet. azert csinaltam igy , mert a savemainnel az argumentet nem lehet meghatarozni es  kulsos iranybol nem lehet elmenteni

}