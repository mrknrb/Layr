import {PartBaseElement_Field} from "../../../../../../../SMP/PartsGeneral/PartBaseTypes/PartBaseElement_Field.js";
import {MrkLibrary} from "../../../../../../../../0Egyebek/MrkLibrary.js";
import {ElementObject} from "../../../../ElementObject.js";
import {QuickMenuBarBase} from "../../../../../../../UIElemek/QuickMenu/QuickMenuBarBase.js";
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
        setTimeout(() => {
            //yx kell ,mert amikor meg activalodik ez a mainelementben van, elegansabb megoldas kellene
            this.activateClickOrFullscreenInit()
        }, 50)


    }

    protected elementInit() {

        this.masterObject.element.classList.add("LayrElement")
        this.masterObject.element.style.border = `black`
        // this.masterObject.element.style.backgroundColor = "#90a4ae"
        this.masterObject.element.style.backgroundColor = "grey"

        this.masterObject.element.style.display = "flex"
        this.masterObject.element.style.paddingBottom = "4px"
        this.masterObject.element.style.flexDirection = "column"
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

    powerImage = document.createElement("img")

    activateClickOrFullscreenInit() {
        if (this.masterObject.element.parentElement?.id == "workScreenDiv") {
            this.loadingSelectorActivate()
            return
        }
        this.powerImage.src = "0Resources/power.svg"
        this.powerImage.style.height = "200px"
        this.powerImage.style.width = "200px"
        this.powerImage.style.margin = "0"
        this.powerImage.style.position = "absolute"
        this.powerImage.style.top = "50%"
        this.powerImage.style.left = "50%"
        this.powerImage.style.transform = "translate(-50%, -50%)"


        this.groupBodyElement.appendChild(this.powerImage)

        this.groupBodyElement.addEventListener("click", ev => {
            this.loadingSelectorActivate()
        })


    }

    loadingSelectorActivate() {
        let sel = this.masterObject.smpManager.smpSelectorDataDynamicMap.get(loadingSelectorDataNames.selector)
        if (!sel) return
        if (this.masterObject.smpManager.smpController.selectorActivatedCheck(sel)) return

        this.masterObject.smpManager.smpController.activateSelectorAndChildren(loadingSelectorDataNames.selector, true, true)
        this.powerImage.remove()
    }

    loadData() {


    }


    saveValue() {

    }

    deactivate() {

    }
}
