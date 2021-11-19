import {SelectorObjectBase} from "../../SelectorObjectBase.js";
import {StateObjectBase} from "../../StateObjectBase.js";
import {RootStates} from "../../States/RootStates.js";
import {TextAreaElement} from "../../../../TextAreaElement/TextAreaElement.js";
import {LayoutSelectorStatesList} from "./LayoutSelectorStatesList.js";

export class LayoutSelector extends SelectorObjectBase{
    defaultStateClassName: string;
    requiredStates: Map<string, StateObjectBase>;
    stateObjectsList: LayoutSelectorStatesList

    constructor() {
        super();
        this.requiredStates=new Map<string, StateObjectBase>()
        this.stateObjectsList=new LayoutSelectorStatesList(this)
    }


    requiredStatesInit(){
        this.classInMapInserter(this.requiredStates,RootStates)


    }

    innerStatesInit() {


    }
}
