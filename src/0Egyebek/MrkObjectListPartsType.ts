import {MrkObjectList} from "./MrkObjectList.js";
import {PartBase} from "../Layr/SMP/PartsGeneral/PartBase.js";
import {SMPMasterObjectInterface} from "../Layr/SMP/SMPLayr/SMPMasterObjectInterface.js";
import {SMPManager} from "../Layr/SMP/SMPLayr/SMPManager.js";

export class MrkObjectListPartsType extends MrkObjectList {

    objects!: { className: string, object: PartBase }[]

    constructor(classList: any[], masterobject: SMPMasterObjectInterface, smpManager: SMPManager, objectsArg3?: any) {
        super(classList, masterobject, smpManager, objectsArg3);
    }

    getPartObject_ByName(partName: string) {
        let objectData = this.objects.find(object => {
            return object.object.getPartName() === partName

        })
        if (objectData === undefined) {
            console.error(`LayrError: Cant find partObject: ${partName}`, this)
            return undefined
        }
        return objectData.object
    }


}