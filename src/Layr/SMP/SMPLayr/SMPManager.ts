import {SMPSelectorDataStatic} from "./DataBlueprints/SMPSelectorStaticData/SMPSelectorDataStatic.js";
import {SMPSelectorDataDynamic} from "./DataBlueprints/SMPSelectorDynamicData/SMPSelectorDataDynamic.js";
import {SMPSelectorDataSave} from "./DataBlueprints/SMPSelectorSaveData/SMPSelectorDataSave.js";
import {PartBase} from "../PartsGeneral/PartBase.js";
import {SMPController} from "./SMPController.js";
import {SMPManagerConfigFile} from "./SMPManagerConfigFile.js";
import {SMPMasterObjectInterface} from "./SMPMasterObjectInterface.js";
import {MrkObjectListPartsType} from "../../../0Egyebek/MrkObjectListPartsType.js";

export class SMPManager {


    masterObject: SMPMasterObjectInterface
    smpSelectorDataStaticArray: SMPSelectorDataStatic[]
    smpSelectorDataDynamicMap: Map<string, SMPSelectorDataDynamic>
    smpSelectorDataSaveObjects: any  // yx SMPSelectorDataSave - ekbol all
    smpSavePart: PartBase
    smpController: SMPController
    masterObjectParts: MrkObjectListPartsType

    constructor(smpManagerConfigFile: SMPManagerConfigFile) {

        this.smpSelectorDataSaveObjects = {}
        this.smpSelectorDataStaticArray = smpManagerConfigFile.SMPStaticData
        this.masterObject = smpManagerConfigFile.masterObject

        //  this.smpSavePart =new  smpManagerConfigFile.smpSavePart(this)


        this.masterObjectParts = new MrkObjectListPartsType(smpManagerConfigFile.PartsClassArray, this.masterObject, this)
        this.smpSavePart = this.masterObjectParts.getPartObject_ByName("SMPSave")

        this.smpSavePart.setActive(true)
        console.log(this.smpSelectorDataSaveObjects)
        this.smpSelectorDataDynamicMap = new Map<string, SMPSelectorDataDynamic>()
        this.smpController = new SMPController(this)

        this.smpSelectorDataInit()
       // this.contextMenuInsert()
        this.contextMenuInsert()
        this.smpController.activatedekAktivalasa()

    }

    smpSelectorDataInit() {

        this.smpSelectorDataStaticArray.forEach(selectorDataStatic => {
            console.log(this.smpSelectorDataSaveObjects)
            let smpSelectorDataSave = this.smpSelectorDataSaveObjects[selectorDataStatic.selectorName]
            /*let smpSelectorDataSave = this.smpSelectorDataSaveObjects.find(smSelectorDataSave => {
                return smSelectorDataSave.selectorName == selectorDataStatic.selectorName
            })*/

            if (!smpSelectorDataSave) {
                smpSelectorDataSave = new SMPSelectorDataSave(selectorDataStatic.selectorName)
                this.smpSelectorDataSaveObjects[selectorDataStatic.selectorName] = smpSelectorDataSave
            }
            let smSelectorDataDynamic = new SMPSelectorDataDynamic(selectorDataStatic, smpSelectorDataSave, this)
            this.smpSelectorDataDynamicMap.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
        })
    }

    contextMenuInsert() {
        this.smpSelectorDataDynamicMap.forEach(selector => {
            selector.selectorContextMenu.insertContextMenu()
        })
    }


}


