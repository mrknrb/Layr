import {ElementTypes} from "../../ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {GroupElementStyle} from "./GroupElementStyle.js";
import {GroupData} from "./GroupData.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";
import {MrkLibrary} from "../../../../../../Global/MrkLibrary.js";
import {FieldObject} from "../../../../../../Background/Data/Doc/Field/FieldObject.js";
import {GroupElementStates} from "./GroupElementStates.js";
import {TypedEvent} from "../../../../../../../0Libraries/TypedEvents.js";
import {GroupContextMButtonsManager} from "./GroupContextMButtonsManager.js";


export class GroupElement extends ElementBaseClass {
    element: HTMLDivElement
    elementResizer: ElementResizer
    elementStyle: GroupElementStyle
    fieldObject: FieldObject
    groupElementData: GroupData
    groupElementStates:GroupElementStates
    groupElementEventLoaded:TypedEvent<any>
    groupContextMButtonsManager:GroupContextMButtonsManager

    constructor(nodeDiv: NodeObjectInterface, elementData, elementSettings) {
        super(ElementTypes.Group, nodeDiv, elementData, elementSettings);
        this.groupElementEventLoaded=new TypedEvent<any>()
        this.groupElementData = this.fieldObject.fieldData.data
        this.groupElementStates=GroupElementStates.NotLoaded
        this.groupContextMButtonsManager=new GroupContextMButtonsManager(this)
        this.elementInit()

    }

    protected elementInit() {

        this.element = document.createElement("div")
        this.element.classList.add("LayrElement")
        this.element.style.border = `black`
        this.element.style.width = "calc(100% - 3px)"//"100%" //addig van ez így, amíg a nagyitasnal nem fedi le a mainelementet
        this.element.style.height = "50px"
        this.element.style.backgroundColor = "#90a4ae"
        this.element.style.overflow = "auto"
        this.element.style.position = "relative"
        this.element.style.resize = "vertical"

        this.element.addEventListener("mousedown", function (e) {
            e.stopPropagation()
        })
        MrkLibrary.grabInit(this.element)
        this.nodeObject.mainElement.element.appendChild(this.element)

        this.groupContextMButtonsManager.NonLoadedButtonsInit()
        this.groupElementEventLoaded.on( ()=> {
            this.groupContextMButtonsManager.LoadedButtonsInit()
        })

    }


    refreshData() {

    }

    deleteElement() {


    }


}