import {MrkLibrary} from "../../0Egyebek/MrkLibrary.js";

export class CollectionData {

    _id: string
    collectionName: string
    publicPermission: PermissionTypes = PermissionTypes.none
    admins?: {
        adminName: string
        permission: PermissionTypes
        collectionSettingsEdit: boolean
    }[]
    collectionOwnerAdmin: string

    constructor(collectionName: string) {

        this._id = MrkLibrary.generateUUID()
        let userData = MrkLibrary.getUserDataCookie()
        this.collectionName=collectionName
        if (!userData || !userData.userName) return
        this.collectionOwnerAdmin = userData.userName
    }
}