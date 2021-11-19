import {StateObjectBase} from "./StateObjectBase.js";

export abstract class SelectorObjectBase {

    //abstract starterState: boolean
    abstract defaultStateClassName: string
    abstract requiredStates
    abstract stateObjectsList

    abstract requiredStatesInit()

    abstract innerStatesInit()


    classInMapInserter(map: Map<string, any>, classArray: any) {
        classArray.forEach(classObject => {

            this.requiredStates.set(classObject.name,classObject)

        })


    }

}


