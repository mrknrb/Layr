import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {ElementObject} from "../../../../ElementObject.js";
import {GroupElementMainPart} from "./GroupElementMainPart.js";
import {QuickMenuButtonBase} from "../../../../../../../UIElemek/QuickMenu/QuickMenuButtonBase.js";
import {CollectionExplorer} from "../../../../../../../LayrTools/File/Explorers/DocExplorer/CollectionExplorer.js";

export class GroupElementCollectionSelectorPart extends PartBaseElement_Field {

    static partName = "GroupElementCollectionSelectorPart"
    groupMainPart?: GroupElementMainPart
    collectionExplorerButton = new QuickMenuButtonBase()

    collectionExplorer! : CollectionExplorer

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.groupMainPart = this.getPartInMasterobject_byClass(GroupElementMainPart.partName) as GroupElementMainPart
        this.collectionExplorerButtonInit()
        this.collectionExplorer = new CollectionExplorer()
    }

    collectionExplorerButtonInit() {
        this.collectionExplorerButton.setText("Collection Explorer")
        this.collectionExplorerButton.element.addEventListener("click", ev => {
            this.collectionExplorer.window.closeOpenWindow(true)
        })
        this.groupMainPart?.groupHeadElement.quickMenuElementInsert(this.collectionExplorerButton)
    }

    collectionUserDropdownInit() {
        this.collectionExplorerButton.setText("Collection Explorer")
        this.groupMainPart?.groupHeadElement.quickMenuElementInsert(this.collectionExplorerButton)
    }

    collectionDropdownInit() {
        this.collectionExplorerButton.setText("Collection Explorer")
        this.groupMainPart?.groupHeadElement.quickMenuElementInsert(this.collectionExplorerButton)
    }

    loadData() {


    }


    saveValue() {
    }


    deactivate() {

    }


}
