import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {MrkLibrary} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {ElementObject} from "../../../../ElementObject.js";
import {QuickMenuBarBase} from "../../../../../../../../0Egyebek/QuickMenu/QuickMenuBarBase.js";
import {loadingSelectorDataNames} from "../GroupElementStaticData.js";

export class GroupElementMainPart extends PartBaseElement_Field {

    static partName = "Main"
    groupHeadElement: QuickMenuBarBase = new QuickMenuBarBase()
    groupBodyElement: HTMLDivElement = document.createElement("div")

    constructor(masterObject: ElementObject) {
        super(masterObject);
    }

    activate() {
        this.elementInit()
        this.groupHeadElementInit()
        this.groupBodyElementInit()
        this.activateWithClickInit()
    }

    protected elementInit() {

        this.masterObject.element.classList.add("LayrElement")
        this.masterObject.element.style.border = `black`
       // this.masterObject.element.style.backgroundColor = "#90a4ae"
        this.masterObject.element.style.backgroundColor = "grey"

        this.masterObject.element.style.display = "flex"
        this.masterObject.element.style.paddingBottom = "4px"
        this.masterObject.element.style.flexDirection = "column";
        this.masterObject.element.style.position = "relative"
        this.masterObject.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
    }

    groupHeadElementInit() {
        this.groupHeadElement.element.style.height = "30px"
        this.groupHeadElement.element.style.position = "relative"
        this.masterObject.element.appendChild(this.groupHeadElement.element)
    }

    groupBodyElementInit() {
        this.groupBodyElement.style.overflow = "auto"
        this.groupBodyElement.style.position = "relative"
        this.groupBodyElement.style.flex = "1 1"
        // MrkLibrary.shadowForOverlappingNodes(this.groupBodyElement)
        MrkLibrary.grabInit(this.groupBodyElement as HTMLDivElement)
        this.masterObject.element.appendChild(this.groupBodyElement)
    }

    activateWithClickInit() {


        let image = document.createElement("img")
        image.src = "0Resources/power.svg"
        image.style.height = "200px"
        image.style.width = "200px"
        image.style.margin="0"
        image.style.position="absolute"
        image.style.top="50%"
        image.style.left="50%"
        image.style.transform="translate(-50%, -50%)"



        this.groupBodyElement.appendChild(image)


        this.groupBodyElement.addEventListener("click", ev => {
            let sel = this.masterObject.smpManager.smpSelectorDataDynamicMap.get(loadingSelectorDataNames.selector)
            if (!sel) return
            if (this.masterObject.smpManager.smpController.selectorActivatedCheck(sel)) return
            image.remove()
            this.masterObject.smpManager.smpController.activateSelectorAndChildren(loadingSelectorDataNames.selector, true, true)

        })


    }


    loadData() {


    }


    saveValue() {

    }

    deactivate() {

    }
}
