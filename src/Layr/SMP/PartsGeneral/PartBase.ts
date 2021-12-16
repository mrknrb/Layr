import {ContextMenu} from "../../ContextMenu/ContextMenu.js";

export abstract class PartBase {

    static partName: string
    partContextMenu: ContextMenu

    getPartName() {

        // @ts-ignore
        return this.constructor.partName
    }

    protected abstract masterObject: any
    //yx lehet kellhet meg
    /*
        selectorName: string
        stateName: string
    */
    protected constructor() {
        // setTimeout(() => {
        //     this.activate()
        // }, 50)
        this.active = false

    }

    protected active: boolean

    public isActive(): boolean {
        return this.active
    }

    protected getPartClassName() {
        return this.constructor.name
    }

    //yx lehet kellhet meg
    /*
        public setActive(active: boolean, selectorName?: string, stateName?: string) {
            this.selectorName = selectorName
            this.stateName = stateName
            this.active = active
            active ? this.activate() : this.deactivate()
        }
    */
    public setActive(active: boolean) {
        this.active = active
        active ? this.activate() : this.deactivate()
    }

    protected saveValueDefault(saveValue: any) {


        /*
        if (!dataObject[this.selectorName]) dataObject[this.selectorName] = {}

        if (!dataObject[this.selectorName][this.stateName]) dataObject[this.selectorName][this.stateName] = {}

        dataObject[this.selectorName][this.stateName][this.partName] = saveValue
*/
        // if (!dataObject.parts) dataObject.parts = {}

        this.getPartData().data = saveValue


        this.valueSync()
    }

    //eggyel lejjebb hasznalatos
    protected abstract getMasterDataObject()

    protected abstract getPartData()

    protected abstract valueSync()

    // yx lehet meg kellhet      protected abstract loadDataDefaultForPartBaseType()
    //yx  lehet meg kellhet      protected abstract saveValueDefaultForPartBaseType(saveValue:any)
    //kettovel lejjebb hasznalatos
    protected abstract activate()

    protected abstract deactivate()

    abstract loadData(data?: any)

    abstract saveValue(data?: any)


    //a vegere mindig oda kell tenni a changeSyncet. azert csinaltam igy , mert a savemainnel az argumentet nem lehet meghatarozni es  kulsos iranybol nem lehet elmenteni

}