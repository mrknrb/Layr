import {ElementTypes} from "../../Adatok/ElementTypes.js";
import {ElementBaseClass} from "../../ElementBaseClass.js";
import {ElementResizer} from "../../ElementResizer/ElementResizer.js";
import {GroupElementStyle} from "./GroupElementStyle.js";
import {NodeObjectInterface} from "../../../NodeObject/NodeObjectInterface.js";
import {MrkLibrary} from "../../../../../../Global/MrkLibrary.js";
import {GroupElementStates} from "./GroupElementStates.js";
import {TypedEvent} from "../../../../../../../0Libraries/TypedEvents.js";
import {GroupContextMButtonsManager} from "./GroupContextMButtonsManager.js";
import {ElementStyleFinder} from "../../Adatok/ElementStyleFinder.js";
import {TextAreaElementStyle} from "../TextAreaElement/TextAreaElementStyle.js";


export class GroupElement extends ElementBaseClass {
    element: HTMLDivElement
    elementResizer: ElementResizer
    groupElementStates: GroupElementStates
    groupElementEventStateChange: TypedEvent<any>
    groupElementEventLoaded: TypedEvent<any>

    groupContextMButtonsManager: GroupContextMButtonsManager

    constructor(nodeObject: NodeObjectInterface, fieldId) {
        super(ElementTypes.Group, nodeObject, fieldId, document.createElement("div"));
       // let elementStyle=ElementStyleFinder.findElementStyleByPriority(this)as TextAreaElementStyle
        console.log( this.getElementStyle())
        this.groupElementEventLoaded = new TypedEvent<any>()
        this.groupElementStates = GroupElementStates.NotLoaded
        this.groupContextMButtonsManager = new GroupContextMButtonsManager(this)
        this.elementInit()

    }

    protected elementInit() {

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
        this.groupElementEventLoaded.on(() => {
            this.groupContextMButtonsManager.LoadedButtonsInit()
        })

    }


    elementsRefresh() {

    }

    deleteElement() {


    }


}